import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import {
  KeyboardDatePicker
} from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";
import formatStringByPattern from "format-string-by-pattern";
import { profileSubmit, getProfileData } from "../../modules/Profile";
import validate from "./validate";
import styles from "./styles";
import langs from "./langs";

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <KeyboardDatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
      format="dd/MM/yyyy"
      autoOk={true}
      variant="inline"
      style={{ marginTop: 0 }}
    />
  );
}

const formatCards = anyString => {
  const onlyNumbers = anyString.replace(/[^\d]/g, "");

  return formatStringByPattern("9999 9999 9999 9999", onlyNumbers);
};

const formatCvv = anyString => {
  const onlyNumbers = anyString.replace(/[^\d]/g, "");

  return formatStringByPattern("999", onlyNumbers);
};

class Profile extends PureComponent {
  state = {
    isSubmit: false
  };

  handleSubmit = values => {
    const { profileSubmit } = this.props;
    profileSubmit(values);
    this.setState({ isSubmit: true });
  };

  render() {
    const { classes, profileData } = this.props;
    const { isSubmit } = this.state;

    return (
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={10} md={8}>
          <Paper className={classes.paper}>
            {isSubmit}  
              <Fragment>
                <Typography
                  align="center"
                  gutterBottom={true}
                  variant="h4"
                  component="h1"
                >
                  {langs.title}
                </Typography>

                <Typography gutterBottom={true} variant="h6" component="h6">
                  {langs.title2}
                </Typography>

                <Form
                  onSubmit={this.handleSubmit}
                  validate={validate}
                  initialValues={profileData}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <Field
                            component={TextField}
                            name="name"
                            required
                            label={langs.labels.name}
                            placeholder={langs.placeholders.name}
                            fullWidth={true}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            name="card"
                            component={TextField}
                            required
                            label={langs.labels.card}
                            placeholder={langs.placeholders.date}
                            fullWidth={true}
                            parse={formatCards}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            name="cvv"
                            component={TextField}
                            required
                            label={langs.labels.cvv}
                            placeholder={langs.placeholders.cvv}
                            fullWidth={true}
                            parse={formatCvv}
                          />
                        </Grid>
                      </Grid>
                      <Box mt={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          {langs.labels.submit}
                        </Button>
                      </Box>
                    </form>
                  )}
                />
              </Fragment>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  state => ({ profileData: getProfileData(state) }),
  { profileSubmit }
)(withStyles(styles)(Profile));
