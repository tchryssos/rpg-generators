/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, MenuItem, TextField, Typography } from '@mui/material';
import { startCase } from 'lodash';
import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { SelectOptionBody } from './SelectOptionBody';

export interface SelectOptionObj {
  value: string;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOptionObj[];
}

type SelectInputBaseProps = {
  label: string;
  defaultValue?: string;
  options: SelectOptGroup[];
  variant?: 'standard' | 'outlined' | 'filled';
  disabled?: boolean;
  className?: string;
};

type SelectInputInteractionProps =
  | {
      fieldName?: never;
      register?: never;
      onChange: ChangeEventHandler<HTMLInputElement>;
      value?: string;
    }
  | {
      onChange?: never;
      fieldName: string;
      register: UseFormRegister<any>;
      value?: never;
    };

type SelectInputProps = SelectInputBaseProps & SelectInputInteractionProps;

export function SelectInput({
  label,
  fieldName,
  defaultValue = '',
  options,
  register,
  onChange,
  variant = 'outlined',
  disabled,
  value,
  className,
}: SelectInputProps) {
  return (
    <TextField
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      label={label}
      select
      variant={variant}
      onChange={onChange}
      {...register?.(fieldName || '')}
      value={value}
    >
      {/**
       * The weird array syntax on map here is because
       * MUI select inputs don't allow for fragment children,
       * they recommend using an array.
       */}
      {options.map((og) =>
        (og.options || []).map((o, optionIndex) => [
          ...(og.label && !optionIndex
            ? [
                <Divider key={`${og.label}-divider`} />,
                <li key={og.label}>
                  <Typography
                    color="text.secondary"
                    display="block"
                    sx={{ mt: 0.25, ml: 1 }}
                    variant="caption"
                  >
                    {og.label}
                  </Typography>
                </li>,
              ]
            : [null]),
          <MenuItem key={o.value} value={o.value}>
            <SelectOptionBody
              description={o.description}
              label={o.label || startCase(o.value)}
            />
          </MenuItem>,
        ])
      )}
    </TextField>
  );
}
