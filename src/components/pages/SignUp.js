import React from 'react'

class App extends React.Component {
  state = { firstName: "", lastName: "" };

  handleSubmit = event => {
      event.preventDefault();
      // Предотвращаем перезагрузку страницы
       console.log(this.state.firstName);
      console.log(this.state.lastName);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
          <input type="submit" value="Submit" />
        </form>
      );
  }
}
