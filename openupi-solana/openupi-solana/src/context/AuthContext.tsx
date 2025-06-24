// src/context/AuthContext.tsx
import { useReducer } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./contexts";

type AuthState = {
    user: null | { id: string; name: string };
    isAuthenticated: boolean;
};

type AuthAction =
    | { type: "LOGIN"; payload: { id: string; name: string } }
    | { type: "LOGOUT" };

const initialAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { user: null, isAuthenticated: false };
        default:
            return state;
    }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
