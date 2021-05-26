import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {GiChart} from 'react-icons/gi';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9fef00'
    }
  }
});

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
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

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 734,
      [theme.breakpoints.down("md")]: {
        minWidth: 534,
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: 234,
      },
      // [theme.breakpoints.down("xs")]: {
      //   minWidth: 160,
      // },
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

function LevelDashboard() {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card style={{display: "inline-block", height: "100%", width: "100%", backgroundColor: "#1a2332", color: "#fff",}} className={classes.root}>
      <CardContent>
      <div style={{textAlign: "center"}}><GiChart style={{color: "#9fef00",  fontSize: "70px"}}/></div>
        
      
          
        <Typography style={{textAlign: "right",}} variant="body1">Next Rank - Level9 [0x9][Pr0]</Typography>

    <MuiThemeProvider theme={theme}>
        <LinearProgressWithLabel  style={{margin: "3% 0", borderRadius: "25px", height: "15px",backgroundColor: "#141d2b"}} value="25" />
        </MuiThemeProvider>
        <Typography style={{textAlign: "right",}} variant="body1">5336/6000 Points</Typography>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body2">Progress</Typography>
        <br></br>
      </CardContent>
      
    </Card>
  );
}

export default LevelDashboard
