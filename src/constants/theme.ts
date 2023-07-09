import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { merge } from 'lodash';

import { DeepPartial } from '~/typings/util';

export const mapIconTextBgColor = '#f0f8ff';

/**
 * per https://mui.com/customization/breakpoints/
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 */

export const sharedTheme: DeepPartial<ThemeOptions> = {
  spacing: (factor: number) => `${factor}rem`,
};

export const darkTheme: DeepPartial<ThemeOptions> = {
  palette: {
    mode: 'dark',
  },
};

export const lightTheme: DeepPartial<ThemeOptions> = {
  palette: {
    mode: 'light',
  },
};

// Typing of createTheme seems to expect a fully formed ThemeOptions obj
// but the documentation suggests that this can be an obj that overrides
// any subset of fields, hence the re-typing here.
// see https://mui.com/customization/palette/#adding-new-colors
export const createThemeByMode = (mode: PaletteMode) =>
  createTheme(
    merge(sharedTheme, mode === 'dark' ? darkTheme : lightTheme) as Record<
      string,
      unknown
    >
  );
