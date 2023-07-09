import { sample, upperFirst } from 'lodash';

import { GenderExpression } from '~/constants/people/descriptions/meta';
import { FAMILY_NAMES } from '~/constants/people/names/familyNames';
import { GIVEN_NAMES } from '~/constants/people/names/givenNames';
import { CultureOption } from '~/constants/people/names/meta';
import { FirstNameObj, NameStyle } from '~/typings/names';

import { formatNameByStyle, generateName } from '../names';

export const defaultNameOverrides = {
  sci_fi_trope_human: {
    given: GIVEN_NAMES.sci_fi_trope_human,
    family: FAMILY_NAMES.sci_fi_trope_human,
  },
} as Record<
  CultureOption,
  {
    given?: FirstNameObj;
    family?: string[];
  }
>;

interface GetNameArgs {
  baseCulture: CultureOption;
  genderExpression: GenderExpression;
  nameStyle?: NameStyle;
  nameOverrides?: string[];
  nameKind: 'given' | 'family';
}

export const getName = ({
  baseCulture,
  genderExpression,
  nameStyle,
  nameKind,
  nameOverrides,
}: GetNameArgs) => {
  if (nameOverrides?.length) {
    return upperFirst(sample(nameOverrides)!);
  }

  let name = '';

  switch (nameKind) {
    case 'family':
      name = generateName(FAMILY_NAMES[baseCulture]);
      break;
    case 'given':
    default:
      name = generateName(GIVEN_NAMES[baseCulture][genderExpression]);
      break;
  }

  return formatNameByStyle(name, nameStyle);
};
