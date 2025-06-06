import { useContext } from "react";
import { AuthContext, ThemeContext } from "./contexts";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};