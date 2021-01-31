import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Map from './Map';
import Profile from './Profile';

const { Provider, Consumer: AuthConsumer, } = React.createContext({isLoggedIn: false});

class AuthProvider extends Component {
  loginPath = '/login';
  state = {
    isLoggedIn: false,
  };

  login = () => {
    this.setState({ isLoggedIn: true })
  };
  logout = () => {
    this.setState({ isLoggedIn: false })
  };
    
  render() {
    const { children } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <Provider value={{ isLoggedIn, loginPath: this.loginPath, login: this.login, logout: this.logout}}>
        {children}
        <Link to="/login">Login</Link>{' '}
        <Link to="/map">Map</Link>{' '}
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign up</Link>
        <hr />
        <Switch>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/login" component={LoginForm}/>
          <PrivateRoute path="/map" component={Map}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <Redirect to="/login" />
        </Switch>
      </Provider>
    );
  }
}

function withAuth(WrappedComponent) {
  return class extends Component {

    render() {
      return (
        <AuthConsumer>
          {
            (value) => {
              return <WrappedComponent {...value} {...this.props}/>
            }
          }
        </AuthConsumer>
      );
    }
  };
}

let PrivateRoute = ({
  component: RouteComponent,
  isLoggedIn,
  loginPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isLoggedIn ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={loginPath} />
      )
    }
  />
);
 
PrivateRoute = withAuth(PrivateRoute);

export { AuthProvider, AuthConsumer, withAuth };