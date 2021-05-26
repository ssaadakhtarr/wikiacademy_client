import React from "react";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../img/logo/neonWhite.png";
import "../App.css";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Icon, IconButton } from "@material-ui/core";
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
      width: "140px",
      height: "30px",
    },
  },
  title: {
    flexGrow: 1,
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
    border: "1px solid #1a2332",
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
    border: "1px solid #1a2332",
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
});

function Nav() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppBar
          elevation={2}
          style={{
            
            width: "100%",
            overflowX: "hidden",
          }}
          color="transparent"
          position="static"
        >
          {/* style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} */}
          <Toolbar>
            <Box marginTop={1} marginBottom={1}>
              <a href="/">
                <img src={Logo} alt="logo" className={classes.logo} />
              </a>
            </Box>

            <Box paddingLeft={2} style={{display:"flex"}}>
              <Tooltip title="Home" arrow>
                <IconButton href="/">
                  <HomeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Leaderboard" arrow>
                <IconButton href="/leaderboard">
                  <GradeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hacktivities" arrow>
                <IconButton href="/hacktivities">
                  <ComputerIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Blog" arrow>
                <IconButton href="/blog">
                  <BookIcon />
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
            <ButtonAppBarCollapse>
              <MenuItem>
                <LoginButton
                  onClick={() => history.push("/signin")}
                  fullWidth
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
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
                    fontSize: "12px",
                    fontWeight: "600",
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
                onClick={() => history.push("/signin")}
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
                variant="contained"
              >
                Login
              </LoginButton>
              <JoinButton
              disableElevation
                onClick={() => history.push("/signup")}
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
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
