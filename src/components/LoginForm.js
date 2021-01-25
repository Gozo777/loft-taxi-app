import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withAuth } from './AuthContext';

export class LoginForm extends Component {

  unanthenticate = () => {
    this.props.logout();
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.login(email.value, password.value);
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>You are logged in 
            You can log out<button onClick={this.unanthenticate}>Log out</button></p>
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


LoginForm.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.any
} 

export default withAuth(LoginForm);

