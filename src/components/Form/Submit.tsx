import { LoadingButton } from '../Buttons/LoadingButton';

interface SubmitProps {
  disabled?: boolean;
  loading: boolean;
  label?: string;
}
export function Submit({ disabled, loading, label = 'Submit' }: SubmitProps) {
  return (
    <LoadingButton
      disabled={disabled || loading}
      label={label}
      loading={loading}
      type="submit"
    />
  );
}
