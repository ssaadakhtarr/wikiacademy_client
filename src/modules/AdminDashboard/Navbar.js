import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Drawer } from '@material-ui/core';
import Logo from "../../img/logo/neonWhite.png";
import { withStyles } from '@material-ui/styles';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const LogoutButton = withStyles({
    root: {
        fontWeight: "bold",
       textTransform: "none",
      backgroundColor: "transparent",
      color: "#9fef00",
      border: "1px solid #9fef00",
      "&:hover": {
        backgroundColor: "#9fef00",
        color: "#1e2633",
      },
    },
  })(Button);

function Navbar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: "transparent"}} position="static">
          <Toolbar>
          
          <SideDrawer/>

            <Box marginTop={1} marginBottom={1}>
            <a href="/">
              <img
                style={{
                  width: "300px",
                  height: "75px",
                }}
                src={Logo}
                alt="logo"
                className={classes.logo}
              />
            </a>
          </Box>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <div>
          <LogoutButton color="inherit">Logout</LogoutButton>

          </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar
