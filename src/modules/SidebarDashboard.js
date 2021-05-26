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

const useStyles = makeStyles((theme) => ({
    anchor: {
        color: "#a4b1cd",
        fontSize: "1.2rem",
    '&:hover': {
       color: "#9fef00",
    },
    },
}));

function SidebarDashboard() {
    const classes = useStyles();
    return (
        <div style={{color: "#a4b1cd"}}>
            <br></br>
            
            
            <div style={{textAlign: "center"}}><CgProfile style={{color: "#9fef00",  fontSize: "80px"}}/></div>
          <Typography style={{color: "#fff", textAlign: "center"}} variant="h6">Saad Akhtar</Typography>
          <Typography style={{color: "#9fef00", textAlign: "center", fontWeight: "bold", letterSpacing: "2px"}} variant="body2">ssaadakhtarr</Typography>
          <br></br><br></br><br></br><br></br>
          <div style={{ padding: ".625rem 1.5rem", textAlign: "left" }}>
            <Typography style={{textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold"}} variant="body2">Learn</Typography>
            {/* <Icon><img src={monitorIcon} /></Icon> */}

            <br></br>
            <div style={{ display: "block", position: "relative", left: "5%" }}>
              <a className={classes.anchor} href="/dashboard" style={{ textDecoration: "none" }}>
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
                
              </a>
              
              <br></br>
              
              <a className={classes.anchor} href="/hacktivities" style={{ textDecoration: "none" }}>
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
                
              </a>
              
              <br></br>
              
              <a className={classes.anchor} href="/leaderboard" style={{ textDecoration: "none" }}>
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
              </a>
          
              <br></br>
              <a className={classes.anchor} href="/paths" style={{ textDecoration: "none" }}>
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
              </a>
              
              <br></br>
            </div>
            <br></br><br></br>

            <Typography style={{textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold"}} variant="body2">Get Help</Typography>
            <br></br>

            <div style={{ display: "block", position: "relative", left: "5%" }}>
              <a className={classes.anchor} href="/faq" style={{ textDecoration: "none" }}>
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
              </a>
              
              <br></br>
              <a className={classes.anchor}href="/blog" style={{ textDecoration: "none" }}>
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
              </a>
             
              <br></br>
              <a className={classes.anchor}href="#" style={{ textDecoration: "none" }}>
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
              </a>
            </div>
          </div>
        
        </div>
    )
}

export default SidebarDashboard
