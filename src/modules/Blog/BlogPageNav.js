import { Box, Button, Grid, IconButton, LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../img/logo/neonWhite.png";
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {FaBlog} from'react-icons/fa';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

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

function BlogPageNav() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();

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
  return (
    <div>
      {(loading) && (<MuiThemeProvider theme={theme}>
            <LinearProgress style={{backgroundColor: "#1a2332",}} color="secondary" value={progress} variant="determinate"/> 
          </MuiThemeProvider>)}
      <AppBar
        style={{ backgroundColor: "#1f293e", padding: "0 10%" }}
        position="static"
      >
        <Toolbar>
            <Link to="/"><img style={{ width: "200px" }} src={Logo} /></Link>
            <IconButton onClick={()=>{history.push("/blog")}}  className={classes.icons}>
            <FaBlog style={{marginLeft: "2%", color: "white"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
         
          </Typography>
         
          <IconButton target="blank" href="https://www.twitter.com/wikisecurityacademy"  style={{color: "white"}} className={classes.icons}>
            <FaTwitter />
          </IconButton >
          <IconButton target="blank" href="https://www.discord.com/wikisecurityacademy" style={{color: "white"}} className={classes.icons}>
            <FaDiscord style={{}} />
          </IconButton>
          
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BlogPageNav;
