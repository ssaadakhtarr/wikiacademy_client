import { Box, Typography } from "@material-ui/core";
import Footer from "./Footer";
import Nav from "./Nav";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { useEffect } from "react";
import Paths from "./Paths";
import Rooms from "./Rooms";
import Logo from "../img/logo/neonWhite.png";
import Nav2 from "./Nav2";
import "../App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

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
  Hack: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
  },
  HackImg: {
    width: "50%",
    display: "block",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "150%",
      // display: "block",
      paddingBottom: "40px",
    },
  },
  HackA: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  HackAA: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  HackAZ: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4em",
    },
  },
  HackAX: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  Room: {
    paddingTop: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  Isa: {
    //   backgroundImage:
    //   "url('https://i.pinimg.com/originals/1f/3d/85/1f3d85148ab183f085a42b5649069499.jpg')",
    textAlign: "left",
    // backgroundColor: "#5e5e5e",
    color: "white",
  },
}));

const boxStyle = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
  backgroundPosition: "center",
  textAlign: "left",
  backgroundColor: "#5e5e5e",
  color: "white",
};

const boxStyle2 = {
  backgroundColor: "white",
};

function Hacktivities() {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [blogData, setBlogData] = React.useState();
  const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/getHomeData").then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        setMounted(true);
        setBlogData(response.data.result);
        setRoomData(response.data.result_1);
      }
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!mounted || blogData === undefined || roomData === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ backgroundColor: "#141d2b" }}>
        {/* {(user === null) && <Nav />}
          {(user !== null) && <Nav2 />}   */}

        <Box style={boxStyle}>
          <Nav />
          <Box style={{ textAlign: "center" }} padding={10}>
            <Typography variant="h2" className={classes.Hack}>
              Hacktivities
            </Typography>
            <Typography
              style={{ color: "#c6cede" }}
              variant="subtitle1"
              className={classes.HackA}
            >
              Find your favourite topic or enroll in a guided learning path
            </Typography>

            {/* style={{paddingLeft:"1150px"}} */}
          
          
          
          </Box>
        </Box>
        <AppBar
          color="transparent"
          position="static"
          className={classes.HackAA}
        >
          <Tabs
            style={{ backgroundColor: "#1e2633" }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              style={{ textTransform: "none", color: "#fff", fontSize: "120%" }}
              label="Overview"
              {...a11yProps(0)}
            />
            <Tab
              style={{ textTransform: "none", color: "#fff", fontSize: "120%" }}
              label="Rooms"
              {...a11yProps(1)}
            />
            <Tab
              style={{ textTransform: "none", color: "#fff", fontSize: "120%" }}
              label="Paths"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel style={{ color: "#fff" }} value={value} index={0}>
          <Box
            padding={10}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              allignItems: "center",
            }}
          >
            <div style={{ textAlign: "center", width: "100%" }}>
              <img
                style={{
                  width: "50%",
                }}
                src={Logo}
              />
            </div>
            <br></br>
            <br></br>
            <Typography variant="h3" className={classes.HackAZ}>
              Learn hacking with WikiSecurity!
            </Typography>
            <br></br>
            <div style={{ margin: "0 25%" }}>
              <Typography
                style={{ color: "#c6cede" }}
                variant="h6"
                className={classes.HackAX}
              >
                Welcome to the Hacktivities section! Here in this section you
                can start learning by joining a specific room of your choice or
                you can also enroll in the guided paths in order to get started.
                Scroll to the Rooms or Paths section to learn more.
              </Typography>
            </div>
          </Box>
        </TabPanel>
        <TabPanel
          style={{ color: "white", textAlign: "center",padding:"1%",}}
          value={value}
          index={1}
        >
          <Typography variant="h3">Rooms</Typography>
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
          <Typography style={{ color: "#c6cede" }} variant="h6">
            Each room belonging to a specific topic or tool
          </Typography>
          <Grid style={{textAlign: "center",}} container spacing={1}>
            {roomData.map((i) => {
              return (
                <div>
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Rooms
                      roomImg={i.roomImage}
                      roomName={i.roomName}
                      roomDesc={i.roomTagline}
                    />
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel
          style={{ color: "white", textAlign: "center" }}
          value={value}
          index={2}
        >
          <Typography variant="h3">Learning Paths</Typography>

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
          <Typography style={{ color: "#c6cede" }} variant="subtitle2">
            Structured and guided paths to follow along
          </Typography>

          <Paths />
        </TabPanel>
        <Footer />
      </div>
    );
  }
}

export default Hacktivities;
