import React, { Component } from 'react';
import Header from './Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';
import { AuthProvider, withAuth } from './components/AuthContext';

const pages = {
  login: <LoginForm/>,
  profile: <Profile/>,
  map: <Map/>,
  signup: <SignupForm/>,
}

class App extends Component {

  state = {
    isLoggedIn: false,
    currentPage: pages.map.id
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  login = ( email, password ) => {
  this.setState({ isLoggedIn: true });
};

logout = () => {
  this.setState({ isLoggedIn: false});
};
  
  handleChangePage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }};
    

render() {
  const { page, isLoggedIn } = this.state;

    return (
      <AuthProvider
        value={{
          login: this.login,
          logout: this.logout,
          isLoggedIn
        }}
      >
      <header>
          <Header page={page} handleChangePage={(currentPage) => this.handleChangePage(currentPage)}
          />
          </header>
        <main>
          <section>
            {pages[this.state.currentPage]}
          </section>
        </main>
        </AuthProvider>
    )
  }
}

export default App;