'use client';

import {
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  styled,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import { createThemeByMode } from '~/constants/theme';
import { ThemeContext } from '~/libs/context/ThemeContext';
import { pxToRem } from '~/libs/util/styles';

const Container = styled('main')`
  max-width: ${({ theme }) => pxToRem(theme.breakpoints.values.lg)};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

interface RootProvidersProps {
  children: React.ReactNode;
}

export function RootProviders({ children }: RootProvidersProps) {
  // https://mui.com/customization/dark-mode/#system-preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [colorMode, setColorMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  // On load, sometimes prefersDarkMode updates after initial render
  useEffect(() => {
    setColorMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = () =>
    setColorMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

  const theme = useMemo(() => createThemeByMode(colorMode), [colorMode]);

  const themeContextVal = useMemo(
    () => ({
      mode: colorMode,
      toggleColorMode,
    }),
    [colorMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={themeContextVal}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            'html, body, #app, #__next': {
              height: '100%',
              width: '100%',
            },
            'h1, h2, h3, h4, h5, h6, p, pre, figure, ul, li': {
              padding: 0,
              margin: 0,
            },
            'li, ul': {
              listStyle: 'none',
            },
          }}
        />
        <Container>{children}</Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
