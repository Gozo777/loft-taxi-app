import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constans/theme-customisation";
import Header from "./components/Header ";
import Router from "./components/Router";
import useStyles from "./style";
import { connect } from "react-redux";
import {
  isAuthorized,
  authRequest
} from "./modules/Auth";

class App extends PureComponent {

  render() {

    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <div className='App'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <div className={classes.root}> </div> */}
            <BrowserRouter>
              <Header />
              <Router />
            </BrowserRouter>
          
        </ThemeProvider>
      </div>
    ) : (
      <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       {/* <div className={classes.root}>  </div>*/}
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </ThemeProvider>
    </div>
    )
  };
};

/*
const mapStateToProps = (state) => ({
  isAuthorized: state.isAuthorized,
});

export default connect(mapStateToProps)(App); */

export default connect(
  state => ({
    isAuthorized: isAuthorized(state),
  }),
  { authRequest }
)(App);