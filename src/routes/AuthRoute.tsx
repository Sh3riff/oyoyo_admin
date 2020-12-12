import React, { FC } from "react";
import { Route, Redirect, RouteProps, useLocation } from "react-router-dom";
import { AuthLayout } from "../containers";
import { useAuthState } from "../context/Auth";

const AuthRoute: FC<RouteProps> = ({ component, path, ...rest }: any) => {
  const { auth } = useAuthState();

  const location = useLocation();

  return auth.isAuthenticated ? (
    <AuthLayout>
      <Route component={component} path={path} {...rest} />
    </AuthLayout>
  ) : (
    <Redirect
      to={{ pathname: "/signin", state: { next: location.pathname } }}
    />
  );
};

export default AuthRoute;
