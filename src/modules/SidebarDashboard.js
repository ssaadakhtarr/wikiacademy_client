import React from 'react';
import { Box, CircularProgress, Container, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import monitorIcon from "../img/icons/monitor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FaQuestionCircle } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import {MdDashboard} from 'react-icons/md';
import { FaTrophy } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {CgProfile} from 'react-icons/cg';
import {BsBook} from 'react-icons/bs';
import {Link} from "react-router-dom";
import { Scrambler, Cycler } from "react-text-scrambler";

const useStyles = makeStyles((theme) => ({
    anchor: {
        color: "#a4b1cd",
        fontSize: "1.2rem",
    '&:hover': {
       color: "#9fef00",
    },
    },
}));

function SidebarDashboard({firstName, username, title, level}) {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"));
    const characters = "!<>-_\\/[]{}—=+*^?#________";
    return (
        <div style={{color: "#a4b1cd", minHeight: "100vh"}}>
            <br></br>
            
            
            <div style={{textAlign: "center"}}><CgProfile style={{color: "#9fef00",  fontSize: "80px"}}/></div>
          {(username != undefined) && (<div>
            <Typography style={{color: "#fff", textAlign: "center"}} variant="h6">{firstName}</Typography>
          <Typography style={{color: "#9fef00", textAlign: "center", fontWeight: "bold", letterSpacing: "2px"}} variant="body2">{username}</Typography>
          <Typography style={{color: "#9fef00", textAlign: "center", fontWeight: "bold", letterSpacing: "2px"}} variant="body1">[{<Cycler
            duration={ 3500 }
            strings={ ["Level " + (level).toString(), title] } characters={characters}/>}]</Typography>
          </div>)}
          <br></br><br></br><br></br><br></br>
          <div style={{ padding: ".625rem 1.5rem", textAlign: "left" }}>
            <Typography style={{textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold"}} variant="body2">Learn</Typography>
            {/* <Icon><img src={monitorIcon} /></Icon> */}

            <br></br>
            <div style={{ display: "block", position: "relative", left: "5%" }}>
              <Link className={classes.anchor} to="/dashboard" style={{ textDecoration: "none" }}>
                <MdDashboard
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Dashboard</Typography>
                
              </Link>
              
              <br></br>
              
              <Link className={classes.anchor} to="/hacktivities" style={{ textDecoration: "none" }}>
                <FaDesktop
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Hacktivities</Typography>
                
              </Link>
              
              <br></br>
              
              <Link className={classes.anchor} to="/leaderboard" style={{ textDecoration: "none" }}>
                <FaTrophy
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{"  "} 
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Leaderboard</Typography>
              </Link>
          
              <br></br>
              {/* <Link className={classes.anchor} to="/paths" style={{ textDecoration: "none" }}>
                <FaNetworkWired
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Paths</Typography>
              </Link>
              
              <br></br> */}
            </div>
            <br></br><br></br>

            <Typography style={{textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold"}} variant="body2">Get Help</Typography>
            <br></br>

            <div style={{ display: "block", position: "relative", left: "5%" }}>
              <Link className={classes.anchor} to="/faq" style={{ textDecoration: "none" }}>
                <FaQuestionCircle
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">FAQ</Typography>
              </Link>
              
              <br></br>
              <Link className={classes.anchor} to="/blog" style={{ textDecoration: "none" }}>
                <FaBlog
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Blog</Typography>
              </Link>
             
              <br></br>
              <Link className={classes.anchor} target="blank" href="https://www.discord.com/wikisecurityacademy" style={{ textDecoration: "none" }}>
                <FaDiscord
                  style={{
                    float: "left",
                    right: "5px",
                    top: "2px",
                    display: "block",
                    position: "relative",
                  }}
                />{" "}
                <Typography style={{fontSize: "1.2rem",}} variant="body2">Discord</Typography>
              </Link>
            </div>
          </div>
        
        </div>
    )
}

export default SidebarDashboard
