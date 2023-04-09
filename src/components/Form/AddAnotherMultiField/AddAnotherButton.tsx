import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface AddAnotherButtonProps {
  onClick: () => void;
}

export function AddAnotherButton({ onClick }: AddAnotherButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <Add />
    </IconButton>
  );
}
