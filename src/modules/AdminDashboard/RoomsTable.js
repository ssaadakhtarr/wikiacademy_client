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


function RoomsTable() {
  
  const [data, setData] = React.useState([['1', 'nmap'], ['2', 'hydra'],['2', 'linux'],['2', 'owasp top 10'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar']]);

  return (
    <div>
    <Box style={{backgroundColor: "rgb(255,255,255,0.1)", color: "white"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}><Typography variant="h6" style={{fontWeight: "bold"}}>ID</Typography></Grid>
        <Grid item xs={4}><Typography variant="h6" style={{fontWeight: "bold"}}>Room Name</Typography></Grid>
        
        <Grid item xs={4}><Typography variant="h6" style={{fontWeight: "bold"}}>Delete</Typography></Grid>
      </Grid>
    </Box>
    <br></br>
    {data.map((current) => {
      return(
        <div>
          <br></br>
        <Box style={{backgroundColor: "rgb(0,0,0,0.1)", color: "white"}}>
        <Grid container spacing={2}>
        <Grid item xs={4}><Typography style={{marginTop: "2%"}}>{current[0]}</Typography></Grid>
        <Grid item xs={4}><a style={{color: "#9fef00", }} href="/room/nmap"><Typography style={{marginTop: "2%",fontWeight: "bold", letterSpacing: "1px",}}>{current[1]}</Typography></a></Grid>
        
        <Grid item xs={4}><Typography><DeleteButton>Delete</DeleteButton></Typography></Grid>
      </Grid>
      </Box>
       <br></br>
       
       </div>
      )
      
    })}
    </div>
  );
}

export default RoomsTable;
