import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import Map from './components/Map/Map';
import Profile from './components/Profile/Profile';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import './App.css';

const routes = ['map', 'profile', 'logout'];

const App = ({ authed }) => (
  <div className='App'>
  <BrowserRouter>
    {authed && <Header routes={routes} />}
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <PrivateRoute path="/profile" component={Profile} authed={authed} />
      <PrivateRoute path="/" component={Map} authed={authed} />
      <Route path="*" component={LoginForm} />
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </div>
);

App.propTypes = {
  authed: PropTypes.bool,
};

App.defaultProps = {
  authed: false,
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

export default connect(mapStateToProps)(App);
