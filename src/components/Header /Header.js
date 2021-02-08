import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { isAuthorized, logOut } from "../../modules/Auth";
import useStyles from "./styles";
import langs from './langs';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';

const Header = props => {

  const classes = useStyles();
  const { isAuthorized, logOut } = props;

  const handelLogout = () => {
    logOut();
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h2" className={classes.title}>
          <Logo/>
        </Typography>
        <Button color="inherit">
        <Link to="/map">
            {langs.menu.map}
            </Link>
        </Button>
        <Button color="inherit">
        <Link to="/profile">
            {langs.menu.profile}
            </Link>
        </Button>
        {isAuthorized ? (
          <Button onClick={handelLogout} color="inherit">
            {langs.menu.logOut}
          </Button>
        ) : (
          <Button  color="inherit">
            {langs.menu.logIn}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  state => ({
    isAuthorized: isAuthorized(state)
  }),
  { logOut }
)(Header);
