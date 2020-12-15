import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../containers";
import { Signin, Signup } from "../containers/Authentication";
import Categories from "../containers/Categories";
import AuthRoute from "./AuthRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <AuthRoute exact path="/d" component={Dashboard} />
      <AuthRoute path="/d/categories" component={Categories} />
      <Route
        path="/"
        component={() => (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
