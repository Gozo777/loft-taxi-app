import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const getIsLoggedIn = (state) => state.auth.isLoggedIn

export const PrivateRoute = connect(state => ({
  isLoggedIn: getIsLoggedIn(state),

}))(({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        
        render={(props) =>
          isLoggedIn ? (
            <Component {...props} /> 
        ) : (
      <Redirect to="/" />
        )
      }
    />
    ));
  