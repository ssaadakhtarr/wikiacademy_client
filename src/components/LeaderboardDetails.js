import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import Fuse from "fuse.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';
import {Link} from "react-router-dom";

const JoinButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const LoginButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1e2633",
    },
  },
})(Button);


const EditButton = withStyles({
  root: {
      fontWeight: "bold",
     textTransform: "none",
    backgroundColor: "transparent",
    color: "#4e60ee",
    border: "1px solid #4e60ee",
    "&:hover": {
      backgroundColor: "#4e60ee",
      color: "#1e2633",
    },
  },
})(Button);

const DeleteButton = withStyles({
  root: {
      fontWeight: "bold",
     textTransform: "none",
    backgroundColor: "transparent",
    color: "#f54e4e",
    border: "1px solid #f54e4e",
    "&:hover": {
      backgroundColor: "#f54e4e",
      color: "#1e2633",
    },
  },
})(Button);


function LeaderboardDetails(userData) {
  console.log(userData);
  const [data, setData] = React.useState([['1', 'ssaadakhtarr'], ['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar']]);
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [filter, setFilter] = React.useState(userData);
  // const fuse = new Fuse(userData, {
  //   keys: ["username"],
  // });

  // console.log(fuse.search(search));
  // userData.map((i, index) => {
  //   if (i.username === )
  // })
  // userData.map((i, index) => {
  //   if(search === "") {
  //     setFilter(userData);
  //   } else {
  //     if(i.username.includes(search)) {
  //       filter.push(i);
  //     } 
  //     else {
  //       filter.splice(index, 1)
  //     }  
  //   }
    
  // })
  
  

  return (
    <div>
    <Box style={{backgroundColor: "rgb(255,255,255,0.1)", color: "white"}}>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Rank</Typography></Grid>
        <Grid item xs={4} sm={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Username</Typography></Grid>
        <Grid item xs={3} sm={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Points</Typography></Grid>
        <Grid item xs={3} sm={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Level</Typography></Grid>
        
        
      </Grid>
    </Box>
    <br></br>
    {userData.userData.map((current, index) => {
      if (index < 10) {
        return(
      
          <div>
            
            <br></br>
          <Box style={{backgroundColor: "rgb(0,0,0,0.1)", color: "white"}}>
          <Grid container spacing={2}>
          <Grid item xs={2} sm={3}><Typography style={{marginTop: "2%"}}>{current.rank}</Typography></Grid>
          <Grid item xs={4} sm={3}><Link style={{color: "#9fef00", }} to={'/p/'+current.username}><Typography style={{marginTop: "2%",fontWeight: "bold", letterSpacing: "1px",}}>{current.username}</Typography></Link></Grid>
          <Grid item xs={3} sm={3}><Typography style={{marginTop: "2%"}}>{current.points}</Typography></Grid>
          <Grid item xs={3} sm={3}><Typography style={{marginTop: "2%"}}>{current.level}</Typography></Grid>
          
          
          
        </Grid>
        </Box>
   
         <br></br>
         
         </div>
        )
        
      }
      
    })}
    </div>
  );
}

export default LeaderboardDetails;
