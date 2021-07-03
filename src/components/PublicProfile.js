import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Nav2 from "./Nav2";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { withStyles } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import Rooms from "./Rooms.js"
import axios from "axios";
import Cookies from "universal-cookie";
import Nav from "./Nav";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const theme = createMuiTheme({
 
  overrides: {
    MuiIconButton: {
      root: {
        
        "&:hover": {
          color: "#9fef00",
        },
      },
    },
  },
});

function PublicProfile() {
  const cookies = new Cookies();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = React.useState(user.id);
  const { username } = useParams();
  console.log(username);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [blogData, setBlogData] = React.useState();
  const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  const [roomsIn, setRoomsIn] = React.useState();
  const [userData, setUserData] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/getHomeData").then((response) => {
  //  //   console.log(response.data);
  //     if (response.data != undefined) {
       
  //       setMounted(true);
  //       setBlogData(response.data.newArr);
  //       setRoomData(response.data.result_1);
  //     }
  //   })
  // }, [])

  useEffect(() => {
    axios.post("http://localhost:3001/getJoinedRooms", {
      userId: userId,
    }).then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        setMounted(true);
        setRoomData(response.data);
        setRoomsIn(response.data.length);
      }
    })

    axios.post("http://localhost:3001/getPublicProfile", {
      username: username,
    }).then((response) => {
      console.log(response.data);
      if(response.data != undefined) {
        setUserData(response.data);
      }
    })
  }, [])

  if (!mounted || roomData === undefined || userData === undefined) {
    return (
      null
    );

  }
  else {
    console.log(userData);
  return (
    // <MuiThemeProvider theme={theme}>
    <div style={{color: "white",}}>
      <Box
       
        style={{
          
          backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
          backgroundPosition: "center",
        }}
      >
          {(cookies.get("userId") ? <Nav2/>:<Nav/>)}
        <Box style={{paddingTop: "5%"}}>
        <Typography
          style={{marginBottom: "5%", textAlign: "center", color: "#9fef00" }}
          variant="h4"
        >
          {userData[0].username}{" "}
          <span style={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}>
            [NOOB]
          </span>
        </Typography>
        <Box
        padding={3}
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{userData[0].rank}</Typography>
            <Typography variant="h6">Rank</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{roomsIn}</Typography>
            <Typography variant="h6">Rooms In</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{userData[0].level}</Typography>
            <Typography variant="h6">Level</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{userData[0].points}</Typography>
            <Typography variant="h6">Points</Typography>
          </Grid>
        </Grid>
      </Box>
      </Box>
      </Box>
      
      
      
      
      <Container style={{backgroundColor: "#141d2b",}} maxWidth="xl">
      <br></br>
        {/* <Typography
          style={{ textAlign: "center", color: "#9fef00" }}
          variant="h4"
        >
          {user.username}{" "}
          <span style={{ fontSize: "30px", fontWeight: "600", color: "#000" }}>
            [NOOB]
          </span>
        </Typography> */}
        <Box style={{ textAlign: "center",}}>
          {userData[0].twitter !== null && (
            <IconButton
              
              href={`https://www.twitter.com/${userData[0].twitter}`}
              target="_blank"
            >
              <TwitterIcon style={{color: "white"}} />
            </IconButton>
          )}
          {userData[0].instagram !== null && (
            <IconButton
              href={`https://www.instagram.com/${userData[0].github}`}
              target="_blank"
            >
              <InstagramIcon style={{color: "white"}} />
            </IconButton>
          )}
          {userData[0].github !== null && (
            <IconButton
              href={`https://www.github.com/${userData[0].github}`}
              target="_blank"
            >
              <GitHubIcon style={{color: "white"}}/>
            </IconButton>
          )}
          {userData[0].linkedin !== null && (
            <IconButton
              href={`https://www.linkedin.com/${userData[0].linkedin}`}
              target="_blank"
            >
              <LinkedInIcon style={{color: "white"}} />
            </IconButton>
          )}
        </Box>
        <br></br>
        <AppBar
          style={{ alignItems: "center", backgroundColor: "#141d2b" }}
          elevation={0}
          color="transparent"
          position="static"
        >
          <Tabs
          
            style={{ backgroundColor: "#141d2b", color: "white", }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              style={{ textTransform: "none" ,fontSize: "120%"}}
              label="Joined Rooms"
              {...a11yProps(0)}
            />
            
            <Tab
              style={{ textTransform: "none",fontSize: "120%" }}
              label="Certificates"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {roomData.map((i) => {
            return (<Rooms roomImg={i.roomImage} roomName={i.roomName} roomDesc={i.roomTagline}/>);
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Hello there
        </TabPanel>
        <TabPanel value={value} index={2}>
          Hello there
        </TabPanel>
      </Container>
    </div>
    // </MuiThemeProvider>
  );
}
}
export default PublicProfile;
