import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../../store/actions';
import classnames from 'classnames';
import { withStyles, Typography, List, ListItem } from '@material-ui/core';

// Component styles
import styles from './styles';
import UserPopover from './components/UserPopover/UserPopover';

class Navbar extends Component {
  state = { scrollPos: window.pageYOffset };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: window.pageYOffset
    });
  };

  render() {
    const {scrollPos } = this.state;
    const { classes, isAuth, user, logout } = this.props;
    return (
      <Fragment>
        <nav
          className={classnames({
            [classes.navbar]: true,
            [classes.navbarColor]: scrollPos > 30
          })}>
          <Link className={classes.logoLink} to="/home">
            <Typography className={classes.logo} variant="h2">
              Ticket Booking
            </Typography>
          </Link>

          <div className={classes.navAccount}>
            <UserPopover logout={logout}>
              <List component="nav">
                {user && (
                  <ListItem>
                  <Typography>
                    {user.name}
                  </Typography>
                </ListItem>
                )}
                {user && (
                  <ListItem>
                    <Link
                      className={classes.navLink}
                      to={`/userbookings/${user._id}`}>
                      My Bookings
                    </Link>
                  </ListItem>
                )}
                {isAuth ? (
                  <ListItem>
                    <Link className={classes.navLink} onClick={logout} to="/">
                      Logout
                    </Link>
                  </ListItem>
                ) : (
                  <ListItem>
                    <Link className={classes.navLink} to="/">
                      Login
                    </Link>
                  </ListItem>
                )}
              </List>
            </UserPopover>
          </div>
        </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authState.isAuthenticated,
  user: state.authState.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navbar));
