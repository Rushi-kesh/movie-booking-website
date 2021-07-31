import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../store/actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import styles from './styles';

class Register extends Component {
  state = {
    values: {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  };

  componentDidUpdate(prevProps) {
    const { isAuthenticated, history } = this.props;
    if (prevProps.isAuthenticated !== isAuthenticated || isAuthenticated)
      history.push('/');
  }

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };
    newState.values[field] = value;
    this.setState(newState);
  };

  handleRegister = () => {
    const newUser = this.state.values;
    this.props.register(newUser);
  };

  render() {
    const { classes } = this.props;
    const { values } = this.state;

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.content} item lg={12} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <center>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography className={classes.title} variant="h2">
                    Register
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Full name"
                      name="name"
                      value={values.name}
                      onChange={event =>
                        this.handleFieldChange('name', event.target.value)
                      }
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      label="User name"
                      name="username"
                      value={values.username}
                      onChange={event =>
                        this.handleFieldChange('username', event.target.value)
                      }
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      value={values.email}
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      label="Password"
                      type="password"
                      value={values.password}
                      variant="outlined"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                    />
                  </div>

                  <Button
                    className={classes.registerButton}
                    color="primary"
                    // disabled={!isValid}
                    onClick={this.handleRegister}
                    size="large"
                    variant="contained">
                    Register now
                  </Button>

                  <Typography className={classes.login} variant="body1">
                    Have an account?{' '}
                    <Link className={classes.loginUrl} to="/login">
                      Login
                    </Link>
                  </Typography>
                </form>
              </div>

              </center>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Register.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated
});

export default withStyles(styles)(
  connect(mapStateToProps, { register })(Register)
);
