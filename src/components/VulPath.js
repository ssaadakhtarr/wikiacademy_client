import React, { useEffect } from 'react'
import Nav from "./Nav";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ToolImage from "../img/tools.png";
import { makeStyles } from '@material-ui/core/styles';
import VulnImage from "../img/vulnerabilities.jpg";
import axios from 'axios';
import routes from "../GetRoute.js";
import Rooms from "./Rooms";
import Nav2 from './Nav2';
import Cookies from 'universal-cookie';



const useStyles = makeStyles((theme)=>({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    media: {
        height: 280,
      },
      Intro: {
        fontSize:"4.5rem",
        [theme.breakpoints.down("xs")]: {
          fontSize:"2.5em"
        },
      },
      Line:{
        position:"absolute",
        display: "inlineBlock",
        width: "190px",height: "5px",
        borderRadius: "20px",
        backgroundColor: "#88cc14",
        marginTop:'-40px',
        [theme.breakpoints.down("xs")]: {
          position:"absolute",
        display: "inlineBlock",
        width: "190px",height: "5px",
        borderRadius: "20px",
        backgroundColor: "#88cc14",
        marginTop:'-20px',
        },
      },
      center: {
        [theme.breakpoints.down("xs")]: { 
          textAlign:'center',
           alignItems: 'center', 
           justifyContent: 'center'
        },
      },
  }));
  const boxStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/originals/1f/3d/85/1f3d85148ab183f085a42b5649069499.jpg')",
    textAlign: "left",
    backgroundColor: "#5e5e5e",
    color: "white",
  };

function VulPath() {
    const classes = useStyles();
    const pathName = "vuln";
    const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  const cookies = new Cookies();
  useEffect(() => {
    axios.get(`${routes}/getPath/${pathName}`).then((response) => {
      console.log(response.data);
      if (response.data !== undefined) {
        setMounted(true);
        setRoomData(response.data);
        
      }
  
    })
  }, [])
  // if (!mounted || roomData === undefined) {
    
  //   return (
  //   "load"
  //   );
  // }
  // else {


    return (
      <div >
      <Box  style={{
      textAlign: "center",
      backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
      backgroundPosition: "center",
      width: "100%",
      color: "white",
    }}>
        {(cookies.get("userId")) ? <Nav2 /> : <Nav/>}
          <Box padding={10}>
          <Typography  variant="h2" className={classes.center}>Vulnerabilities
    </Typography>
    <Typography style={{color: "#c6cede"}} variant="subtitle1">
      A path designed to learn about different vulnerabilities and finding them on real world websites.
    </Typography>
          </Box>
      </Box>
      
      <Box style={{backgroundColor: "#1e2633", textAlign : "center", color: "white", padding: "4%",}}>
      <Typography  variant="h3" className={classes.center}>Description
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
      <Typography variant="h6">
      Network security tools can be either software- or hardware-based and help security teams protect their organization's networks, critical infrastructure, and sensitive data from attacks. ... These include tools such as firewalls, intrusion detection systems and network-based antivirus programs.
      </Typography>
      </Box>
  

  {/* Tools room are displayed below */}
  <Box style={{backgroundColor: "#1e2633", minHeight: "100vh"}}>
     {roomData !== undefined ?  <Grid container spacing={1}>
   
   {roomData.map((i) => {
     return(
      
         <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
         <Rooms roomTitle={i.roomTitle} roomImg={i.roomImage} roomName={i.roomName} roomDesc={i.roomTagline.slice(0,140)} />
       </Grid>
     );
   })}
    </Grid> : "loading..."}
          </Box>
          
    
 
        </div>

    )
}
// }
export default VulPath
