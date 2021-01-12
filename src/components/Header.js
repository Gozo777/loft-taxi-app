import React, { Component } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Map from './Map';
import Profile from './Profile';


class Header extends Component {

  state = { page: "Hello"};

  increment1 = () => {
    this.setState({ page: <LoginPage /> })
  };

  increment2 = () => {
    this.setState({ page: <Profile/>})
  };

  increment3 = () => {
    this.setState({ page: <Map/>})
  };

  increment4 = () => {
    this.setState({ page: <SignupPage/> })
  };

  render() {
    return (
      <>
        <button onClick={this.increment1}>Login</button>
        <button onClick={this.increment2}>Profile</button>
        <button onClick={this.increment3}>Map</button>
        <button onClick={this.increment4}>Sign Up</button>
        <p>{this.state.page}</p>
      </>);
  }
}

export default Header;