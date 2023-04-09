import { noop } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '~/components/Form/Form';
import { NumberInput } from '~/components/Form/NumberInput';
import { RegenerationInput } from '~/components/Form/RegenerationInput';
import { SelectInput } from '~/components/Form/SelectInput';
import { BodyType, Height } from '~/constants/people/descriptions/build';
import {
  GENDER_EXPRESSION_OPTIONS,
  GenderExpression,
} from '~/constants/people/descriptions/meta';
import {
  CULTURE_SELECT_OPTIONS,
  CultureOption,
} from '~/constants/people/names/meta';
import { fetchName } from '~/libs/people/api';
import { NameShape, NameStyle } from '~/typings/names';

import { DescriptionAccordion } from './components/DescriptionAccordion';
import { NameAccordion } from './components/NameAccordion';
import {
  defaultValues as fieldDefaultValues,
  FormFields,
  PersonFormData,
} from './fieldData';
import { useFetchDescription } from './hooks';

interface PersonFormProps {
  includeAttributes?: boolean;
  defaultValues?: Partial<PersonFormData>;
}

export function PersonForm({
  includeAttributes,
  defaultValues,
}: PersonFormProps) {
  const [descriptionAge, setDescriptionAge] = useState<string>('');
  const [descriptionAppearanceIdx, setDescriptionAppearanceIdx] = useState<
    number | null
  >(null);

  const _defaultValues = useMemo(
    () => ({
      ...fieldDefaultValues,
      ...defaultValues,
    }),
    [defaultValues]
  ) as typeof fieldDefaultValues;

  const [nameCulture, setNameCulture] = useState(_defaultValues.base_culture);

  const { register, watch, setValue, control } = useForm({
    defaultValues: _defaultValues,
  });

  const baseCulture = watch(FormFields.baseCulture) as CultureOption;
  const givenStyle = watch(FormFields.givenNameStyle) as NameStyle;
  const familyStyle = watch(FormFields.familyNameStyle) as NameStyle;
  const shape = watch(FormFields.nameShape) as NameShape;
  const genderExpression = watch(
    FormFields.genderExpression
  ) as GenderExpression;
  const height = watch(FormFields.height) as Height;
  const bodyType = watch(FormFields.bodyType) as BodyType;
  const name: string = watch(FormFields.name);

  useEffect(() => {
    if (baseCulture) {
      setNameCulture(baseCulture);
    }
  }, [baseCulture]);

  const regenerateName = useCallback(async () => {
    const genName = await fetchName({
      genderExpression,
      nameStyles: [givenStyle, familyStyle],
      nameShape: shape,
      baseCultureOne: baseCulture,
    });
    return genName;
  }, [baseCulture, givenStyle, familyStyle, shape, genderExpression]);

  const makeDescription = useFetchDescription({
    age: descriptionAge,
    appearanceIdx: descriptionAppearanceIdx,
    bodyType,
    height,
    genderExpression,
    name,
  });

  return (
    <Form onSubmit={noop}>
      <RegenerationInput
        control={control}
        fieldName={FormFields.name}
        regenerateFn={regenerateName}
        regenerateOnUpdate
        setValue={setValue}
      />
      <SelectInput
        defaultValue={_defaultValues[FormFields.genderExpression]}
        fieldName={FormFields.genderExpression}
        label="Gender Expression"
        options={GENDER_EXPRESSION_OPTIONS}
        register={register}
      />
      <SelectInput
        defaultValue={_defaultValues[FormFields.baseCulture]}
        label="Name Base Culture"
        options={CULTURE_SELECT_OPTIONS}
        value={nameCulture}
        onChange={(e) => {
          const culture = e.target.value as CultureOption;
          setNameCulture(culture);
          setValue(FormFields.baseCulture, culture);
        }}
      />
      <NameAccordion register={register} />
      <DescriptionAccordion
        setDescriptionAge={setDescriptionAge}
        setDescriptionAppearanceIdx={setDescriptionAppearanceIdx}
        setValue={setValue}
      />
      <RegenerationInput
        control={control}
        fieldName={FormFields.description}
        multiline
        regenerateFn={makeDescription}
        setValue={setValue}
      />
      {includeAttributes && (
        <>
          <NumberInput
            fieldName={FormFields.intrigue}
            label="Intrigue"
            register={register}
            required
          />
          <NumberInput
            fieldName={FormFields.loyalty}
            label="Loyalty"
            register={register}
            required
          />
          <NumberInput
            fieldName={FormFields.might}
            label="Might"
            register={register}
            required
          />
        </>
      )}
      {/* TODO: Portrait Functionality */}
      {/* <Checkbox
        checked={showPortrait}
        labelDescription="Check this to show an auto-generated character portrait"
        labelTitle="Use character portrait"
        onChange={(e) => setShowPortrait(e.target.checked)}
      /> */}
      {/* {showPortrait && (
        <Box display="flex" gap={2}>
          <Suspense fallback={null}>
            <Portrait coordinates={coordinates} />
          </Suspense>
          <RegenerateButton
            name="Portrait"
            onClick={() =>
              setValue(FormFields.portraitCoords, [
                random(0, portraitCols - 1) * nextPortraitXShift,
                random(0, portraitRows - 1) * nextPortraitYShift,
              ])
            }
          />
        </Box>
      )} */}
    </Form>
  );
}
