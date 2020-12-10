import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthLayout, Dashboard } from "../containers";
import { Signin, Signup } from "../containers/Authentication";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      {/* <Route path="*" component={() => <Redirect to="/d" />} /> */}
      <AuthLayout>
        <Switch>
          <Route exact path="/d" component={Dashboard} />
        </Switch>
      </AuthLayout>
    </Switch>
  );
};

export default Routes;
