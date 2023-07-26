import { createContext, useContext } from "react";

// Define the type for your state here
export type AuthState = {
  isAuthenticated: boolean;
  user: any;
};

// Define the type for your context value
export type AuthContextType = {
  state: AuthState;
  setState: (state: AuthState) => any;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
