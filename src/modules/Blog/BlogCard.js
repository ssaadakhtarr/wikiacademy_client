import React, { useEffect } from 'react';
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
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
      backgroundColor: "#141d2b",
      
      // minWidth: 360,
      // maxWidth: 360,
      minHeight: 425,
      // maxHeight: 400,
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
    minHeight: 80,
    maxHeight: 135,
    
    
  },
}); 

export default function BlogCard({blogTitle, blogDesc, blogImg, username,url}) {

  const classes = useStyles();
  const history = useHistory();
  

  return (
    <Box align="center" padding={3}>
    <Card className={classes.root}>
        <a className={classes.root} style={{textDecoration: "none"}} onClick={()=>{
          history.push(url)
        }}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={blogImg}
          title={blogTitle}
        />
        <CardContent  className={classes.content}>
          <Typography style={{color: "white",fontWeight: "bold",}} gutterBottom variant="h5" component="h2">
          {blogTitle.slice(0,25)}
          </Typography>
          <Typography style={{color: "#ccc",}} variant="body1" color="textSecondary" component="p">
         {blogDesc.slice(0,130)}
         </Typography>
        <br></br>
         <br></br>
        </CardContent>
      </CardActionArea>
        </a>
     
      <CardActions>
         < BiUserCircle style={{color: "#9fef00", fontSize: "40px"}}/>
        <Typography style={{color: "#fff"}} variant="body1">{username}</Typography>
        
      </CardActions>
    </Card>
    </Box>
  
  );
}
