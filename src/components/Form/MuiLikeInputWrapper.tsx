import { Box, styled, Typography } from '@mui/material';

import { pxToRem } from '~/libs/util/styles';

const Positioner = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.action.disabled,
  '&:hover': {
    borderColor: theme.palette.action.active,
  },
}));

const Notched = styled('fieldset')(({ theme }) => ({
  padding: `0 ${pxToRem(8)}`,
  margin: 0,
  position: 'absolute',
  top: pxToRem(-10),
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  borderColor: 'inherit',
  borderStyle: 'solid',
  borderWidth: pxToRem(1),
  borderRadius: theme.spacing(0.25),
  pointerEvents: 'none',
}));

const Legend = styled('legend')`
  padding: 0;
`;

const Label = styled(Typography)`
  /* These odd sizes come directly from MUI */
  transform: translate(${pxToRem(14)}, ${pxToRem(-9)});
  color: ${({ theme }) => theme.palette.text.secondary};
` as typeof Typography;

interface MuiLikeInputWrapperProps {
  children: React.ReactNode;
  label: string;
}

export function MuiLikeInputWrapper({
  children,
  label,
}: MuiLikeInputWrapperProps) {
  return (
    <Positioner position="relative">
      <Label
        component="label"
        left={0}
        position="absolute"
        top={0}
        variant="caption"
      >
        {label}
      </Label>
      <Box display="flex" px={pxToRem(14)} py={pxToRem(16)}>
        {children}
      </Box>
      <Notched>
        <Legend>
          {/**
           * This "hidden" typography creates an appropriately sized gap
           * in the FieldSet component, so that the real label can be used
           * and have a "blanked" out background.
           *
           * This is what MUI does for their Input components
           */}
          <Typography
            component="span"
            display="inline-block"
            px={pxToRem(5)}
            variant="caption"
            visibility="hidden"
          >
            {label}
          </Typography>
        </Legend>
      </Notched>
    </Positioner>
  );
}
