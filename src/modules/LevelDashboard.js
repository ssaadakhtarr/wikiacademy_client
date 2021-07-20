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
import {  createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';



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

function LevelDashboard({level,points}) {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const points1=Math.ceil(((parseInt(points))/1000));

  const [levelPoints, setLevelPoints] = React.useState({1: 0, 2: 3000, 3: 8000, 4: 15000, 5: 25000, 6: 40000, 7: 80000, 8: 150000, 9: 300000, 10: 1000000});
  const [nextLevel, setNextLevel] = React.useState(level + 1);
  const [difference, setDifference] = React.useState(levelPoints[nextLevel]-levelPoints[level]);
  const [extraPoints, setExtraPoints] = React.useState(points-levelPoints[level]);
  const [value, setValue] = React.useState((extraPoints*100)/difference);

  console.log(points1)

  return (
    <Card style={{display: "inline-block", height: "100%", width: "100%", backgroundColor: "#111927", color: "#fff",}} className={classes.root}>
      <CardContent>
      <div style={{textAlign: "center"}}><GiChart style={{color: "#9fef00",  fontSize: "70px"}}/></div>
        
      
      <br></br>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body1">LEVEL {level}</Typography>

    <MuiThemeProvider theme={theme}>
        <LinearProgressWithLabel  style={{margin: "3% 0", borderRadius: "25px", height: "15px",backgroundColor: "#141d2b"}} value={value}/>
        {/* {console.log(Math.round((parseInt(points))/1000))}
        {console.log(points)} */}
        </MuiThemeProvider>
        <Typography style={{textAlign: "right",}} variant="body1">{points} / {levelPoints[nextLevel]} points</Typography>
        <Typography style={{textAlign: "center", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", color: "#78839c"}} variant="body2">Progress</Typography>
        <br></br>
      </CardContent>
      
    </Card>
  );
}

export default LevelDashboard
