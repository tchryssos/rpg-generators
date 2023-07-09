import { styled } from '@mui/material';

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));
