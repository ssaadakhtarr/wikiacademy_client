import React from "react";
import { createMuiTheme, fade, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Logo from "../img/logo/neonWhite.png";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Box, Grid, Icon } from "@material-ui/core";
import MedalIcon from "../img/trophy1.png";
import BlogIcon from "../img/blog1.png";
import LearningIcon from "../img/learn.png";
// import HomeIcon from "../img/home.png";
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import ComputerIcon from '@material-ui/icons/Computer';
import BookIcon from '@material-ui/icons/Book';
import Tooltip from "@material-ui/core/Tooltip";
import {useStateValue} from "../StateProvider";
import SidebarDashboard from "../modules/SidebarDashboard";
import {FaBookOpen} from 'react-icons/fa';
import {FaBlog} from 'react-icons/fa';
import {FaTrophy} from'react-icons/fa';
import {FaHome} from'react-icons/fa';
import {MdDashboard} from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:"white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const navStyle = {
  marginLeft: "15",
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

export default function Nav2() {
  const [{User}, dispatch] = useStateValue();
  const history = useHistory();
  const profile = () => {
    history.push("/profile");
  };
  const logout = () => {
    Axios.post("http://localhost:3001/logout").then((response) => {
      console.log(response.data);
      if (!response.data.auth) {
        console.log(localStorage.getItem("token"));
        history.push("/signin");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({
          type: 'User_Details_Remove',
          data: null
        })
        
        console.log(localStorage.getItem("token"));
      }
    });
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={profile}>Profile</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem style={{backgroundColor: "#111927", color: "white"}}>
        <IconButton aria-label="show 0 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem style={{backgroundColor: "#111927", color: "white"}} onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem style={{backgroundColor: "#111927", color: "white"}} onClick={handleProfileMenuOpen}>
        <SidebarDashboard/>
      </MenuItem>
    </Menu>
  );

  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.grow}>
      <AppBar color="transparent" style={{color: "white", backgroundColor: "transparent", padding: "0 2%", }} position="static">
        
        <Toolbar>
          <Box marginTop={1} marginBottom={1}>
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
          <Box className={classes.boxIcons} paddingLeft={2} style={{display:"flex",  color: "white"}}>
              <Tooltip title="Dashboard" arrow>
                <IconButton className={classes.boxIcons} href="/">
                  <MdDashboard />
                </IconButton>
              </Tooltip>
              <Tooltip title="Leaderboard" arrow>
                <IconButton className={classes.boxIcons} href="/leaderboard">
                  <FaTrophy />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hacktivities" arrow>
                <IconButton className={classes.boxIcons} href="/hacktivities">
                  <FaBookOpen />
                </IconButton>
              </Tooltip>
              <Tooltip title="Blog" arrow>
                <IconButton className={classes.boxIcons} href="/blog">
                  <FaBlog />
                </IconButton>
              </Tooltip>
            </Box>
          {/* <Box marginLeft={2}>
                      <Tooltip title="Dashboard" arrow>
            
                <IconButton  href="/dashboard">
                 <HomeIcon  />
                </IconButton>
              
          </Tooltip>
          <Tooltip title="Leaderboard" arrow>
            
              <IconButton href="/leaderboard">
                 <GradeIcon  />
                </IconButton>
              
          </Tooltip>
          <Tooltip title="Hacktivities" arrow>
           
          <IconButton href="/hacktivities">
                 <ComputerIcon  />
                </IconButton>
             
          </Tooltip>
          <Tooltip title="Blog" arrow>
          <IconButton href="/blog">
                 <BookIcon  />
                </IconButton>
          </Tooltip>
          </Box> */}


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    </MuiThemeProvider>
  );
}
