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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import routes from "../GetRoute.js";
import DoorDashFavorite from "./DoorDashFavorite";
import InstaStories from "./InstaStories";
import ThreeDots from "./ThreeDots";

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
  const MySwal = withReactContent(Swal)
  const classes = useStyles();
  const [{ User }, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem("user"));
  // const [userId, setUserId] = React.useState(user.id);
  const [userDashboard,setUserDashboard]=React.useState();
  const [mounted, setMounted] = React.useState(false);
  
  const history = useHistory();
  useEffect(() => {
    (user !== null && (axios.get(`${routes}/getDashboard/${user.id}`).then((response)=> {
      console.log(response.data);
      if(response.data !== undefined){
        setUserDashboard(response.data);
          setMounted(true);
      }
      })))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in'
    })

    }, []);

    // if (!mounted && userDashboard === undefined) {
    //     return <div>Loading...</div>;
    //   }
    //   else{
  return (
    <div style={{ backgroundColor: "#141d2b", minHeight: "100vh"}}>
      <Box style={boxStyle}>
        <Nav2 />
        <Box  style={{ padding: "3% 0" }}>
          <Typography
          
            style={{
            //   float: "left",
            // left: "420px",
            // top: "2px",
            fontSize: "40px",
            position: "relative",
              textAlign: "center",
              textTransform: "none",
              lineSpacing: "1px",
              fontWeight: "bold",
            }}
            variant="h5"
          >{" "} 
          {/* <MdDashboard
          style={{
            
            position: "relative",
            top: "5",
            right: "7",
            // float: "left",
            // right: "10px",
            // top: "0px",
            // display: "block",
            // paddingLeft:"55px",
          }}
        /> */}
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
              {userDashboard !== undefined ? <SidebarDashboard firstName={userDashboard.firstName} username={userDashboard.username} title={userDashboard.title} level={userDashboard.level} /> : (<ThreeDots/>)}
            </Box>
          </Grid>

          <Grid container lg={8} md={8}>
            
            <Grid container >
              <Grid item md={6} sm={6} xs={12}>
                <Box margin={2}>
                  {(userDashboard !== undefined) ? (<TotalUsersDashboard users={userDashboard?.users}/>) : (<DoorDashFavorite/>)}
                </Box>
              </Grid>
              <Grid item  md={6} sm={6} xs={12}>
                <Box margin={2}>
                {(userDashboard !== undefined) ? (<RankDashboard rank={userDashboard?.rank}/>) : (<DoorDashFavorite/>)}
                </Box>
              </Grid>
              <Grid container >
                <Grid item md={6} sm={6} xs={12}>
                  <Box fullWidth margin={2}>
                  {(userDashboard !== undefined) ? (<LevelOnlyDashboard level={userDashboard?.level}/>) : (<DoorDashFavorite/>)}
                  </Box>
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <Box margin={2}>
                  {(userDashboard !== undefined) ? (<QuestionsDashboard points={userDashboard?.points}/>) : (<DoorDashFavorite/>)}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Box margin={2}>
              {(userDashboard !== undefined) ? (<LevelDashboard level={userDashboard?.level} points={userDashboard?.points}/>) : (<DoorDashFavorite/>)}
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Box margin={2} md={12}>
                {(userDashboard !== undefined) ? <RoomsDashboard name={userDashboard.username}/> : (<DoorDashFavorite/>)}
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
// }
export default Dashboard;
