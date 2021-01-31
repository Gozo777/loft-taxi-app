import React, { PureComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { connect } from 'react-redux';

/* import { ErrorBoundary } from './ErrorBoundary';
import {ComponentThatCanCrash} from './ComponentThatCanCrash'; 
        <ErrorBoundary>
               <ComponentThatCanCrash />
           </ErrorBoundary> */

class App extends PureComponent {

  render() {

  return (
  <>
      <Switch>
        <Route exact path="/" />
        <Route path="/signup" component={SignupForm}/>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/map" component={Map} />
        <PrivateRoute path="/profile" component={Profile} />
        <Redirect to="/login" />
        </Switch>
</>
    )
  }
}

/*
App.propTypes = {
  isLoggedIn: PropTypes.false
} */

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App);