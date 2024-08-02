"use client";

import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";
import { Titillium_Web } from "next/font/google";

const font = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const theme = extendTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    button: {
      fontFamily: font.style.fontFamily,
    },
  },
});

export function ThemeProvider({ children }) {
  return (
    <CssVarsProvider defaultMode="system" theme={theme}>
      {children}
    </CssVarsProvider>
  );
}
