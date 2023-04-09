/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, TextField } from '@mui/material';
import { debounce, startCase } from 'lodash';
import { useCallback, useEffect } from 'react';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import { RegenerateButton } from '../Buttons/RegenerateButton';

interface RegenerationInputProps {
  fieldName: string;
  regenerateFn: () => string;
  control: Control<any, object>;
  setValue: UseFormSetValue<any>;
  multiline?: boolean;
  label?: string;
  skipInitial?: boolean;
}

export function RegenerationInput({
  regenerateFn,
  fieldName,
  control,
  setValue,
  multiline,
  label,
  skipInitial,
}: RegenerationInputProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onRegenerate = useCallback(
    debounce(() => {
      const newVal = regenerateFn();
      setValue(fieldName, newVal);
    }, 100),
    [fieldName, regenerateFn, setValue]
  );

  useEffect(() => {
    if (!skipInitial) {
      onRegenerate();
    }
  }, [onRegenerate, skipInitial]);

  return (
    <Box display="flex" gap={1} width="100%">
      <Controller
        control={control}
        name={fieldName}
        render={({ field }) => (
          <TextField
            {...field}
            InputLabelProps={{ shrink: Boolean(field.value) }}
            fullWidth
            label={label || startCase(fieldName)}
            multiline={multiline}
          />
        )}
      />
      <RegenerateButton name={fieldName} onClick={onRegenerate} />
    </Box>
  );
}
