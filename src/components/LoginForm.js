import React, { Component } from 'react';

class LoginForm extends Component {
  state = { firstName: "", lastName: "" };

  handleSubmit = event => {
      event.preventDefault();
       console.log(this.state.firstName);
      console.log(this.state.lastName);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  redirect = event => {
    document.location.href="map"
 }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
            onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
            onChange={this.handleChange}
            />
        </label>
        <input type="submit" value="Submit" onClick={this.redirect}/>
        </form>
      );
  }
}

export default LoginForm;