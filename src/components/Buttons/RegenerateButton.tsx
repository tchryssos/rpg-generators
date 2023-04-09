import Loop from '@mui/icons-material/Loop';
import { Button } from '@mui/material';

interface RegenerateButtonProps {
  name: string;
  onClick: () => void;
}

export function RegenerateButton({ name, onClick }: RegenerateButtonProps) {
  return (
    <Button
      aria-label={`Regenerate ${name}`}
      variant="outlined"
      onClick={onClick}
    >
      <Loop />
    </Button>
  );
}
