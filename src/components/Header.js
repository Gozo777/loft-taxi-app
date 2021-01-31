import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LoftTaxi</Typography>
          <ul className="nav-links">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
              </li>
              </ul>
        </Toolbar>
      </AppBar>
          </>
    )
  }
}

    export default Header; 