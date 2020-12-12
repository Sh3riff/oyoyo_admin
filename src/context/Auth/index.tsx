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

  const checkAuth = () => {
    if (localStorage.getItem("userData")) {
      return true;
    }
    return false;
  };

  // useEffect(() => {
  //   if (checkAuth()) {
  //     const userData = localStorage.getItem("userData");
  //     const userDetails = JSON.parse(userData!);
  //     setAuth({
  //       isAuthenticated: true,
  //       credentials: userDetails,
  //     });
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
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
