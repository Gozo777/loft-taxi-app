import React, {Component} from 'react';
import { withAuth } from './AuthContext';

export class Profile extends Component {
  unathenticate = () => {
    this.props.logout();
    this.props.navigate("login");
  }
  render() {
    return (
      <p>
        Profile <button onClick={this.unanthenticate}>Log out</button>
      </p>
    );
  }
}

export default withAuth(Profile);