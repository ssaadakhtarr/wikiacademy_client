import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
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


function Labs({img, name, desc, path}) {
    const classes = useStyles();
  const history= useHistory();
    return (
        <div>
            <Box align="center" padding={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media}  image={img}/>
              <CardContent style={{backgroundColor: "#141d2b", color: "white", minHeight: "80px"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography style={{color: "#cad2e2"}} variant="body1" color="textSecondary" component="p">
                  {desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#141d2b"}}>
              <JoinButton href={`/labs/${path}`} fullWidth size="small" onClick={()=>{
                  console.log("clicked")
              }}>
                Start
              </JoinButton>
            </CardActions>
          </Card>
        </Box>
        </div>
    )
}

export default Labs
