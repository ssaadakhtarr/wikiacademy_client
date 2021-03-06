import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FaUsers} from 'react-icons/fa';


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 350,
      [theme.breakpoints.down("md")]: {
        minWidth: 134,
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: 134,
      },
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

function TotalUsersDashboard({users}) {
    const classes = useStyles();
    return (
        <div>
            <Card style={{ height: "100%", idth: "100%", backgroundColor: "#111927", color: "#fff",}} className={classes.root}>
      <CardContent>
          <div style={{textAlign: "center"}}><FaUsers style={{color: "#9fef00",  fontSize: "70px"}}/></div>
          
        
        
       
          <br></br>
        <Typography style={{textAlign: "center",}} variant="h4">{users}</Typography>
        <br></br>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body2">Total Users</Typography>
    

      </CardContent>
      
    </Card>
        </div>
    )
}

export default TotalUsersDashboard
