import React, { useEffect } from "react";
import Image from "../img/home.jpg";
import "../App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { createMuiTheme } from "@material-ui/core/styles";
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
  MuiThemeProvider,
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
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import routes from "../GetRoute.js";
import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LinearProgress from '@material-ui/core/LinearProgress';
import Labs from "./Labs";
import DoorDashFavorite from "./DoorDashFavorite";


/* Client\src\fonts\style.css */

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
const theme = createMuiTheme({
  palette: {
     secondary: {
         main: '#9fef00'
     }
  }
})

function Home() {
  const history = useHistory();
  const classes = useStyles();
  const [blogData, setBlogData] = React.useState();
  const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
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
  

  useEffect(() => {
    axios.get(`${routes}/getHomeData`).then((response) => {
      console.log(response.data);
      if (response.data !== undefined) {
        setMounted(true);
        setBlogData(response.data.result);
        setRoomData(response.data.result_1);
      }
    });
  }, []);

  // if (!mounted || blogData === undefined) {
  //   console.log(blogData);
  //   console.log(roomData);
  //   return "load";
  // } else {
    // console.log(blogData);
    // console.log(roomData);

    return (
      <div className="foo">
         
        <Box
          style={{
            textAlign: "center",
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp2757874.gif')",
            backgroundPosition: "center",
            width: "100%",
            color: "white",
            minHeight: "100vh"
          }}
        >
          {/* {(loading) && (<MuiThemeProvider theme={theme}>
            <LinearProgress  color="secondary" value={progress} variant="determinate"/> 
          </MuiThemeProvider>)} */}
          <Nav />
          
          

          <Box style={{ padding: "12% 0" }}>
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
                cybersecurity skills to the next level through the most
                captivating, gamified, hands-on training experience!
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
                  fontSize: "14px",
                  fontWeight: "800",
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
        <Box
          style={{
            backgroundColor: "#141d2b",
            color: "white",
            padding: "5% 5%",
          }}
        >
          <div>
            <Typography
              variant="h3"
              style={{ textAlign: "center" }}
              className={classes.textb}
            >
              Learning Paths
            </Typography>
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
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "#cad2e2" }}
            >
              Structured and guided paths to follow along
            </Typography>
          </div>
          <Paths />
          <br></br>
          <br></br>
          <br></br>
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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
        </Box>
        {/* <Divider /> */}
        <Box
          style={{
            backgroundColor: "#141d2b",
            color: "white",
            padding: "2% 5%",
          }}
        >
        

          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb + " about"}
          
          >
            About Us
          </Typography>
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
          <Box style={{ margin: "0 25%" }}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "#cad2e2" }}
            >
              We have initialized a project which focuses on the learning of
              Cyber Security. In this website we have broken down major and
              large topics into byte-sized minified lessons to make your
              learning experience easy and user friendly.
            </Typography>
          </Box>
          <br></br>
          <br></br>
          <br></br>
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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
        </Box>
        {/* <Divider /> */}
        <Box
          style={{
            backgroundColor: "#141d2b",
            color: "white",
            padding: "2% 5%",
          }}
        >
          <br></br>

          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb}
          >
            Learning Rooms
          </Typography>
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
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#cad2e2" }}
          >
            Each room belonging to a specific topic or tool
          </Typography>
         
          <Grid container spacing={1}>
            {!mounted || roomData === undefined ? (
              <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
            </Grid>
            ) : (
              roomData.map((i, index) => {
                if (index < 3) {
                  return (
                    
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Rooms
                          roomImg={i.roomImage}
                          roomName={i.roomName}
                          roomDesc={i.roomTagline.slice(0,140)}
                          roomTitle={i.roomTitle}
                        />
                      </Grid>
                    
                  );
                }
              })
            )}
          </Grid>
          <br></br>
          <Typography style={{ textAlign: "center" }}>
            <JoinButton
              onClick={()=>{
                history.push("/hacktivities")
              }}
              style={{
                border: "1px solid #9fef00",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              See All Rooms
            </JoinButton>
          </Typography>
          
          {/* <br></br>
          <br></br> */}
          <br></br>
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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
        </Box>
        <Box
          style={{
            backgroundColor: "#141d2b",
            color: "white",
            padding: "3% 5%",
          }}
        >
          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb}
          >
            FAQs
          </Typography>
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
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#cad2e2" }}
          >
            Frequently Asked Questions to help you get started!
          </Typography>
          <br></br>
          <Typography style={{ textAlign: "center" }}>
            <JoinButton
              onClick={()=>{
                history.push("/faq")
              }}
              style={{
                border: "1px solid #9fef00",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              See Our FAQ Section
            </JoinButton>
          </Typography>
          <br></br>
          <br></br>
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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>

          <br></br>
          <br></br>
          {/* insert here */}
          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb}
          >
            Hands-on Labs
          </Typography>
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
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#cad2e2" }}
          >
            Practical labs to help you understand vulnerabilites more efficiently.
          </Typography>

          <br></br>
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}> */}
            <Grid container spacing={1}>
          {/* <Grid item xs={12} sm={12} md={6} lg={4}>
            <Labs
              img={`https://www.breachlock.com/wp-content/uploads/2019/09/V_C_3.jpg`}
              name={"Information Disclosure"}
              desc={
                "Trivial level lab to find information disclosure bugs. This lab will help you get started in the basics of web application hacking."
              }
              path={"1/test.html"}
              hint={"Always check the page source!"}
            />
          </Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Labs
              img={`https://uploads.sitepoint.com/wp-content/uploads/2016/09/1473921124injection-attack.jpg`}
              name={"SQL Injection"}
              desc={
                "Trivial level lab to find SQL injection bugs. This lab will help you get started in the basics of web application hacking and penetration testing."
              }
              path={"2/sqli-one"}
              hint={
                "You can use username: saadakhtar and password: saad123! PS: The table name is labusers :)"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Labs
              img={`https://hackaday.com/wp-content/uploads/2016/03/grabbing-file-off-computer.jpg?w=400`}
              name={"Cross-Site Scripting"}
              desc={
                "Trivial level lab to find Cross-Site Scripting bugs. This lab will help you get started in the basics of web application hacking and penetration testing."
              }
              path={"3/xss"}
              hint={
                "Trigger an alert to get the flag! PS: If script tags not working then try using image tags."
              }
            />
          </Grid>
        </Grid>
            {/* </Grid>
          
          </Grid> */}
          
          <br></br>
          <Typography style={{ textAlign: "center" }}>
            <JoinButton
              onClick={()=>{
                history.push("/hacktivities")
              }}
              style={{
                border: "1px solid #9fef00",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              See All Labs
            </JoinButton>
          </Typography>


          <br></br>














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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb}
          >
            Social Networks
          </Typography>
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
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#cad2e2" }}
          >
            Follow us on social media and get connected with other learners!
          </Typography>
          <br></br>
          <div style={{ textAlign: "center", color: "white" }}>
            <IconButton className={classes.icons} target="blank" href="https://www.twitter.com/wikisecurityacademy">
              <FaTwitter style={{ color: "white", fontSize: "30px" }} />
            </IconButton>
            <IconButton className={classes.icons} target="blank" href="https://www.instagram.com/wikisecurityacademy">
              <FaInstagram style={{ color: "white", fontSize: "30px" }} />
            </IconButton>
            <IconButton className={classes.icons} target="blank" href="https://www.discord.com/wikisecurityacademy">
              <FaDiscord style={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </div>
          <br></br>
          <br></br>
       
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
                width: "1500px",
                height: "2px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
        </Box>
        {/* <Divider /> */}
        <Box
          style={{
            backgroundColor: "#141d2b",
            color: "white",
            padding: "2% 1%",
          }}
        >
         
          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.textb}
          >
            Featured Posts
          </Typography>
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
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#cad2e2" }}
          >
            Featured posts from WikiSecurity Blog
          </Typography>
          <br></br>
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><BlogCard/></Grid>
          </Grid> */}
          
          <Grid container spacing={2}>
            {blogData === undefined ? (
              <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
              <DoorDashFavorite/>
              </Grid>
            </Grid>
            ) : blogData.map((i, index) => {
              if (index < 3) {
                return (
                  
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                      <BlogCard
                        blogTitle={i.blogTitle}
                        blogDesc={i.blogDesc}
                        blogImg={i.blogImg}
                        username={i.username}
                        url={"/blogs/" + i.blogId}
                      />
                    </Grid>
                
                );
              }
            })}
            
          </Grid>
          <Typography style={{ textAlign: "center" }}>
            <JoinButton
              onClick={()=>{
                history.push("/blog")
              }}
              style={{
                border: "1px solid #9fef00",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              See All Blogs
            </JoinButton>
          </Typography>
        </Box>
        <Footer />
        {/* <img src={Image} /> */}
      </div>
    );
  }


export default Home;
