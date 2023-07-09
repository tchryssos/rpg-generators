import { Button, styled } from '@mui/material';

import { LoadingSpinner } from '../LoadingSpinner';

type LoadingButtonBaseProps = {
  disabled?: boolean;
  loading: boolean;
  label: string;
};

type SubmitProps = {
  type: 'submit';
  onClick?: never;
};

type ButtonProps = {
  type: 'button';
  onClick: () => void;
};

type LoadingButtonProps = LoadingButtonBaseProps & (SubmitProps | ButtonProps);

const Styled = styled(Button)`
  min-width: ${({ theme }) => theme.spacing(8)}; // 100ish
  max-width: ${({ theme }) => theme.spacing(15)}; //240
`;

export function LoadingButton({
  disabled,
  loading,
  label,
  type = 'button',
  onClick,
}: LoadingButtonProps) {
  return (
    <Styled
      disabled={disabled || loading}
      type={type}
      variant="outlined"
      onClick={onClick}
    >
      {loading ? <LoadingSpinner minimal size="small" /> : label}
    </Styled>
  );
}
