/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Slider, styled, Typography } from '@mui/material';
import { startCase } from 'lodash';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { Accordion } from '~/components/Accordion';
import { Checkbox } from '~/components/Form/Checkbox';
import { MuiLikeInputWrapper } from '~/components/Form/MuiLikeInputWrapper';
import { SelectInput, SelectOptGroup } from '~/components/Form/SelectInput';
import { AGES } from '~/constants/people/descriptions/age';
import { APPEARANCES } from '~/constants/people/descriptions/appearance';
import {
  BODY_TYPES,
  BodyType,
  Height,
  HEIGHTS,
} from '~/constants/people/descriptions/build';

import { FormFields } from '../fieldData';

const DisabledOpacity = styled(Box)<{ isDisabled: boolean }>`
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  display: flex;
  flex-direction: column;
`;

type DescriptionAccordionProps = {
  setValue: UseFormSetValue<any>;
  setDescriptionAge: (age: string) => void;
  setDescriptionAppearanceIdx: (idx: number | null) => void;
};

// START - AGE SELECT - START
const descDefault = 'any';

const ageOptions: SelectOptGroup[] = [
  {
    label: '',
    options: [
      ...AGES.map((age) => ({
        label: startCase(age.name),
        value: age.name,
      })),
      {
        value: '',
        description:
          "Default. Won't restrict the character to any particular age.",
        label: 'Any',
      },
    ],
  },
];
// END - AGE SELECT - END

// START - BUILD - START
const HEIGHT_OPTIONS: SelectOptGroup[] = [
  {
    label: '',
    options: HEIGHTS.map((h) => ({
      label: startCase(h),
      value: h,
    })),
  },
];

const BODY_TYPE_OPTIONS: SelectOptGroup[] = [
  {
    label: '',
    options: BODY_TYPES.map((bt) => ({
      label: startCase(bt),
      value: bt,
    })),
  },
];
const heightDefaultValue: Height = 'of average height';
const bodyTypeDefaultValue: BodyType = 'of average weight';
// END - BUILD - END

export function DescriptionAccordion({
  setValue,
  setDescriptionAge,
  setDescriptionAppearanceIdx,
}: DescriptionAccordionProps) {
  // START - APPEARANCE - START
  const [appearanceIdx, setAppearanceIdx] = useState<number>(
    Math.floor(APPEARANCES.length / 2)
  );
  const [useRandAppearance, setUseRandAppearance] = useState(true);

  useEffect(() => {
    if (!useRandAppearance) {
      setDescriptionAppearanceIdx(appearanceIdx);
    }
  }, [appearanceIdx, setDescriptionAppearanceIdx, useRandAppearance]);
  // END - APPEARANCE - END

  // START - BUILD - START
  const [useRandBuild, setUseRandBuild] = useState(true);
  const [buildHeight, setBuildHeight] = useState<Height>(heightDefaultValue);
  const [buildBodyType, setBuildBodyType] =
    useState<BodyType>(bodyTypeDefaultValue);
  // END - BUILD - END

  const onUpdateAge: ChangeEventHandler = (e) => {
    const { value } = e.target as HTMLInputElement;
    setDescriptionAge(value === descDefault ? '' : value);
  };

  const onToggleRandomApperance = () => {
    /**
     * If we're going from random -> slider controlled
     * set the desc index to the current slider idx
     * otherwise, set desc index back to `null`
     */
    setDescriptionAppearanceIdx(useRandAppearance ? appearanceIdx : null);
    setUseRandAppearance(!useRandAppearance);
  };

  const onToggleRandomBuild = () => {
    /**
     * If we're going from random -> select controlled
     * set the build to the current select value(s)
     * otherwise, set build to ''
     */
    setValue(FormFields.bodyType, useRandBuild ? buildBodyType : '');
    setValue(FormFields.height, useRandBuild ? buildHeight : '');
    setUseRandBuild(!useRandBuild);
  };

  return (
    <Accordion label="Description Properties">
      <Box display="flex" flexDirection="column" gap="1rem">
        <SelectInput label="Age" options={ageOptions} onChange={onUpdateAge} />
        <MuiLikeInputWrapper label="Build">
          <Box display="flex" flex={1} flexDirection="column">
            <Checkbox
              checked={useRandBuild}
              labelDescription="When this is checked, character height and body type will be randomized. Uncheck this to set a specific build below."
              labelTitle="Use Random Build"
              onChange={onToggleRandomBuild}
            />
            <DisabledOpacity isDisabled={useRandBuild}>
              <Box display="grid" gap={2} gridTemplateColumns="1fr 1fr" mt={2}>
                <SelectInput
                  defaultValue={heightDefaultValue}
                  disabled={useRandBuild}
                  label="Height"
                  options={HEIGHT_OPTIONS}
                  variant="standard"
                  onChange={(e) => {
                    setBuildHeight(e.target.value as Height);
                    setValue(FormFields.height, e.target.value as Height);
                  }}
                />
                <SelectInput
                  defaultValue={bodyTypeDefaultValue}
                  disabled={useRandBuild}
                  label="Body Type"
                  options={BODY_TYPE_OPTIONS}
                  variant="standard"
                  onChange={(e) => {
                    setBuildBodyType(e.target.value as BodyType);
                    setValue(FormFields.bodyType, e.target.value as BodyType);
                  }}
                />
              </Box>
            </DisabledOpacity>
          </Box>
        </MuiLikeInputWrapper>
        <MuiLikeInputWrapper label="Appearance">
          <Box display="flex" flex={1} flexDirection="column">
            <Checkbox
              checked={Boolean(useRandAppearance)}
              labelDescription='When this is checked, character appearance description
              will be random. Uncheck this to use the slider below to
              set a level of "attractiveness".'
              labelTitle="Use Random Appearance"
              onChange={onToggleRandomApperance}
            />
            <DisabledOpacity isDisabled={useRandAppearance}>
              <Slider
                disabled={useRandAppearance}
                max={APPEARANCES.length - 1}
                min={0}
                step={1}
                track={false}
                value={appearanceIdx}
                onChange={(_, n) => setAppearanceIdx(n as number)}
              />
              <Box display="flex" justifyContent="space-between">
                <Typography component="span" variant="caption">
                  More Hideous
                </Typography>
                <Typography component="span" variant="caption">
                  More Beautiful
                </Typography>
              </Box>
            </DisabledOpacity>
          </Box>
        </MuiLikeInputWrapper>
      </Box>
    </Accordion>
  );
}
