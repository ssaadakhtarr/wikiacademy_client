import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid, GridListTile } from "@material-ui/core";
import nmapImage from "../img/rooms/nmap.png";
import hydraImage from "../img/rooms/hydra.jpg";
import owaspImage from "../img/rooms/owasp.jpg";
import linuxImage from "../img/rooms/linux.png";
import {useHistory} from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import GridList from '@material-ui/core/GridList';

const JoinButton = withStyles({
  root: {
    fontWeight: "bold",
    padding: "2%",
    paddingTop: "3%",
    backgroundColor: "transparent",
    color: "#9fef00",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 500,
    
  },
  media: {
    
    height: 250,
  },
  gridList: {
    width: "100%",
    height: 450,
  },
}));

function Rooms() {
    const classes = useStyles();
    const history = useHistory();
  return (
    <div>
     
        <Grid container spacing={3}>
        
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea >
              <CardMedia className={classes.media} image={nmapImage} />
              <CardContent style={{backgroundColor: "#263143", color: "white",}}>
                <Typography gutterBottom variant="h5" component="h2">
                  nmap
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#263143"}}>
              <JoinButton onClick={() => history.push(`/room/nmap`)} size="small" color="primary">
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
              <CardMedia className={classes.media} image={hydraImage} />
              <CardContent style={{backgroundColor: "#263143", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Hydra
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                Hydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#263143"}}>
              <JoinButton size="small" color="primary">
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
              <CardMedia className={classes.media} image={owaspImage} />
              <CardContent style={{backgroundColor: "#263143", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  OWASP Top 10
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  Learn about top 10 web security risks with interesting questions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#263143"}}>
              <JoinButton size="small" color="primary">
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
              <CardMedia className={classes.media} image={linuxImage} />
              <CardContent style={{backgroundColor: "#263143", color: "white"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Linux Fundamentals
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body2" color="textSecondary" component="p">
                  A room designed for complete newbies to get familiar with the basics of linux and command line.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#263143"}}>
              <JoinButton size="small" color="primary">
                Learn More
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
 
    </div>
  ); 

  
}

export default Rooms;
