import React, { useEffect } from "react";
import Nav2 from "./Nav2";
import { useStateValue } from "../StateProvider";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GeneralProfile from "../modules/GeneralProfile";
import AboutProfile from "../modules/AboutProfile";
import OtherProfile from "../modules/OtherProfile";
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import FlareIcon from '@material-ui/icons/Flare';
import {useHistory} from "react-router-dom";
import axios from "axios";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    margin: "0",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  MuiBox: {
    root: {
      padding: "0",
    },
    
  },
}));

const boxStyle = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
          backgroundPosition: "center",
  color: "#fff",
};

const ProfileButton = withStyles({
  root: {
    backgroundColor: "#9fef00",
    color: "#161e2d",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#161e2d",
    },
  },
})(Button);

function Profile() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const [{ User }, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username;
  const [age, setAge] = React.useState("");
  const [userId, setUserId] = React.useState(user.id);
  const [userDashboard,setUserDashboard]=React.useState();
  const [mounted, setMounted] = React.useState(false);
  

  const history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:3001/getDashboard/${userId}`).then((response)=> {
    console.log(response.data);
    if(response.data !== undefined){
      setUserDashboard(response.data);
        setMounted(true);
    }
    })


    }, []);


    if (!mounted && userDashboard === undefined) {
        return <div>Loading...</div>;
      }
      else{
  

  return (
    <div className={classes.root}  style={{backgroundColor: "#141d2b"}}>
      
      {/* {User ? User.username : "Kuch nh aya ajeeb"} */}
      <Box style={boxStyle} >
      <Nav2 />
      <Box padding={6}>
        <Typography variant="h4"><AccountCircleIcon style={{fontSize: "70px", float: "left", color: "#9fef00", marginRight: "10px"}}/>Your Profile</Typography>
        <Typography style={{ color: "#b4b6bb" }} variant="subtitle1">
          Manage your profile here
        </Typography>
        <ProfileButton
        onClick={() => history.push(`/p/${username}`)}
          style={{
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px",
            float: "right",
            right: "5px",
            bottom: "50px",
          }}
        >
          Public Profile
        </ProfileButton>
        </Box>
      </Box>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          style={{backgroundColor: "#1e2633"}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          
          <Tab
            style={{color: "white", textTransform: "none", fontSize: "large" }}
            icon={<SettingsIcon style={{color: "#9fef00"}}/>}
            label="General"
          
        
            {...a11yProps(0)}
          />
          <Tab
            style={{color: "white", textTransform: "none", fontSize: "large" }}
            icon={<PersonIcon style={{color: "#9fef00"}}/>}
            label="About you"
            {...a11yProps(1)}
          />
          <Tab
            style={{color: "white", textTransform: "none", fontSize: "large" }}
            label="Other"
            icon={<FlareIcon style={{color: "#9fef00"}}/>}
            {...a11yProps(2)}
          />
        </Tabs>
        </AppBar>
        <TabPanel style={{backgroundColor: "#141d2b"}} value={value} index={0}>
          <GeneralProfile userData={userDashboard} />
        </TabPanel>
        <TabPanel style={{backgroundColor: "#141d2b"}} value={value} index={1}>
          <AboutProfile userData={userDashboard} />
        </TabPanel>
        <TabPanel style={{backgroundColor: "#141d2b"}} value={value} index={2}>
          <OtherProfile />
        </TabPanel>
        
      </div>
      
    </div>
  );
}
}

export default Profile;
