import React, { useState, createContext, FC, useEffect } from "react";

interface ContextProps {
  auth: AuthProps;
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
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

  const userData = localStorage.getItem("userData");

  useEffect(() => {
    const checkAuth = () => {
      if (userData) {
        return true;
      }
      return false;
    };

    if (checkAuth()) {
      const userDetails = JSON.parse(userData!);
      setAuth({
        isAuthenticated: true,
        credentials: userDetails,
      });
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
