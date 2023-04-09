/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

interface NumberInputProps {
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  fieldName: string;
}

export function NumberInput({
  label,
  required,
  register,
  fieldName,
}: NumberInputProps) {
  return (
    <TextField
      // See https://mui.com/material-ui/react-text-field/#type-quot-number-quot=
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      label={label}
      type="number"
      {...register(fieldName, { required })}
    />
  );
}
