/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, TextField } from '@mui/material';
import { debounce, startCase } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import { RegenerateButton } from '../Buttons/RegenerateButton';

interface RegenerationInputProps {
  fieldName: string;
  regenerateFn: (() => string) | (() => Promise<string>);
  control: Control<any, object>;
  setValue: UseFormSetValue<any>;
  multiline?: boolean;
  label?: string;
  regenerateOnUpdate?: boolean;
}

export function RegenerationInput({
  regenerateFn,
  fieldName,
  control,
  setValue,
  multiline,
  label,
  regenerateOnUpdate,
}: RegenerationInputProps) {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onRegenerate = useCallback(
    debounce(async () => {
      setIsLoading(true);
      const newVal = await regenerateFn();
      setValue(fieldName, newVal);
      setIsLoading(false);
    }, 100),
    [fieldName, regenerateFn, setValue]
  );

  useEffect(() => {
    if (regenerateOnUpdate) {
      onRegenerate();
    }
  }, [onRegenerate, regenerateOnUpdate]);

  return (
    <Box display="flex" gap={2} width="100%">
      <Controller
        control={control}
        name={fieldName}
        render={({ field }) => (
          <TextField
            {...field}
            InputLabelProps={{ shrink: Boolean(field.value) }}
            disabled={isLoading}
            fullWidth
            label={label || startCase(fieldName)}
            multiline={multiline}
          />
        )}
      />
      <RegenerateButton
        isLoading={isLoading}
        name={fieldName}
        onClick={onRegenerate}
      />
    </Box>
  );
}
