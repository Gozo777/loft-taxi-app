import React, { Component } from 'react';
import Header from './Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Map from './components/Map';
import Profile from './components/Profile';

const pages = {
  login: <LoginForm/>,
  profile: <Profile />,
  map: <Map />,
  signup: <SignupForm/>
}

class App extends Component {

  state = { currentPage: "map" };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <Header changePage={(page) => this.changePage(page)}
        />
        <main>
          <section>
            {pages[this.state.currentPage]}
          </section>
        </main>
      </>
    )
  }
}

export default App;
