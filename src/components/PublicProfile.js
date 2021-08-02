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
import {  createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import Rooms from "./Rooms.js"
import axios from "axios";
import routes from "../GetRoute.js";
import Cookies from "universal-cookie";
import Nav from "./Nav";
import { Scrambler, Cycler } from "react-text-scrambler";



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
  // const [userId, setUserId] = React.useState(user.id);
  const { username } = useParams();
  console.log(username);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [blogData, setBlogData] = React.useState();
  const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  const [roomsIn, setRoomsIn] = React.useState();
  const [userData, setUserData] = React.useState();
  const [strings, setStrings] = React.useState([]);
  const [temp, setTemp] = React.useState();
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
    axios.post(`${routes}/getJoinedRooms`, {
      username: username,
    }).then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        setMounted(true);
        setRoomData(response.data);
        setRoomsIn(response.data.length);
      }
    })

    axios.post(`${routes}/getPublicProfile`, {
      username: username,
    }).then((response) => {
      console.log(response.data);
      if(response.data != undefined) {
        setUserData(response.data);
        // setStrings(response.data[0].level + " " + response.data[0].title)

        // strings.push(response.data[0].level);
        // strings.push(response.data[0].title);
      }
    })
  }, [])

    if (userData !== undefined && strings.length === 0) {
      strings.push(userData[0].level);
      strings.push(userData[0].title);
    }

  // if (!mounted  || userData === undefined) {
  //   return (
  //     null
  //   );

  // }
  const characters = "!<>-_\\/[]{}—=+*^?#________";
//  console.log(strings.split(" ")[0]);
  
  
  
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
         

          {(userData !== undefined ? userData[0].username : "loading...")}{" "}
          <span style={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}>
            {/* {userData !== undefined ? "[" + userData[0].title + "]" : "loading..."} */}
    [
          {(userData !== undefined) ? <Cycler
            duration={ 3500 }
            strings={ ["Level " + (userData[0].level).toString(), userData[0].title] } characters={characters}/>: "loading..."}
            ]
            {/* <Cycler
            duration={ 3000 }
            strings={ strings } characters={characters}/> */}
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
            <Typography variant="h6">{userData !== undefined ? userData[0].rank : "loading..."}</Typography>
            <Typography variant="h6">Rank</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{roomsIn !== undefined ? roomsIn : "loading..."}</Typography>
            <Typography variant="h6">Rooms In</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{userData !== undefined ? userData[0].level : "loading..."}</Typography>
            <Typography variant="h6">Level</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{userData !== undefined ? userData[0].points : "loading..."}</Typography>
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
        {(userData !== undefined) ? <Box style={{ textAlign: "center",}}>
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
        </Box> : "loading..."}
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
            
            {/* <Tab
              style={{ textTransform: "none",fontSize: "120%" }}
              label="Certificates"
              {...a11yProps(2)}
            /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} style={{minHeight: "100vh"}}>
        <Grid container spacing={1}>
          {roomData !== undefined && roomData.length === 0 && "No rooms joined." }
          {(roomData !== undefined && roomData.length !== 0) && roomData.map((i) => {
             
             return (
               <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
               <Rooms roomImg={i.roomImage} roomName={i.roomName} roomDesc={i.roomTagline.slice(0,140)} roomTitle={i.roomTitle}/>
        </Grid>
             );
           })}
          </Grid>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          {userData !== undefined ? <Box style={{minHeight: "100vh", height: "100vh", textAlign: "center"}} padding={20}>
            <Typography variant="h3">{`${userData[0].username} has no certificates yet!`}</Typography>
          </Box> : "loading..."}
        </TabPanel> */}
        {/* <TabPanel value={value} index={2}>
          Hello there
        </TabPanel> */}
      </Container>
    </div>
    // </MuiThemeProvider>
  );
}

export default PublicProfile;
