import React, { useEffect } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Drawer, LinearProgress } from '@material-ui/core';
import Logo from "../../img/logo/neonWhite.png";
import { withStyles } from '@material-ui/styles';
import SideDrawer from './SideDrawer';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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

  const theme = createMuiTheme({
    overrides: {
      MuiIconButton: {
        root: {
          color: "white",
          "&:hover": {
            color: "#9fef00",
          },
        },
      },
    },
    palette: {
      secondary: {
          main: '#9fef00'
      }
   }
  });
  

function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return ;
        }
        const diff = Math.random() * 50;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

    const adminLogout = () => {
      axios.post("http://localhost:3001/adminLogout").then((response)=>{
        console.log(response);
        if (!response.data.auth) {
        
          history.push("/admin-login");
          localStorage.removeItem("admin");
         
        }
      })
    }

    return (
      <div className={classes.root}>
        {(loading) && (<MuiThemeProvider theme={theme}>
            <LinearProgress style={{backgroundColor: "#1a2332",}} color="secondary" value={progress} variant="determinate"/> 
          </MuiThemeProvider>)}
        <AppBar style={{backgroundColor: "transparent", padding: "0 2%"}} position="static">
          <Toolbar>
          
          <SideDrawer/>

            <Box style={{paddingLeft: "2%",}} marginTop={1} marginBottom={1}>
            <a href="/">
              <img
                style={{
                  width: "240px",
    height: "60px",
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
          <LogoutButton color="inherit" onClick={adminLogout}>Logout</LogoutButton>

          </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar
