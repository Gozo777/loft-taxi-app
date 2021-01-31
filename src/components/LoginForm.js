import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { authenticate } from '../actions/actions';
import { Link} from 'react-router-dom';

export class LoginForm extends Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>You are logged in <Link to="/profile">Go to profile</Link>
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

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(LoginForm);

