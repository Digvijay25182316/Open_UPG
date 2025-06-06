import { createContext } from "react";

type ThemeState = { darkMode: boolean };
type ThemeAction = { type: "TOGGLE_THEME" };

type AuthState = {
    user: null | { id: string; name: string };
    isAuthenticated: boolean;
};

type AuthAction =
    | { type: "LOGIN"; payload: { id: string; name: string } }
    | { type: "LOGOUT" };

export const ThemeContext = createContext<{
    state: ThemeState;
    dispatch: React.Dispatch<ThemeAction>;
} | null>(null);

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
} | null>(null);