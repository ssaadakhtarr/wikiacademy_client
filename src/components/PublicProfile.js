import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
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
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const { username } = useParams();
  console.log(username);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <MuiThemeProvider theme={theme}>
    <div style={{color: "white",}}>
      <Box
       
        style={{
          
          backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
          backgroundPosition: "center",
        }}
      >
        <Nav2 />
        <Box style={{paddingTop: "5%"}}>
        <Typography
          style={{marginBottom: "5%", textAlign: "center", color: "#9fef00" }}
          variant="h4"
        >
          {user.username}{" "}
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
            <Typography variant="h6">{user.rank}</Typography>
            <Typography variant="h6">Rank</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{user.roomsIn}</Typography>
            <Typography variant="h6">Rooms In</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{user.level}</Typography>
            <Typography variant="h6">Level</Typography>
          </Grid>
          <Grid xs={3} sm={3}>
            <Typography variant="h6">{user.points}</Typography>
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
          {user.twitter !== null && (
            <IconButton
              
              href={`https://www.twitter.com/${user.twitter}`}
              target="_blank"
            >
              <TwitterIcon style={{color: "white"}} />
            </IconButton>
          )}
          {user.instagram !== null && (
            <IconButton
              href={`https://www.instagram.com/${user.github}`}
              target="_blank"
            >
              <InstagramIcon style={{color: "white"}} />
            </IconButton>
          )}
          {user.github !== null && (
            <IconButton
              href={`https://www.github.com/${user.github}`}
              target="_blank"
            >
              <GitHubIcon style={{color: "white"}}/>
            </IconButton>
          )}
          {user.linkedin !== null && (
            <IconButton
              href={`https://www.linkedin.com/${user.linkedin}`}
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
          <Rooms />
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

export default PublicProfile;
