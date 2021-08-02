import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import LeaderboardChart from '../modules/AdminDashboard/LeaderboardChart';
import Navbar from '../modules/AdminDashboard/Navbar';
import SideDrawer from '../modules/AdminDashboard/SideDrawer';
import TotalRoomsCard from '../modules/AdminDashboard/TotalRoomsCard';
import TotalUsersCard from '../modules/AdminDashboard/TotalUsersCard';
import TotalQuestionCard from '../modules/AdminDashboard/TotalQuestionsCard';
import axios from 'axios';
import routes from "../GetRoute.js";
import DoorDashFavorite from './DoorDashFavorite';


function AdminDashboard() {
    const [dashboardDetails,setDashboardDetails]=React.useState();
    const [mounted, setMounted] = React.useState(false);
  
    const [LeaderboardData, getLeaderBoardDetails] = React.useState();
 
 

  

    useEffect(() => {
        axios.get(`${routes}/getAdminData`).then((response)=> {
        console.log(response.data);
        if(response.data != undefined){
            setDashboardDetails(response.data);
            setMounted(true);
        }
        })
        axios.get(`${routes}/getLeaderboard`).then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        getLeaderBoardDetails(response.data);
        setMounted(true);

      }
    })
        }, []);
        // if (!mounted || dashboardDetails === undefined || LeaderboardData === undefined) {
        //     return <div>Loading...</div>;
        //   }
        //   else{

         

    return (
        <div style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center", minHeight: "100vh"}}>
           <Navbar/>
            
           <Box padding={2}>
               <Grid container spacing={2}>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   {dashboardDetails !== undefined ? <TotalUsersCard users={dashboardDetails}/> : (<DoorDashFavorite/>)}
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   {dashboardDetails !== undefined ? <TotalRoomsCard rooms={dashboardDetails}/> : (<DoorDashFavorite/>)}
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   {dashboardDetails !== undefined ? <TotalQuestionCard questions={dashboardDetails}/> : (<DoorDashFavorite/>)}    
                   </Grid>
               </Grid>
               <br></br>
               {LeaderboardData !== undefined ? <LeaderboardChart leaderboard={LeaderboardData}/> : (<DoorDashFavorite/>)}
           </Box>

        </div>

    )
}
// }
export default AdminDashboard