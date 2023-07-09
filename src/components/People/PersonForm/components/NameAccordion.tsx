/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

import { Accordion } from '~/components/Accordion';
import { SelectInput } from '~/components/Form/SelectInput';
import {
  NAME_SHAPE_OPTIONS,
  NAME_STYLE_OPTIONS,
} from '~/constants/people/names/meta';

import { defaultValues, FormFields } from '../fieldData';

interface NameAccordionProps {
  register: UseFormRegister<any>;
}

export function NameAccordion({ register }: NameAccordionProps) {
  return (
    <Accordion label="Name Properties">
      <Box display="flex" flexDirection="column" gap="1rem">
        <SelectInput
          defaultValue={defaultValues[FormFields.givenNameStyle]}
          fieldName={FormFields.givenNameStyle}
          label="Given Name Style"
          options={NAME_STYLE_OPTIONS}
          register={register}
        />
        <SelectInput
          defaultValue={defaultValues[FormFields.familyNameStyle]}
          fieldName={FormFields.familyNameStyle}
          label="Family Name Style"
          options={NAME_STYLE_OPTIONS}
          register={register}
        />
        <SelectInput
          defaultValue={defaultValues[FormFields.nameShape]}
          fieldName={FormFields.nameShape}
          label="Name Shape"
          options={NAME_SHAPE_OPTIONS}
          register={register}
        />
      </Box>
    </Accordion>
  );
}
