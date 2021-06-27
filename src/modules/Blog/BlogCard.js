import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import {BiUserCircle} from'react-icons/bi';

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
    maxHeight: 160,
    maxHeight: 160,
    
  },
}); 

export default function BlogCard() {
  const classes = useStyles();

  return (
      <Box className={classes.root}>
    <Card className={classes.root}>
        <a className={classes.root} style={{textDecoration: "none"}} href="/test">
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images-cdn.9gag.com/images/thumbnail-facebook/57098360_1614347994.7054_EWaWeH_n.jpg"
          title="Contemplative Reptile"
        />
        <CardContent  className={classes.content}>
          <Typography style={{color: "white",fontWeight: "bold",}} gutterBottom variant="h6" component="h2">
          AttackerKB - Not all vulns are created equal
          </Typography>
          <Typography style={{color: "white",}} variant="body2" color="textSecondary" component="p">
          Give your students their own browser based security environment. We have Kali Linux machines with all the necessary (industry used) security tools ready to be controlled directly in the browser.With this, the be controlled directly in the browser.With this, the</Typography>
        <br></br>
         <br></br>
        </CardContent>
      </CardActionArea>
        </a>
     
      <CardActions>
         < BiUserCircle style={{color: "#9fef00", fontSize: "40px"}}/>
        <Typography style={{color: "#fff"}} variant="body1">ssaadakhtarr</Typography>
        
      </CardActions>
    </Card>
    </Box>
  
  );
}
