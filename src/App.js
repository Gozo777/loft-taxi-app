import React, { PureComponent } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { connect } from 'react-redux';

class App extends PureComponent {

  render() {

  return (
    <>
    <BrowserRouter>
          <Header />
          <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm}/>
        <PrivateRoute path="/" component={Map} />
        <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        </BrowserRouter>
</>
    )}}

/*
App.propTypes = {
  isLoggedIn: PropTypes.false
} */

export default connect(
  null,
)(App)
