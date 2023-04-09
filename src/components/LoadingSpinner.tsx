import { HourglassBottom } from '@mui/icons-material';
import { Box, keyframes, styled, useTheme } from '@mui/material';

import { pxToRem } from '~/libs/util/styles';

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Spinner = styled(HourglassBottom)`
  animation: ${SpinAnimation} 1s infinite;
`;

interface LoadingSpinnerProps {
  className?: string;
  minimal?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export function LoadingSpinner({
  className,
  minimal,
  size = 'large',
}: LoadingSpinnerProps) {
  const theme = useTheme();
  return (
    <Box
      alignItems="center"
      className={className}
      display="flex"
      justifyContent="center"
    >
      <Box
        alignItems="center"
        border={
          minimal ? 'none' : `${pxToRem(2)} solid ${theme.palette.text.primary}`
        }
        borderRadius={pxToRem(4)}
        boxSizing="content-box"
        color={theme.palette.text.primary}
        display="flex"
        height={minimal ? undefined : pxToRem(40)}
        justifyContent="center"
        padding={0.25}
        width={minimal ? undefined : pxToRem(40)}
      >
        <Spinner aria-label="Loading" color="inherit" fontSize={size} />
      </Box>
    </Box>
  );
}
