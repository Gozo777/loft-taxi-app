import React from 'react';

class SignupForm extends React.Component {
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

  redirect = event => {
    document.location.href="map"
 }

  render() {
      const { firstName, lastName, email, password, phone } = this.state;
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
          <label>
            Email:
            <input
              type="text"
              name="lastName"
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="lastName"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="lastName"
              value={phone}
              onChange={this.handlePhoneChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.redirect}/>
        </form>
      );
  }
}

export default SignupForm;