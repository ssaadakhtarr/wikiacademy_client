import React from "react";
import Image from "../img/home.jpg";
import "../App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AcUnitTwoToneIcon from "@material-ui/icons/AcUnitTwoTone";
import IconButton from "@material-ui/core/IconButton";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
} from "@material-ui/core";
import ToolImage from "../img/tools.png";
import { green } from "@material-ui/core/colors";
import VulnImage from "../img/vulnerabilities.jpg";
import WebImage from "../img/webimage.jpg";
import BegImage from "../img/beginner.jpg";
import nmapImage from "../img/rooms/nmap.png";
import hydraImage from "../img/rooms/hydra.jpg";
import owaspImage from "../img/rooms/owasp.jpg";
import linuxImage from "../img/rooms/linux.png";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import Rooms from "./Rooms";
import Paths from "./Paths";
import BlogCard from "../modules/Blog/BlogCard";
/* Client\src\fonts\style.css */

const JoinButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#9fef00",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
  textL: {
    fontSize: "3em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3em",
    },
  },
  textLL: {
    fontSize: "5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3em",
    },
  },
  textS: {
    fontSize: "em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em",
      paddingTop: "20px",
    },
  },
  textVS: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      fontWeight: "bold",
    },
  },
  textVSS: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6em",
    },
  },
  textSS: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      paddingTop: "22px",
    },
  },
  textb: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontWeight: "bold",
    fontSize: "3em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.947em",
    },
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      fontSize: "1.3em",
    },
  },
}));

function Home() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className="foo">
      
      <Box
        style={{
          textAlign: "center",
          backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
          backgroundPosition: "center",
          width: "100%",
          color: "white",
        }}
        
      >
        
        <Nav />
        <Box style={{padding: "12% 0"}}>
        <div>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h2"
            gutterBottom
            align="center"
          >
            Cyber Security Training
          </Typography>
          <Typography
            style={{ padding: "0 18%", color: "#cad2e2" }}
            variant="h6"
            gutterBottom
            align="center"
          >
            Join a dynamically growing hacking community and take your
            cybersecurity skills to the next level through the most captivating,
            gamified, hands-on training experience!
          </Typography>
          <br></br>
          <JoinButton
            onClick={() => history.push("/signup")}
            disableElevation
            style={{
              backgroundColor: "#9fef00",
              color: "#1e2633",
              border: "1px solid #1a2332",
              padding: "1rem",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
              minWidth: "15%",
            }}
            variant="contained"
          >
            Join Now
          </JoinButton>

          {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <AcUnitTwoToneIcon fontSize="large" style={{color: green[500]}}/>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="h4" gutterBottom align='center' className={classes.textS}>
        Guides
      </Typography>
      <Typography variant="p" gutterBottom align='center' >
        Develop your skills by working on hand-on guided tasks and Challenges
      </Typography>
      </div>
      
      <AcUnitTwoToneIcon fontSize="large"  style={{color: green[500]}}/>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className={classes.textS}>
      <Typography variant="h4" gutterBottom align='center' className={classes.textSS}>
        Challenges
      </Typography>
      <Typography variant="p" gutterBottom align='center'className={classes.textVSS} >
        Learn and test your skills with gamified,real world cyber security challenges
      </Typography>
      </div>
    </div> */}
        </div>
        </Box>
        
      </Box>
      <Box style={{ backgroundColor: "#141d2b", color: "white", padding: "5% 5%" }} >
        <div>
          <Typography variant="h3" style={{textAlign: "center"}} className={classes.textb}>Learning Paths</Typography>
          {/* borderBottom:"4px solid #88cc14 " */}
          {/* <h1 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',fontWeight:"bold",fontSize:50}} className={classes.textb}>Learning Paths</h1> */}
         
          {/* <div style={{position:"absolute",display: "inlineBlock",width: "290px",height: "5px",borderRadius: "20px",backgroundColor: "#88cc14",paddingTop:'-30px',paddingLeft:'35px',textAlign:"center"}}></div> */}
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inlineBlock",
                width: "100px",
                height: "5px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
          <br></br>
          <Typography variant="body1" style={{textAlign: "center", color: "#cad2e2"}} >
            Structured and guided paths to follow along
          </Typography>
        </div>
        <Paths/>
      </Box>
      
<Divider />
      <Box style={{ backgroundColor: "#141d2b", color: "white", padding: "5% 5%" }} >
        <br></br>
      
        <Typography variant="h3" style={{textAlign: "center"}} className={classes.textb}>Learning Rooms</Typography>
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "inlineBlock",
              width: "100px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: "#88cc14",
            }}
          ></div>
        </div>
        
        <br></br>
        {/* <div style={{position:"absolute",display: "inlineBlock",width: "290px",height: "5px",borderRadius: "20px",backgroundColor: "#88cc14",marginTop:'-30px',marginLeft:'525px'}}></div> */}
        <Typography variant="body1" style={{textAlign: "center", color: "#cad2e2"}}>
          Each room belonging to a specific topic or tool
        </Typography>
              <Rooms />
              </Box>
              <Divider />
      <Box style={{ backgroundColor: "#141d2b", color: "white", padding: "5% 5%" }}  >
      <br></br>
        <Typography variant="h3" style={{textAlign: "center"}} className={classes.textb}>Featured Posts</Typography>
        <br></br>
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inlineBlock",
                width: "100px",
                height: "5px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
          <br></br>
          <Typography variant="body1" style={{textAlign: "center", color: "#cad2e2"}} >
            Featured posts from WikiSecurity Blog
          </Typography>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
          </Grid>
      </Box>
      <Footer />
      {/* <img src={Image} /> */}
    </div>
  );
}

export default Home;
