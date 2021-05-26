import React from 'react'
import Nav from "./Nav";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ToolImage from "../img/tools.png";
import { makeStyles } from '@material-ui/core/styles';
import ToolPath from "../img/toolpath.png";
import Web from "../img/web.jpg";



const useStyles = makeStyles((theme)=>({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    media: {
        height: 280,
      },
      Button: {
        
        [theme.breakpoints.down("xs")]: {
        color: 'white',
        backgroundColor: "blue",
        borderColor: "#039671",
        marginRight:"20px"
        },
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
        width: "190px",
        height: "5px",
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

function ToolsPath() {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <Box style={boxStyle} padding={6}>
        <Typography  variant="h3" className={classes.center}>Tools
        <Button variant="contained" size="small" style={{position: 'relative',
        color: 'white',
        backgroundColor: "blue",
        borderColor: "#039671",
        marginLeft:'30px',}} classeName={classes.Button}>
                Learning Pathway
              </Button></Typography>
        <Typography variant="subtitle1">
        Network security tools can be either software- or hardware-based and help security teams protect their organization's networks, critical infrastructure, and sensitive data from attacks.These include tools such as firewalls, intrusion detection systems and network-based antivirus programs.
        </Typography>
      </Box>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ToolImage} />
              <CardContent>
               {/*  <Typography gutterBottom variant="h5" component="h2">
                  Tools
                </Typography> */}
                <Typography variant="body2" color="textSecondary" component="p">
                  <h3>Learn all the tools used in cyber security</h3>
                  <ul>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Wire Shark</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Nmap</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Metasploit</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Nikto</p></li>
                  </ul>

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" size="large" style={{position: 'relative',color: 'white',backgroundColor: "#039671",borderColor: "#039671" ,width:'100%'}}>
                Enroll Now
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
      <Grid item item xs={12} sm={12} md={7} lg={7}>
          <Box style={{backgroundColor: "#fff", color: "black"}} padding={6} margin={4}>
          <h1 style={{fontWeight:"bold"}} className={classes.Intro}>Introduction</h1>
          <div className={classes.Line}></div>
          {/* <Typography variant="h1" style={{fontWeight:"bold"}} className={classes.Intro}>Introduction </Typography> */}
          {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}> */}
      {/* <div style={{display: "inlineBlock",width: "370px",height: "5px",borderRadius: "20px",backgroundColor: "#88cc14"}}> */}

      {/* </div> */}
    {/* </div> */}
          {/* <h1 >Introduction</h1> */}
          
          {/* <img src="waves" alt="waves12" style={{position: "absolute",width: "100%",bottom: "-128px",opacity: "0.4",verticalAlign: "middle",borderStyle: "none"}}></img> */}
          {/* <div style={{position:"absolute",display: "inlineBlock",width: "190px",height: "5px",borderRadius: "20px",backgroundColor: "#88cc14",marginTop:'-80px'}}></div> */}
<h3>
Network security tools can be either software- or hardware-based and help security teams protect their organization's networks, critical infrastructure, and sensitive data from attacks. ... These include tools such as firewalls, intrusion detection systems and network-based antivirus programs.
<ul>
   <li>Network Security Monitoring tools</li>
   <li>Encryption Tools</li>
   <li>Network Defence Wireless Tools</li>
   <li>Packet Sniffers</li>
   <li>Antivirus Software</li>
   <li>Firewall</li>
   <li>PKI Services</li>
   <li>Managed Detection Services</li>
   <li>Penetration Testing</li>  
    </ul>
    Application security, information security, network security, disaster recovery, operational security, etc. are the different parts of cybersecurity. It needs to be maintained for various types of cyber threats like Ransomware, Malware, Social Engineering, and Phishing.


</h3>
          </Box>
      </Grid>
      </Grid>
        </div>
    )
}

export default ToolsPath
