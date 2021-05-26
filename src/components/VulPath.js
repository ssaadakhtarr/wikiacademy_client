import React from 'react'
import Nav from "./Nav";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ToolImage from "../img/tools.png";
import { makeStyles } from '@material-ui/core/styles';
import VulnImage from "../img/vulnerabilities.jpg";



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
    return (
        <div>
            <Nav />
            <Box style={boxStyle} padding={6}>
        <Typography  variant="h3" className={classes.center}>Vulnerabilities
        <Button variant="contained" size="small" style={{position: 'relative',color: 'white',backgroundColor: "blue",borderColor: "#039671",marginLeft:'30px'}}>
                Learning Pathway
              </Button></Typography>
        <Typography variant="subtitle1">
        A Security Vulnerability is a weakness, flaw, or error found within a security system that has the potential to be leveraged by a threat agent in order to compromise a secure network.
        </Typography>
      </Box>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={VulnImage} />
              <CardContent>
               {/*  <Typography gutterBottom variant="h5" component="h2">
                  Tools
                </Typography> */}
                <Typography variant="body2" color="textSecondary" component="p">
                  <h3>Learn to exploit all the vulnerabilities in the field cyber security</h3>
                  <ul>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Human Social</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Physical</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Economic</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Environmental</p></li>
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
          
          {/* <img src="waves" alt="waves12" style={{position: "absolute",width: "100%",bottom: "-128px",opacity: "0.4",verticalAlign: "middle",borderStyle: "none"}}></img> */}
          <div style={{}} className={classes.Line}></div>
<h3>
In computer security, a vulnerability is a weakness which can be exploited by a threat actor, such as an attacker, to cross privilege boundaries within a computer system. To exploit a vulnerability, an attacker must have at least one applicable tool or technique that can connect to a system weakness. 
According to the CWE/SANS Top 25 list, there are three main types of security vulnerabilities:
<ul>
  <li>Faulty defenses</li>
  <li>Poor resource management</li>
  <li>Insecure connection between elements</li>
    </ul>
    <h4>Top 5 cyber security vulnerabilities</h4>
    There are some cyber security vulnerabilities that are targeted by attackers more often. Below you can find a list of top 5 cyber security vulnerabilities that caused the most harm to organizations in this decade:
    <ul>
        <li>Substandard back-up and recovery</li>
        <li>Weak authentication management</li>
        <li>Poor network monitoring</li>
        <li>End-user errors and/or misuses</li>
        <li>Inadequate end-point security</li>
        
    </ul>


</h3>
          </Box>
      </Grid>
      </Grid>
        </div>
    )
}

export default VulPath
