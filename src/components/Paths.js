import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import ToolImage from "../img/tools.png";
import VulnImage from "../img/vulnerabilities.jpg";
import WebImage from "../img/webimage.jpg";
import BegImage from "../img/beginner.jpg";
import {useHistory} from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const JoinButton = withStyles({
  root: {
    fontWeight: "bold",
    padding: "2%",
    paddingTop: "2%",
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    backgroundColor: "#141d2b",
    
  maxWidth: "100%",
  height: "100%",
  transition: "0.5s all ease",
  '&:hover': {
      transform: "scale(1.01)",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)",
  },
},
media: {
  height: 200,
},
content: {

  maxHeight: 120,
  
},

});

export default function Paths() {
  const classes = useStyles();
  const history= useHistory();
  const handleTools=()=>{
    history.push("/path/tools")
  }
  const handleVulnerabilities=()=>{
    history.push("/path/vulnpath")
  }
  const handleWeb=()=>{
    history.push("/path/web-hacking")
  }
  const handleBegineer=()=>{
    history.push("/path/beginner")
  }
  

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ToolImage} />
              <CardContent style={{backgroundColor: "#141d2b", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Tools
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  Learn about security related tools that will help you work
                  efficiently and start hacking like a pro!.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#141d2b"}}>
              <JoinButton size="small" onClick={handleTools}>
                Learn More
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={VulnImage} />
              <CardContent style={{backgroundColor: "#141d2b", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Vulnerabilities
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  Learn about top Vulnerabilities including OWASP Top 10 and
                  enhance your hacking skills!.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#141d2b"}}>
              <JoinButton size="small" color="primary" onClick={handleVulnerabilities}>
                Learn More
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={WebImage} />
              <CardContent style={{backgroundColor: "#141d2b", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Hacking Fundamentals
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  Learn about website hacking and penetration testing and hack
                  websites ethically!.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#141d2b"}}>
              <JoinButton size="small" color="primary" onClick={handleWeb}>
                Learn More
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={BegImage} />
              <CardContent style={{backgroundColor: "#141d2b", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Complete Beginner
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  A path designed for complete newbies to get into the field of
                  hacking!.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#141d2b"}}>
              <JoinButton size="small" color="primary" onClick={handleBegineer}>
                Learn More
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
