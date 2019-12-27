import React from 'react';
import { Link } from 'react-router-dom';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { borderRadius } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  Navbar: {
      backgroundColor: "#fff",
      color: "#000",
      margin: "0px auto 0px auto",
      boxShadow: 'none',
  },
  navItems : {
    display: 'flex'
  },
  signupLinks : {
    marginTop: 'auto',
    marginBottom: 'auto',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  login: {
      marginTop: '8px',
      marginBottom: 'auto',
      textTransform: 'capitalize',
      marginRight: 10
  },
  signup: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textTransform: 'capitalize',
    backgroundColor: '#009688',
    fontWeight: "bold",
    padding: '0 35px 0 35px',
    boxShadow: 'none'
  },
  navLink : {
      textTransform: 'capitalize',
      margin: 'auto 10px auto 10px',
      borderRadius: 5
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.Navbar}>
        <Toolbar>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Link to={'/'}>
                        <h1>GoCaddy</h1>
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.navItems}>
                    <MenuItem className={classes.navLink} component={Link} to={'/features/'}>Features</MenuItem>
                    <MenuItem className={classes.navLink} component={Link} to={'/customers/'}>Customers</MenuItem>
                    <MenuItem className={classes.navLink} component={Link} to={'/plans/'}>Plans</MenuItem>
                    <MenuItem className={classes.navLink} component={Link} to={'/extras/'}>Extras</MenuItem>
                </Grid>
                <Grid item xs={4} className={classes.signupLinks} >
                <MenuItem className={classes.navLink} component={Link} to={'/login/'}>Log In</MenuItem>
                    <Link to={'/signup'}>
                        <Fab variant="extended" color="primary" className={classes.signup}>
                            Get Started
                        </Fab>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
