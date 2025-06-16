// ThemeProvider.tsx or ThemeContextProvider.tsx
import React, { useReducer } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./contexts";

type ThemeState = { darkMode: boolean };
type ThemeAction = { type: "TOGGLE_THEME" };

// Detect system preference (light/dark)
const getPreferredTheme = (): ThemeState => {
  if (typeof window !== "undefined" && window.matchMedia) {
    const prefersDark = window.matchMedia("prefers-color-scheme: dark").matches;
    console.log(prefersDark);
    return { darkMode: prefersDark };
  }
  return { darkMode: false };
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    undefined,
    getPreferredTheme
  );

  React.useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", state.darkMode ? "dark" : "light");
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
