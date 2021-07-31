import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import LoginForm from './components/LoginForm';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh'
  },
  grid: {
    height: '100%'
  },
  bgWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
});

class Login extends Component {
  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        
          <Grid className={classes.content} item lg={12} xs={12}>
            <center>
            <div className={classes.contentBody}>
              <LoginForm redirect />
            </div>
          </center>
          </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
