import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {SiNintendogamecube} from 'react-icons/si';
import {RiQuestionnaireFill} from 'react-icons/ri';


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


function TotalRoomsCard({questions}) {
    const classes = useStyles();
    return (
        <div>
            <Card style={{ height: "100%", width: "100%",background: "linear-gradient(90deg, rgba(38,49,67,0.1) 0%, rgba(59,85,50,0.1) 100%)", color: "#fff",}} className={classes.root}>
      <CardContent>
      <div style={{textAlign: "center"}}><RiQuestionnaireFill style={{color: "#9fef00",  fontSize: "70px"}}/></div>
       
        
        
          <br></br>
        <Typography style={{textAlign: "center",}} variant="h4">{questions}</Typography>
        <br></br>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body2">Total Questions</Typography>
    

      </CardContent>
      
    </Card>
        </div>
    )
}

export default TotalRoomsCard;