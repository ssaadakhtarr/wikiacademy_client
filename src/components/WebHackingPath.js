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

function WebHackingPath() {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <Box style={boxStyle} padding={6}>
        <Typography  variant="h3" className={classes.center}>Web Fundamental
        <Button variant="contained" size="small" style={{position: 'relative',color: 'white',backgroundColor: "blue",borderColor: "#039671",marginLeft:'30px'}}>
                Learning Pathway
              </Button></Typography>
        <Typography variant="subtitle1">
        Web hacking refers to exploitation of applications via HTTP which can be done by manipulating the application via its graphical web interface, tampering the Uniform Resource Identifier (URI) or tampering HTTP elements not contained in the URI.Start Learning today about web hacking and exploit the websites
        </Typography>
      </Box>
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={4} lg={4}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Web} />
              <CardContent>
               {/*  <Typography gutterBottom variant="h5" component="h2">
                  Tools
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  <h3>A pathway to web application security.</h3>
                  <ul>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Understand web fundamental</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Major vulnerabilities explained</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Learn industry-used tools</p></li>
                      <li><p style={{position:"absolute",marginRight:"15px",marginTop:"4px"}}>Web application assessments</p></li>
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
      <Grid item xs={12} sm={12} md={7} lg={7}>
          <Box style={{backgroundColor: "#fff", color: "black"}} padding={6} margin={4}>
          <h1 style={{fontWeight:"bold"}} className={classes.Intro}>Introduction</h1>
          
          {/* <img src="waves" alt="waves12" style={{position: "absolute",width: "100%",bottom: "-128px",opacity: "0.4",verticalAlign: "middle",borderStyle: "none"}}></img> */}
          <div style={{}} className={classes.Line}></div>
<h3>
The aim of this path is to teach you how to attack web applications. To successfully attack and exploit web applications, you need to understand how they work. The first section (Web Fundamentals) will give you all the pre-requisite knowledge on this. 

The second section (Security Tools) focuses on learning how to use Industry Standard tooling to interact with your targets. 

The third section (Vulnerabilities) covers various vulnerabilities found in web applications today. This section will go over root causes of these vulnerabilities and give you hands on experience on exploiting them.

The final section (Practise Makes Perfect) will help you apply what you've learnt in previous sections.

After completing this path, you should be able to:
<ul>
    <li>understand how web applications work</li>
    <li>utilise industry standard tooling when attacking web applications</li>
    <li>explain and exploit common web vulnerabilities</li>
    <li>apply this knowledge to other targets (be it within an interview or a professional web applications security assessment)</li>

    </ul>
    


</h3>
          </Box>
      </Grid>
      </Grid>
        </div>
    )
}

export default WebHackingPath
