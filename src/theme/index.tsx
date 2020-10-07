import React, {createContext, ReactNode} from 'react';

import typography from './typography';
import colors from './colors';

const theme = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  colors,
  typography,
};

export type Theme = typeof theme;

const ThemeContext = createContext(theme);

function ThemeProvider({children}: {children: ReactNode}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider};
