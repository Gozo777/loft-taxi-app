import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import Profile from '../Profile';
import Map from '../Map';
import PrivateRoute from '../PrivateRoute';

export default Router => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/map" component={Map} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
};

