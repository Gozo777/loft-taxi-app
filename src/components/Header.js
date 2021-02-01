import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logOut } from '../actions/actions';

class Header extends Component {

  unauthenticate = () => {
    this.props.logOut();
  }

  render() {
    return (
      <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h2">LoftTaxi</Typography>
          <Button>
              <Link to="/login">Login</Link>
            </Button>
            <Button>
              <Link to="/map">Map</Link>
              </Button>
              <Button>
              <Link to="/profile">Profile</Link>
              </Button>
              <Button>
              <Link to="/signup">Sign up</Link>
              </Button>
        </Toolbar>
      </AppBar>
          </>
    )
  }
}

export default connect(
  null, 
  { logOut })(Header);