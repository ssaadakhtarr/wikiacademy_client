import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Grid } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';


const RoomButton = withStyles({
  root: {
    textTransform: "none",
    lineSpacing: "1px",
    fontWeight: "bold",
    backgroundColor: "#9fef00",
    color: "#1e2633",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 734,
      [theme.breakpoints.down("md")]: {
        minWidth: 534,
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: 234,
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

  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box style={{width: "100%"}} mr={1}>
          <LinearProgress style={{width :"100%"}} variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography style={{color: "#cad2e2"}} variant="body2" >{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#9fef00'
      }
    }
  });

function RoomsDashboard() {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"));
    const [userId, setUserId] = React.useState(user.id);
    const [roomData, setRoomData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    axios.post("http://localhost:3001/getJoinedRooms", {
      userId: userId,
    }).then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        setMounted(true);
        setRoomData(response.data);
        
      }
    })
  }, [])

  if (!mounted || roomData === undefined) {
    return (
      null
    );

  }
  else {
    console.log(roomData);


    return (
        <div>
            <Card style={{ height: "100%", width: "100%", backgroundColor: "#1a2332", color: "#fff",}} className={classes.root}>
      <CardContent>
      <Typography style={{textAlign: "left", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body1">Rooms Joined</Typography>

          {roomData.map((i) => {
            console.log(i.progBar);
            return (<div>
              <br></br>
          <Box padding={2} style={{backgroundColor: "#212a3a"}}>
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={2} xs={2}><Typography style={{marginTop: "8%", textAlign: "left"}}>{i.roomName}</Typography></Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}><Box style={{}}> <MuiThemeProvider theme={theme}><LinearProgressWithLabel  style={{margin: "3% 0", borderRadius: "25px", height: "15px",backgroundColor: "#141d2b"}} value={i.progBar*4} /></MuiThemeProvider></Box></Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}><Box style={{textAlign: "right"}}><RoomButton href={`/room/${i.roomName}`} variant="contained">Continue</RoomButton></Box></Grid>
            </Grid>
            </Box>
            <br></br>
      
            </div>);
          })}


            {/* <Box padding={2} style={{backgroundColor: "#212a3a"}}>
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={2} xs={2}><Typography style={{marginTop: "8%", textAlign: "left"}}>Linux fundamentals</Typography></Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}><Box style={{}}> <MuiThemeProvider theme={theme}><LinearProgressWithLabel  style={{margin: "3% 0", borderRadius: "25px", height: "15px",backgroundColor: "#141d2b"}} value="25" /></MuiThemeProvider></Box></Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}><Box style={{textAlign: "right"}}><RoomButton variant="contained">Continue</RoomButton></Box></Grid>
            </Grid>
            </Box>
            <br></br>
            <Box padding={2} style={{backgroundColor: "#212a3a"}}>
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={2} xs={2}><Typography style={{marginTop: "8%", textAlign: "left"}}>Hydra</Typography></Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}><Box style={{}}> <MuiThemeProvider theme={theme}><LinearProgressWithLabel  style={{margin: "3% 0", borderRadius: "25px", height: "15px",backgroundColor: "#141d2b"}} value="25" /></MuiThemeProvider></Box></Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}><Box style={{textAlign: "right"}}><RoomButton variant="contained">Continue</RoomButton></Box></Grid>
            </Grid>
            </Box>
            <br></br> */}
        
      

      </CardContent>
      
    </Card>
        </div>
    )
}
}

export default RoomsDashboard
