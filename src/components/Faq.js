import React from "react";
import Image from "../img/home.jpg";
import "../App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import {  createMuiTheme } from "@material-ui/core/styles";
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

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  /* Client\src\fonts\style.css */

  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <Box
        style={{
          backgroundColor: "transparent",
          color: "white",
          padding: "5%",
          //backgroundColor: "#141d2b",
        }}
      >
        <Typography style={{textAlign: "center", paddingBottom: "5%"}} variant="h3">Frequently Asked Questions</Typography>
        <div>
          {/* <h1 style={{ textAlign: "center", padding: "" }}>
            Frequently Asked Questions
          </h1> */}
          <div className={classes.root}>
            {/* <Box style={{backgroundColor: "#394454" ,color:"white",borderBlockColor:"white"}}> */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{
                backgroundColor: "#394454",
                color: "white",
                borderBlockColor: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                // style={{ backgroundColor: "#1e2633", color: "white" }}
              >
                <Typography className={classes.heading}>
                  Introduction
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  backgroundColor: "#1e2633",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <Typography>
                  We want to make the entire process of both teaching and
                  learning cyber security a lot easier. As a student, you can
                  join rooms on different areas of security, learn practical
                  skills about these areas, and building an amazing skillset.We
                  know that it can be a pain to set up teaching material and
                  keep track of users' progress. Creating rooms makes it easier
                  for anyone (both casually and professionally) to teach cyber
                  security classes. With a click of a button, you can make your
                  own material available to students, and easily check up on how
                  well they are doing with the class. TryHackMe is perfect for
                  setting up CTFs, Workshops, Assignments or Assessments with
                  our user tracking functionality (see below).
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* </Box> */}
            <Box>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    What are rooms?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    Rooms are a virtual space where you can easily allocate
                    tasks to the users. You can create rooms for challenges
                    (CTF's) or to run a particular workshop or training session.
                    The process to start allocating tasks to users is below
                    Create a room Upload material (VMs or other files) or use
                    the ones we provide Assign tasks for a room. Give your users
                    your room code and have them join The users in the room will
                    now be informed to complete the given task.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>
                    How points work
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    If the room type is a walkthrough room, you only get 25% of
                    those points added to your account score. Challenge room’s
                    receive 100% if the room has been released during this
                    month. All points you get are added to your ‘All-time’
                    score, however not all points are added to your ‘Monthly’
                    score (which is reset to 0 on the last day of the month
                    23:59 GMT). You only get 100% of a room's monthly points if
                    a room has been released during that month; you get 25% of
                    challenge room points if its not released in this month.
                    This stops new users being able obtain large amounts of
                    points as they have more rooms to solve than older users -
                    by monthly points only being awarded if a room is released
                    this month, everyone has a fair chance to be number 1 on the
                    ‘Monthly’ leaderboard and everyone has an equal chance to be
                    number 1 on the ‘All-time’ leaderboard.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>
                    Creating Rooms
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    You can see that you can easily change the title and
                    description of the room. Additionally, you have access to
                    several options such as: Changing the difficulty level of
                    the room Making the room public(where all users would be
                    able to access the rooms and resources) Making the room
                    clonable, where other users would be able to copy the room
                    and have access to the tasks and resources Changing the IP
                    to either public or private Making the room free to use
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography className={classes.heading}>Blogs</Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    We will blog about anything such as room writeups, current
                    security news, TryHackMe events and much more. Go over to
                    the blog page to view all the posts.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography className={classes.heading}>
                    Contact Us
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    If you have any questions or problems please contact:
                    hello@wikisecurity.com or join our discord server.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography className={classes.heading}>
                    Hactivities
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    Welcome to the Hacktivities section! Here in this section
                    you can start learning by joining a specific room of your
                    choice or you can also enroll in the guided paths in order
                    to get started. Scroll to the Rooms or Paths section to
                    learn more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box style={{ backgroundColor: "#1e2633", color: "white" }}>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
                style={{
                  backgroundColor: "#394454",
                  color: "white",
                  borderBlockColor: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                >
                  <Typography className={classes.heading}>About Us</Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#1e2633",
                    color: "white",
                    borderBlockColor: "white",
                  }}
                >
                  <Typography>
                    We have initialized a project which focuses on the learning
                    of Cyber Security. In this website we have broken down major
                    and large topics into byte-sized minified lessons to make
                    your learning experience easy and user friendly.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
