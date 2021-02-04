import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { loginAction } from '../../modules/Auth/actions';
import Card from '../Card/Card';


const Login = (props) => {

  const handleSubmit = (email, password) => {
    props.login({
      email,
      password,
    });
  };

  return (
    <>
      {props.authed ? (
        <Redirect to="/map" />
      ) : (
        <div>
          <Container>
            <Logo white />
            <div>
              <Typography variant="h2" >Войти</Typography>
              <Typography variant="subtitle2" >
                  Новый пользователь?
                     <br/>
                <Link to="/signup">Зарегестрируйтесь</Link>
                </Typography>
                <br/>
              <Card handleSubmit={handleSubmit} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  authed: PropTypes.bool,
  login: PropTypes.func,
};

Login.defaultProps = {
  authed: false,
  login: () => {},
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

const mapDispathToProps = (dispatch) => ({
  login: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(Login);