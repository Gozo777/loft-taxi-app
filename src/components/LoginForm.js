import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AuthProvider, withAuth } from './AuthContext';

export class LoginForm extends Component {

  goToProfile = () => {
    this.props.navigate("profile")
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.login(email.value, password.value);
  }
  
  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in <button onClick={this.goToProfile}>go to profile</button>
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

LoginForm.defaultProps = {
  email: '@',
  password: 'check'
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
}

export const LoginWithAuth = withAuth(LoginForm);

export default LoginForm;

