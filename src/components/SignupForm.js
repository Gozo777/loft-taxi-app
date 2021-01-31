import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  
  state = { firstName: "", lastName: "", email: "", password: "", phone: null };


  handleSubmit = event => {
      event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  };

  render() {
      const { firstName, lastName, email, password, phone } = this.state;
    return (
      <>
        <p>Sign up page</p>
         <ul>
          <form onSubmit={this.handleSubmit}>
          <li>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
              </label>
            </li>
            <li>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
              </label>
            </li>
            <li>
          <label>
            Email:
            <input
              type="text"
              name="lastName"
              value={email}
              onChange={this.handleEmailChange}
            />
              </label>
            </li>
            <li>
          <label>
            Password:
            <input
              type="text"
              name="lastName"
              value={password}
              onChange={this.handlePasswordChange}
            />
              </label>
            </li>
            <li>
          <label>
            Phone:
            <input
              type="text"
              name="lastName"
              value={phone}
              onChange={this.handlePhoneChange}
            />
              </label>
            </li>
            <button>
            <Link to="/profile">Submit</Link>
            </button>
          </form>
          </ul>
        </>
      );
  }
} 

export default SignupForm;