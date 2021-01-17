import React, { Component } from 'react';
import Map from './Map';

const pages = {
  map: <Map />,
}

class SignupForm extends Component {
  
  state = { firstName: "", lastName: "", email: "", password: "", phone: null };
  state = {
    currentPage: ""
  };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

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
        <button onClick={() => {
                  this.navigateTo("map");
                }} >
                  Submit
                </button>
          </form>
          <main>
      <section>
        {pages[this.state.currentPage]}
      </section>
    </main>
          </ul>
        </>
      );
  }
}

export default SignupForm;