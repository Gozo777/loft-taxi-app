import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withAuth } from './AuthContext';

export class LoginForm extends Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.login(email.value, password.value);
  }
  
  navigateTo = () => {
      this.setState({ currentPage: "profile" });
    }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in <button onClick={this.navigateTo}>go to profile</button>
          </p>
          ) : (
        <ul>
      <form onSubmit={this.authenticate}>
          <label>Email:</label>
            <input
              id="email"
              type="email"
              name="email"
            />
  
          <label>Password:</label>
            <input
              id="password"
              type="password"
              name="password"
            />
        <button type="submit">Log in</button>
              </form>
              </ul>
                )}
        </>
    );
  }
}

export default withAuth(LoginForm);

