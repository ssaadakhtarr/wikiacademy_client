import React, { useEffect } from "react";
import {
  createMuiTheme,
  makeStyles,
  
} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../img/logo/neonWhite.png";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Icon, IconButton, LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import MedalIcon from "../img/trophy1.png";
import BlogIcon from "../img/blog1.png";
import LearningIcon from "../img/learn.png";
import Box from "@material-ui/core/Box";
import { spacing } from "@material-ui/system";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//import Button from '@material-ui/core/Button';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Tooltip from "@material-ui/core/Tooltip";
import GradeIcon from "@material-ui/icons/Grade";
import ComputerIcon from "@material-ui/icons/Computer";
import BookIcon from "@material-ui/icons/Book";
import HomeIcon from "@material-ui/icons/Home";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import {FaTrophy} from'react-icons/fa';
import {FaHome} from'react-icons/fa';
import {FaBookOpen} from 'react-icons/fa';
import {FaBlog} from 'react-icons/fa';
import { MuiThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(0),
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  logo: {
    width: "240px",
    height: "60px",
    [theme.breakpoints.down("xs")]: {
      // width: "140px",
      // height: "30px",
    },
  },
  title: {
    flexGrow: 1,
  },
  boxIcons: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drop: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    background: "transparent",
  },

  // image:{
  //   width: "245px",
  //   height: "60px",
  // }
}));

const JoinButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const LoginButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1e2633",
    },
  },
})(Button);

const navStyle = {
  // marginLeft: "15",
  marginTop: "10",
  width: "20px",
  height: "20px",
};

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
 
function Nav() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
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

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MuiThemeProvider theme={theme}>
      {(loading) && (<MuiThemeProvider theme={theme}>
            <LinearProgress style={{backgroundColor: "#1a2332",}} color="secondary" value={progress} variant="determinate"/> 
          </MuiThemeProvider>)}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color:"white"
        }}
      >
        <AppBar
          elevation={2}
          style={{
            padding: "0 6%",
            width: "100%",
            overflowX: "hidden",
            color: "white",
          }}
          color="transparent"
          position="static"
        >
          {/* style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} */}
          <Toolbar>
            <Box marginTop={1} marginBottom={1}>
              <Link to="/">
                <img src={Logo} alt="logo" className={classes.logo} />
              </Link>
            </Box>

            <Box className={classes.boxIcons} paddingLeft={2} style={{display:"flex", color: "white", }}>
              <Tooltip title="Home" arrow>
                <IconButton className={classes.boxIcons} onClick={()=>{
                history.push("/")
              }}>
                  <FaHome />
                </IconButton>
              </Tooltip>
              <Tooltip title="Leaderboard" arrow>
                <IconButton className={classes.boxIcons} onClick={()=>{
                history.push("/leaderboard")
              }}>
                  <FaTrophy />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hacktivities" arrow>
                <IconButton className={classes.boxIcons} onClick={()=>{
                history.push("/hacktivities")
              }}>
                  <FaBookOpen />
                </IconButton>
              </Tooltip>
              <Tooltip title="Blog" arrow>
                <IconButton className={classes.boxIcons} onClick={()=>{
                history.push("/blog")
              }}>
                  <FaBlog />
                </IconButton>
              </Tooltip>
            </Box>
            <Box paddingLeft={3} paddingTop={1} paddingBottom={1}>
              <Grid item>
                {/* <Icon>
                <div className={classes.root}>
                  
                  <div>
                    <Button
                      ref={anchorRef}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                      variant="contained"
                      color="transparent"
                    >
                      <MoreHorizIcon />
                    </Button>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                    >
                
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Docs</MenuItem>
                            <MenuItem onClick={handleClose}>
                              Develop Rooms
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Classrooms
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Popper>
                  </div>
                </div>
              </Icon> */}
              </Grid>
            </Box>
            <ButtonAppBarCollapse style={{color: "white"}}>
              <MenuItem >
             
              <Tooltip title="Home" arrow>
                <IconButton style={{color: "#141d2b"}}  onClick={()=>{
                history.push("/")
              }}>
                  <FaHome />
                </IconButton>
              </Tooltip>
              <Tooltip title="Leaderboard" arrow>
                <IconButton style={{color: "#141d2b"}} onClick={()=>{
                history.push("/leaderboard")
              }}>
                  <FaTrophy />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hacktivities" arrow>
                <IconButton style={{color: "#141d2b"}} onClick={()=>{
                history.push("/hacktivities")
              }}>
                  <FaBookOpen />
                </IconButton>
              </Tooltip>
              <Tooltip title="Blog" arrow>
                <IconButton style={{color: "#141d2b"}} onClick={()=>{
                history.push("/blog")
              }}>
                  <FaBlog />
                </IconButton>
              </Tooltip>
            
              </MenuItem>
              <MenuItem>
              
                <LoginButton
                  // onClick={() => history.push("/signin")}
                  onClick={()=>{
                    history.push("/signin")
                  }}
                  fullWidth
                  style={{
                    backgroundColor: "#18181f",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                  variant="contained"
                >
                  Login
                </LoginButton>
              </MenuItem>
              <MenuItem>
                <JoinButton

                  onClick={() => history.push("/signup")}
                  fullWidth
                  style={{
                    backgroundColor: "#9fef00",
                    color: "#18181f",
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                  variant="contained"
                >
                  Join Now
                </JoinButton>
              </MenuItem>
            </ButtonAppBarCollapse>

            <div className={classes.drop}>
              <LoginButton
              disableElevation
                // onClick={() => history.push("/signin")}
                onClick={()=>{
                  history.push("/signin")
                }}
                style={{
                  marginRight: "2%",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
                variant="contained"
              >
                Login
              </LoginButton>
              <JoinButton
              disableElevation
                onClick={() => history.push("/signup")}
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                }}
                variant="contained"
              >
                Join Now
              </JoinButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

export default Nav;
