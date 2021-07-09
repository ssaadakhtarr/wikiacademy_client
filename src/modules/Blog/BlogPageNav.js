import { Box, Button, Grid, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../img/logo/neonWhite.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {FaBlog} from'react-icons/fa';

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

const StyledButton = withStyles({
  root: {
    margin: "0 2%",
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
  icons: {
      display: "none",
  },
})(Button);

function BlogPageNav() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        style={{ backgroundColor: "#1f293e", padding: "0 10%" }}
        position="static"
      >
        <Toolbar>
            <a href="/"><img style={{ width: "200px" }} src={Logo} /></a>
            <IconButton href="/blog" className={classes.icons}>
            <FaBlog style={{marginLeft: "2%", color: "white"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
         
          </Typography>
         
          <IconButton style={{color: "white"}} className={classes.icons}>
            <FaTwitter />
          </IconButton >
          <IconButton style={{color: "white"}} className={classes.icons}>
            <FaDiscord style={{}} />
          </IconButton>
          
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BlogPageNav;
