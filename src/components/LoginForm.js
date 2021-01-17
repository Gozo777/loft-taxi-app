import React, { Component } from 'react';
import Map from './Map';

const pages = {
  map: <Map />,
} 

class LoginForm extends Component {

  state = { firstName: "", lastName: "" };
  state = {
    currentPage: ""
  }; 
  
  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }


  handleSubmit = event => {
      event.preventDefault();
       console.log(this.state.firstName);
      console.log(this.state.lastName);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <>
        <ul>
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

export default LoginForm;