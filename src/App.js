import React, { Component } from 'react';
import Header from './Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';
import { withAuth } from './components/AuthContext';

/* import { ErrorBoundary } from './ErrorBoundary';
import {ComponentThatCanCrash} from './ComponentThatCanCrash'; 
        <ErrorBoundary>
               <ComponentThatCanCrash />
           </ErrorBoundary>*/

const pages = {
  login: <LoginForm/>,
  profile: <Profile/>,
  map: <Map/>,
  signup: <SignupForm/>,
}

class App extends Component {

  state = {
    currentPage: "login"
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

render() {

  return (
    <>
      <header>
          <Header navigateTo={(currentPage) => this.navigateTo(currentPage)}
          />
          </header>
        <main>
          <section>
            {pages[this.state.currentPage]({navigate: this.navigateTo})}
          </section>
        </main>
        </>
    )
  }
}

export default withAuth(App);