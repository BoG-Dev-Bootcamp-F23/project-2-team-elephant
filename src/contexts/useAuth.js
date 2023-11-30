import { useContext, createContext, useState } from "react";

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

