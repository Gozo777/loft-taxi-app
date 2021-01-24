import React, { Component } from 'react';
import Header from './Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';
import { withAuth } from './components/AuthContext';

const pages = {
  login: <LoginForm/>,
  profile: <Profile/>,
  map: <Map/>,
  signup: <SignupForm/>,
}

class App extends Component {

  state = {
    currentPage: pages.map.id
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };
  
  handleChangePage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }};
    

render() {

  return (
    <>
      <header>
          <Header handleChangePage={(currentPage) => this.handleChangePage(currentPage)}
          />
          </header>
        <main>
          <section>
            {pages[this.state.currentPage]}
          </section>
        </main>
        </>
    )
  }
}

export default withAuth(App);