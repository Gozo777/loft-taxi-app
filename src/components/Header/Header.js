import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from 'loft-taxi-mui-theme';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';
import style from './Header.css';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 24px',
    zIndex: 10,
    backgroundColor: '#e3a209',
    height: '100px'
  },
});

const Header = ({ routes }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="fixed">
      <Link to="/map">
        <Logo />
      </Link>
      {routes.length && (
        <div className={style.menu}>
          {routes.map((item) => <div key={item}><NavBar text={item} /></div>)}
        </div>
      )}
    </AppBar>
  );
};

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  routes: [],
};

export default Header;