import React, { useState, createContext, FC } from "react";

interface ContextProps {
  auth: AuthProps;
}

interface AuthProps {
  isAuthenticated: boolean;
  credentials: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    token?: string;
  };
}

const AuthContext = createContext<ContextProps | undefined>(undefined);

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthProps>({
    isAuthenticated: false,
    credentials: {},
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

function useAuthState() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

export { AuthProvider, useAuthState };
