import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {SiOpslevel} from 'react-icons/si'

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

function LevelOnlyDashboard({level}) {
    const classes = useStyles();
    return (
        <div>
            <Card style={{ height: "100%", width: "100%", backgroundColor: "#1a2332", color: "#fff",}} className={classes.root}>
      <CardContent>
      <div style={{textAlign: "center"}}><SiOpslevel style={{color: "#9fef00",  fontSize: "70px"}}/></div>
       
        
        
          <br></br>
        <Typography style={{textAlign: "center",}} variant="h4">{level}</Typography>
        <br></br>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body2">Level</Typography>
    

      </CardContent>
      
    </Card>
        </div>
    )
}

export default LevelOnlyDashboard
