import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

import { CheckboxLabel } from './components/CheckboxLabel';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelTitle: string;
  labelDescription?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  labelTitle,
  labelDescription,
}) => (
  <FormGroup>
    <FormControlLabel
      control={<MuiCheckbox checked={checked} onChange={onChange} />}
      label={
        <CheckboxLabel description={labelDescription} title={labelTitle} />
      }
    />
  </FormGroup>
);
