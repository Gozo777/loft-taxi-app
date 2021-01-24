import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 


class Header extends Component {

  navigateTo = (page) => {
    this.props.handleChangePage(page);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LoftTaxi</Typography>
          <Button onClick={() => {
            this.navigateTo("login");
          }} >
            Login
          </Button>
          
          <Button onClick={() => {
            this.navigateTo("profile");
          }} >
            Profile
          </Button>
          
          <Button onClick={() => {
            this.navigateTo("map");
          }} >
            Map
          </Button>
          
          <Button onClick={() => {
            this.navigateTo("signup");
          }} >
            Sign up
          </Button>

        </Toolbar>
      </AppBar>
    )
  }
}

    export default Header;