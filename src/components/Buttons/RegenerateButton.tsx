import Loop from '@mui/icons-material/Loop';
import { Button, keyframes, styled } from '@mui/material';

interface RegenerateButtonProps {
  name: string;
  onClick: () => void;
  isLoading?: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const SpinningLoop = styled(Loop)<Pick<RegenerateButtonProps, 'isLoading'>>(
  ({ isLoading }) => ({
    ...(isLoading && {
      animation: `${spin} 1s linear infinite`,
    }),
  })
);

export function RegenerateButton({
  name,
  onClick,
  isLoading,
}: RegenerateButtonProps) {
  return (
    <Button
      aria-label={`Regenerate ${name}`}
      variant="outlined"
      onClick={onClick}
    >
      <SpinningLoop isLoading={isLoading} />
    </Button>
  );
}
