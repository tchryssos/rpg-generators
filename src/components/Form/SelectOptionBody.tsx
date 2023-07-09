import { Box, styled, Typography } from '@mui/material';

export interface SelectOptionProps {
  label: string;
  description?: string;
}

const Body = styled(Box)`
  max-width: 90vw;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 80vw;
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    max-width: 60vw;
  } ;
`;

export function SelectOptionBody({ label, description }: SelectOptionProps) {
  return (
    <Body display="flex" flexDirection="column" whiteSpace="normal">
      <Typography>{label}</Typography>
      {description && <Typography variant="caption">{description}</Typography>}
    </Body>
  );
}
