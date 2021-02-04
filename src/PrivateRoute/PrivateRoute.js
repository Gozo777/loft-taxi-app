import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

export const PrivateRoute = ({ component: RouteComponent, ...props }) => (
  <Route
    render={() => (
      props.authed ? (
        <RouteComponent {...props} />
      ) : (
        <Redirect to="/login" component={LoginForm} />
      )
    )}
  />
);