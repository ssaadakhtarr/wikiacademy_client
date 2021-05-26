import { Box, Typography } from "@material-ui/core";
import Nav from "./Nav";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import Paths from "./Paths";
import Rooms from "./Rooms";
import Logo from "../img/logo/neonWhite.png";
import Nav2 from "./Nav2";
import "../App.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  Hack: {
    [theme.breakpoints.down("xs")]: {
      fontSize:"1.5em",
      
    },
  },
  HackImg: {
    width: "50%",
    display: "block",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {
    width: "150%",
    // display: "block",
    paddingBottom: "40px",
    },
  },
  HackA: {
    [theme.breakpoints.down("xs")]: {
      fontSize:"0.9em",
      
    },
  },
  HackAA: {
    [theme.breakpoints.down("xs")]: {
      fontSize:"1em"
    },
  },
  HackAZ: {
    [theme.breakpoints.down("xs")]: {
      fontSize:"1.4em"
    },
  },
  HackAX: {
    [theme.breakpoints.down("xs")]: {
      fontSize:"0.9em"
    },
  },
  Room: {
    paddingTop:"60px",
    [theme.breakpoints.down("xs")]: {
      fontSize:"0.9em"
    },
  },
  Isa:{
  //   backgroundImage:
  //   "url('https://i.pinimg.com/originals/1f/3d/85/1f3d85148ab183f085a42b5649069499.jpg')",
   textAlign: "left",
  // backgroundColor: "#5e5e5e",
  color: "white"
  }
}));

const boxStyle = {
  backgroundImage:
    "url('https://wallpapercave.com/wp/wp2757874.gif')",
    backgroundPosition: "center",
  textAlign: "left",
  backgroundColor: "#5e5e5e",
  color: "white",
};

const boxStyle2 = {
  backgroundColor: "white",
};

function Hacktivities() {
  const user = JSON.parse(localStorage.getItem('user'));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{backgroundColor: "#141d2b"}}>
      {(user === null) && <Nav />}
          {(user !== null) && <Nav2 />}  

      <Box style={boxStyle} padding={6}>
      <Grid container spacing={3} style={{  
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color:"white"
}}>
      <Grid item xs={12} sm={9} className={classes.Isa}
      >
          <Typography  variant="h2" className={classes.Hack}>Hacktivities</Typography>
        <Typography style={{color: "#c6cede"}} variant="subtitle1" className={classes.HackA}>
          Find your favourite topic or enroll in a guided learning path
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5" className={classes.Room} >
          Total Rooms
        </Typography>
         
        </Grid>
        {/* style={{paddingLeft:"1150px"}} */}
        </Grid>
      </Box>
      <AppBar color="transparent" position="static" className={classes.HackAA}>
        <Tabs 
          style={{ backgroundColor: "#1e2633" }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab style={{textTransform: "none", color: "#fff",fontSize: "120%" }}  label="Overview" {...a11yProps(0)} />
          <Tab style={{textTransform: "none", color: "#fff",fontSize: "120%" }} label="Rooms" {...a11yProps(1)} />
          <Tab style={{textTransform: "none", color: "#fff",fontSize: "120%" }} label="Paths" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ color: "#fff"}} value={value} index={0}>
        <Box padding={10} style={{display:"flex",justifyContent:"center",flexDirection:"column",allignItems:"center"}}>
        <img
          style={{
            
          }}

          src={Logo}
          className={classes.HackImg}
        />
        <Typography variant="h4" className={classes.HackAZ}>Learn hacking with WikiSecurity!</Typography>
        <br></br>
        <Typography variant="body" className={classes.HackAX}>
          Uplift your hacking and security skills by enrolling in a guided path
          or join a room of your choice!.
        </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h4">All Rooms</Typography>
        <Typography variant="subtitle2">
          Each room belonging to a specific topic or tool
        </Typography>
        <Rooms />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h4">Learning Paths</Typography>
        <Typography variant="subtitle2">
          Structured and guided paths to follow along
        </Typography>
        <Paths />
      </TabPanel>
    </div>
  );
}

export default Hacktivities;
