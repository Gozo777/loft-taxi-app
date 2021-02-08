import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import validate from "./validate";
import {
  authRequest,
  isAuthorized,
  getErrors,
  isLoading
} from "../../modules/Auth";
import styles from './styles';
import langs from './langs';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';

class LoginForm extends PureComponent {
  handleSubmit = values => {
    const { authRequest } = this.props;
    authRequest({ login: values.login, password: values.password });
  };

  render() {
    const { classes, isAuthorized, authError, isLoading } = this.props;

    return isAuthorized ? (
      <Redirect to="/map" />
    ) : (
      <Grid
        container
        spacing={6}
          className={classes.gridContainer}
        >
          <Logo white />
          <Grid item xs={3}>
          <Card className={classes.cardContent}>
            <CardContent>
              <Typography
                align="center"
                gutterBottom={true}
                variant="h4"
                component="h1"
              >
                  Войти
              </Typography>
              <Typography variant="subtitle2" >
                  Новый пользователь?
                     <br/>
                  <Link to="/signup">Зарегестрируйтесь</Link>
                  </Typography>
              <Form
                onSubmit={this.handleSubmit}
                validate={validate}
                render={({ handleSubmit, values }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      component={TextField}
                      name="login"
                      required
                      label={langs.labels.login}
                      margin="normal"
                      placeholder={langs.placeholders.login}
                      fullWidth={true}
                    />
                    <Field
                      component={TextField}
                      name="password"
                      required
                      type="password"
                      label={langs.labels.password}
                      margin="normal"
                      placeholder={langs.placeholders.password}
                      fullWidth={true}
                    />
                    {authError && (
                      <Box mt={2}>
                        <Typography color="error" variant="body2">
                          {authError}
                        </Typography>
                      </Box>
                    )}
                    <Box mt={2} className={classes.wrapper}>
                      <Button
                        disabled={isLoading}
                        type="submit"
                        variant="outlined"
                        color="primary"
                      >
                        {langs.labels.submit}
                      </Button>
                      {isLoading && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </Box>
                  </form>
                )}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  state => ({
    isAuthorized: isAuthorized(state),
    authError: getErrors(state),
    isLoading: isLoading(state)
  }),
  { authRequest }
)(withStyles(styles)(LoginForm));
