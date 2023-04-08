/* eslint-disable react/jsx-props-no-spreading */
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import type { AppProps } from 'next/app';
import { useEffect, useMemo, useState } from 'react';

import { createThemeByMode } from '~/constants/theme';
import { ThemeContext } from '~/libs/context/ThemeContext';

function Page({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default Page;
