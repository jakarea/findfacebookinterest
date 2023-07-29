"use client";
import React, { ReactNode, useState } from "react";
import { AuthContext, AuthContextType, AuthState } from "./authContext";

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const value: AuthContextType = {
    state,
    setState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
