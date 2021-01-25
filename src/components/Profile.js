import React, {Component} from 'react';
import { withAuth } from './AuthContext';

export class Profile extends Component {
  
  render() {
    return (
      <p>
        Profile
      </p>
    );
  }
}

export default withAuth(Profile);