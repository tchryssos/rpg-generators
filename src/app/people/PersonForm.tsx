/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { flatten, noop } from 'lodash';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, UseFormWatch } from 'react-hook-form';

import { Form } from '~/components/Form/Form';
import { NumberInput } from '~/components/Form/NumberInput';
import { RegenerationInput } from '~/components/Form/RegenerationInput';
import { SelectInput } from '~/components/Form/SelectInput';
import { Submit as SubmitButton } from '~/components/Form/Submit';
import {
  GENDER_EXPRESSION_OPTIONS,
  GenderExpression,
  LineageOption,
} from '~/constants/people/descriptions/meta';
import {
  CULTURE_SELECT_OPTIONS,
  CultureOption,
} from '~/constants/people/names/meta';
import {
  buildHouseDetailPath,
  CREATE_PERSON_API_ROUTE,
} from '~/constants/routes';
import { Tag } from '~/constants/tags';
import { makeSelectOptionsFromHousesByCampaign } from '~/libs/houses';
import { generateDescription } from '~/libs/people/descriptions';
import { generatePerson } from '~/libs/people/npc';
import { useGetHousesByCampaign } from '~/libs/query/useGetHousesByCampaign';
import { NameShape, NameStyle } from '~/typings/names';

import { DescriptionAccordion } from './components/DescriptionAccordion';
import { NameAccordion } from './components/NameAccordion';
import {
  defaultValues as fieldDefaultValues,
  FormFields,
  PersonFormData,
} from './fieldData';

interface PersonFormProps {
  includeAttributes?: boolean;
  defaultValues?: Partial<PersonFormData>;
}

interface SubmitProps {
  watch: UseFormWatch<any>;
  submitting: boolean;
}

function Submit({ watch, submitting }: SubmitProps) {
  const requiredVal = watch(FormFields.houseId);
  return <SubmitButton disabled={Boolean(!requiredVal)} loading={submitting} />;
}

export function PersonForm({
  includeAttributes,
  defaultValues,
}: PersonFormProps) {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [descriptionAge, setDescriptionAge] = useState<string>('');
  const [descriptionBuild, setDescriptionBuild] = useState<string>('');
  const [descriptionAppearanceIdx, setDescriptionAppearanceIdx] = useState<
    number | null
  >(null);

  const housesByCampaign = useGetHousesByCampaign();

  const _defaultValues = useMemo(
    () => ({
      ...fieldDefaultValues,
      ...defaultValues,
    }),
    [defaultValues]
  ) as typeof fieldDefaultValues;

  const [nameCulture, setNameCulture] = useState(_defaultValues.base_culture);

  const { register, watch, setValue, control, handleSubmit } = useForm({
    defaultValues: _defaultValues,
  });

  const baseCulture = watch(FormFields.baseCulture) as CultureOption;
  const givenStyle = watch(FormFields.givenNameStyle) as NameStyle;
  const familyStyle = watch(FormFields.familyNameStyle) as NameStyle;
  const shape = watch(FormFields.nameShape) as NameShape;
  const genderExpression = watch(
    FormFields.genderExpression
  ) as GenderExpression;
  const lineage = watch(FormFields.lineage) as LineageOption;
  const tags = watch(FormFields.tags) as Tag[];
  const houseId = watch(FormFields.houseId);

  useEffect(() => {
    if (houseId && housesByCampaign) {
      const houses = flatten(Object.values(housesByCampaign));
      const house = houses.find((h) => Number(h.house_id) === Number(houseId));
      if (house) {
        setValue(FormFields.baseCulture, house.base_culture);
      }
    }
  }, [houseId, housesByCampaign, setValue]);

  useEffect(() => {
    if (baseCulture) {
      setNameCulture(baseCulture);
    }
  }, [baseCulture]);

  const generateNpc = useCallback(() => {
    const npc = generatePerson({
      givenNameBaseCulture: baseCulture,
      familyNameBaseCulture: baseCulture,
      givenNameStyle: givenStyle,
      familyNameStyle: familyStyle,
      nameShape: shape,
      genderExpression,
    });
    return npc.fullName;
  }, [baseCulture, givenStyle, familyStyle, shape, genderExpression]);

  const makeDescription = useCallback(() => {
    const generatedDesc = generateDescription({
      setGenderExpression: genderExpression,
      setLineage: lineage,
      setTags: tags,
      setAge: descriptionAge,
      setBuild: descriptionBuild,
      setAppearance: descriptionAppearanceIdx,
    });
    return generatedDesc;
  }, [
    lineage,
    genderExpression,
    tags,
    descriptionAge,
    descriptionBuild,
    descriptionAppearanceIdx,
  ]);

  const selectOptions = useMemo(
    () => makeSelectOptionsFromHousesByCampaign(housesByCampaign),
    [housesByCampaign]
  );

  const onSubmit = async (data: PersonFormData) => {
    if (data.house_id) {
      setSubmitting(true);
      const resp = await fetch(CREATE_PERSON_API_ROUTE, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (resp.status === 200) {
        await router.push(buildHouseDetailPath(data.house_id));
      } else {
        setSubmitting(false);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit || noop)}>
      <SelectInput
        defaultValue=""
        disabled={selectOptions.length === 1}
        fieldName={FormFields.houseId}
        label="Faction Affiliation"
        options={selectOptions}
        register={register}
      />
      <RegenerationInput
        control={control}
        fieldName={FormFields.name}
        regenerateFn={generateNpc}
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
      <NameAccordion
        control={control}
        genderExpression={genderExpression}
        register={register}
        setValue={setValue}
      />
      <DescriptionAccordion
        setDescriptionAge={setDescriptionAge}
        setDescriptionAppearanceIdx={setDescriptionAppearanceIdx}
        setDescriptionBuild={setDescriptionBuild}
        setValue={setValue}
        watch={watch}
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
      <Submit submitting={submitting} watch={watch} />
    </Form>
  );
}
