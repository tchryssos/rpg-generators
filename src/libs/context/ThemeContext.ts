import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

interface ThemeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleColorMode: () => null,
});
