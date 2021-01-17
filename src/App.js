import React, { Component } from 'react';
import Header from './Header';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Map from './components/Map';
import Profile from './components/Profile';

const pages = {
  login: <LoginPage />,
  profile: <Profile />,
  map: <Map />,
  signup: <SignupPage/>
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
