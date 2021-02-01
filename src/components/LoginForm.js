import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authenticate } from '../actions/actions';

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
      <Redirect to="/map" />
    ) : (
        <div>
          <h2>Войти</h2>
          <form onSubmit={authenticate}>
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
        </div>
      )}
  </>
)}}


LoginForm.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool
} 

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(LoginForm);

