import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { signupAction } from '../../modules/Auth/actions';
import Card from '../Card/Card';

import style from './SignupForm.css';

const useStyles = makeStyles({
  container: {
    paddingTop: '10vh',
    maxWidth: '1000px',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
  justifyContent: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '30px',
  },
  subtitle: {
    marginBottom: '30px',
    display: 'flex',
    textAlign: 'center',
  justifyContent: 'center',
  },
});

const SignupForm = (props) => {
  const classes = useStyles();

  const handleSubmit = (email, password, name, surname) => {
    props.signup({
      email,
      password,
      name,
      surname,
    });
  };

  return (
    <>
       <Logo white />
      {props.authed ? (
        <Redirect to="/map" />
      ) : (
        <div className={style.signup}>
          <Container className={classes.container} maxWidth="md">
            <div className={style.card}>
              <Typography variant="h2" className={classes.title}>Регистрация</Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Уже зарегестрированы?
                <Link className={style.link} to="/login">Войти</Link>
              </Typography>
              <Card handleSubmit={handleSubmit} mode="signup" />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

SignupForm.propTypes = {
  authed: PropTypes.bool,
  signup: PropTypes.func,
};

SignupForm.defaultProps = {
  authed: false,
  signup: () => {},
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

const mapDispathToProps = (dispatch) => ({
  signup: (user) => dispatch(signupAction(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(SignupForm);