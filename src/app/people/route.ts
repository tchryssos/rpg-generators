/* eslint-disable @typescript-eslint/no-explicit-any */
import { sample, trim } from 'lodash';
import { NextApiHandler } from 'next';

import { APPEARANCES } from '~/constants/people/descriptions/appearance';
import {
  BODY_TYPES,
  BodyType,
  Height,
  HEIGHTS,
} from '~/constants/people/descriptions/build';
import { GenderExpression } from '~/constants/people/descriptions/meta';
import { PERSONALITIES } from '~/constants/people/descriptions/personality';
import { CultureOption } from '~/constants/people/names/meta';
import { handleRequestError } from '~/libs/errors/api';
import { getBaseCultures } from '~/libs/people/baseCulture';
import { getAge } from '~/libs/people/descriptions';
import { getGenderExpression } from '~/libs/people/genderExpression';
import { defaultNameOverrides, getName } from '~/libs/people/name';
import { NameShape, NameStyle } from '~/typings/names';
import { shapeName } from '~/libs/names';

export enum PersonGenerationFields {
  Name = 'name',
  Description = 'description',
}

export interface GeneratePersonNameBody {
  type: PersonGenerationFields.Name;
  baseCultureOne?: CultureOption;
  baseCultureTwo?: CultureOption;
  mixCultures?: boolean;
  genderExpression: GenderExpression;
  nameStyles?: [NameStyle, NameStyle];
  nameShape?: NameShape;
}

export interface GeneratePersonDescriptionBody {
  type: PersonGenerationFields.Description;
  genderExpression: GenderExpression;
  age?: string;
  bodyType?: BodyType;
  height?: Height;
  appearanceIdx?: number | null;
  name?: string;
}

type GeneratePersonBody =
  | GeneratePersonNameBody
  | GeneratePersonDescriptionBody;

export interface GeneratePersonNameResponse {
  fullName: string;
}

export type GeneratePersonDescriptionResponse = {
  description: string;
};

export enum GeneratePersonErrors {
  InvalidType = 'Invalid type',
}

const generateName: NextApiHandler = async (req, res) => {
  try {
    const {
      baseCultureOne,
      baseCultureTwo,
      genderExpression,
      mixCultures,
      nameStyles,
      nameShape,
    } = (await JSON.parse(req.body)) as GeneratePersonNameBody;

    const {
      baseCultureOne: genBaseCultureOne,
      baseCultureTwo: genBaseCultureTwo,
    } = getBaseCultures({
      baseCultureOne,
      baseCultureTwo,
      mixCultures:
        baseCultureOne && baseCultureTwo && baseCultureOne !== baseCultureTwo
          ? true
          : mixCultures,
    });

    const safeGender = getGenderExpression(genderExpression);

    const givenName = getName({
      baseCulture: genBaseCultureOne,
      genderExpression: safeGender,
      nameKind: 'given',
      nameStyle: nameStyles?.[0] || 'none',
      nameOverrides:
        defaultNameOverrides[genBaseCultureOne]?.given?.[safeGender],
    });

    const familyName = getName({
      baseCulture: genBaseCultureTwo,
      genderExpression: safeGender,
      nameKind: 'family',
      nameStyle: nameStyles?.[1] || 'none',
      nameOverrides: defaultNameOverrides[genBaseCultureTwo]?.family,
    });

    const fullName = shapeName(givenName, familyName, nameShape);

    return res.status(200).json({ fullName });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const generateDescription: NextApiHandler = async (req, res) => {
  try {
    const { age, genderExpression, bodyType, height, appearanceIdx, name } =
      (await JSON.parse(req.body)) as GeneratePersonDescriptionBody;

    const genAge = getAge(age);
    const genBodyType = bodyType || sample(BODY_TYPES)!;
    const genHeight = height || sample(HEIGHTS)!;
    const genAppearance = appearanceIdx
      ? APPEARANCES[appearanceIdx]
      : sample(APPEARANCES)!;
    const genPersonality = sample(PERSONALITIES)!;

    const aiPrompt = makeDescriptionPrompt({
      age: genAge,
      bodyType: genBodyType,
      height: genHeight,
      appearance: genAppearance.name,
      personality: genPersonality,
      genderExpression,
      name,
    });

    const openAiResponse = await openAi.createCompletion({
      // See https://beta.openai.com/docs/api-reference/completions/create
      model: TEXT_MODEL,
      prompt: aiPrompt,
      max_tokens: MAX_TOKENS,
      temperature: 0.9,
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
    });

    return res.status(200).json({
      description: trim(openAiResponse.data.choices[0].text),
    });
  } catch (error) {
    const message = handleOpenAiErrors(
      (error as any).response,
      PersonGenerationFields.Description
    );

    return handleRequestError({
      status: (error as any).response.status,
      message,
      name: PersonGenerationFields.Description,
      res,
    });
  }
};

const generatePerson: NextApiHandler = async (req, res) => {
  const { type } = (await JSON.parse(req.body)) as GeneratePersonBody;

  switch (type) {
    case PersonGenerationFields.Name:
      await generateName(req, res);
      break;
    case PersonGenerationFields.Description:
      await generateDescription(req, res);
      break;
    default:
      handleRequestError({
        status: 400,
        message: GeneratePersonErrors.InvalidType,
        res,
      });
  }
};

export default generatePerson;
