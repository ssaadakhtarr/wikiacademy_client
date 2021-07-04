import { useHistory } from "react-router-dom";
import Axios from "axios";
import Nav2 from "./Nav2";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Icon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import monitorIcon from "../img/icons/monitor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FaQuestionCircle } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import CircleProgress from "./CircleProgress";
import LevelDashboard from "../modules/LevelDashboard";
import TotalUsersDashboard from "../modules/TotalUsersDashboard";
import RankDashboard from "../modules/RankDashboard";
import QuestionsDashboard from "../modules/QuestionsDashboard";
import LevelOnlyDashboard from "../modules/LevelOnlyDashboard";
import SidebarDashboard from "../modules/SidebarDashboard";
import RoomsDashboard from "../modules/RoomsDashboard";
import {MdDashboard} from 'react-icons/md';
import React, { useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  
  sidebar: {
    display: "none",
    [theme.breakpoints.up("md")]: {
       display: "inline-block",
    },
    dashText: {
      color: "pink",
      [theme.breakpoints.up("md")]: {
        color: "pink",
     },
    },
}}));

const boxStyle = {
  textAlign: "center",
  backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
  backgroundPosition: "center",
         
  color: "white",
};

function Dashboard() {
  
  const classes = useStyles();
  const [{ User }, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem("user"));
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
    <div style={{ backgroundColor: "#141d2b" }}>
      <Box style={boxStyle}>
        <Nav2 />
        <Box  style={{ padding: "3% 0" }}>
          <Typography
          
            style={{
            //   float: "left",
            // left: "420px",
            // top: "2px",
            
            position: "relative",
              textAlign: "center",
              textTransform: "none",
              lineSpacing: "1px",
              fontWeight: "bold",
            }}
            variant="h5"
          >{" "} <MdDashboard
          style={{
            
            position: "relative",
            top: "3",
            // float: "left",
            // right: "10px",
            // top: "0px",
            // display: "block",
            // paddingLeft:"55px",
          }}
        />
            Dashboard
          </Typography>
        </Box>
        {/* <Typography variant="h2">
                    {user ? user.firstName : "Dashboard"}
                </Typography> */}
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Box
            className={classes.sidebar}
              style={{
                height: "100%",
                width: "80%",
                borderRadius: "5px",
                position: "relative",
                float: "top",
                bottom: "5%",
                backgroundColor: "#111927",
              }}
            >
              <SidebarDashboard />
            </Box>
          </Grid>

          <Grid container lg={8} md={8}>
            
            <Grid container >
              <Grid item md={6} sm={6} xs={12}>
                <Box margin={2}>
                  {(userDashboard) && (<TotalUsersDashboard users={userDashboard?.users}/>)}
                </Box>
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <Box margin={2}>
                {(userDashboard) && (<RankDashboard rank={userDashboard?.rank}/>)}
                </Box>
              </Grid>
              <Grid container >
                <Grid item md={6} sm={6} xs={12}>
                  <Box fullWidth margin={2}>
                  {(userDashboard) && (<LevelOnlyDashboard level={userDashboard?.level}/>)}
                  </Box>
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <Box margin={2}>
                  {(userDashboard) && (<QuestionsDashboard points={userDashboard?.points}/>)}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Box margin={2}>
              {(userDashboard) && (<LevelDashboard level={userDashboard?.level} points={userDashboard?.points}/>)}
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Box margin={2} md={12}>
                <RoomsDashboard />
              </Box>
            </Grid>
          </Grid>

          

          {/* <Grid item xs={12} sm={12} md={12} lg={4}>
        
        
        

        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4}>
        
       
        </Grid> */}
        </Grid>
      </Container>
      <br></br>
    </div>
  );
}
}
export default Dashboard;
