import React from 'react'
import Nav from "./Nav";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ToolImage from "../img/tools.png";
import { makeStyles } from '@material-ui/core/styles';
import ToolPath from "../img/toolpath.png";
import Waves from "../img/waves.png"

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

function CompleteBegineer() {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <Box style={boxStyle} padding={6}>
        <Typography  variant="h3" className={classes.center}>Complete Begineer
        <Button variant="contained" size="small" style={{position: 'relative',color: 'white',backgroundColor: "blue",borderColor: "#039671",marginLeft:'30px'}}>
                Learning Pathway
              </Button></Typography>
        <Typography variant="subtitle1">
          Are you new to security and dont know how to start? This path way will give you the core skills required for cyber security
        </Typography>
      </Box>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ToolPath} />
              <CardContent>
               {/*  <Typography gutterBottom variant="h5" component="h2">
                  Tools
                </Typography> */}
                <Typography variant="body2" color="textSecondary" component="p">
                  <h3>Learn the core skills required to start a carrier in cyber security</h3>
                  <ul>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Web application security</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Network security</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Basic Linux</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Scripting</p></li>
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
          <div className={classes.Line}></div>
          <h3>
The beginner path aims to give a broad introduction to the different areas in Computer Security. This path will be looking at the following areas:
<ul>
    <li>Basic Linux - Get familiar with the linux command line.</li>
    <li>Web Application Security - Learn web application security concepts through the OWASP Top 10</li>
    <li>Network Security - Using essential tools like NMAP to enumerate infrastructure.</li>
    <li>Scripting Challenges - Using Python and Bash to carry out different tasks.</li>
    <li>Privilege Escalation</li>
    </ul>
    Once you complete the beginner path, you should have learnt the fundamental knowledge for each specific area, and use these core concepts to build your understanding of more complex topics within the area.


</h3>
          </Box>
      </Grid>
      </Grid>
        </div>
    )
}

export default CompleteBegineer
