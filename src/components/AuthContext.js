import React, { Component } from 'react';

const { Provider, Consumer: AuthConsumer, } = React.createContext('');

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  login = () => {
      this.setIsLoggedIn(true)
  };
  logout = () => {
    this.setIsLoggedIn(false)
  };
    
  render() {
    const { children } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <Provider value={{ isLoggedIn, login: this.login, logout: this.logout}}>
        {children}
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

export { AuthProvider, AuthConsumer, withAuth };