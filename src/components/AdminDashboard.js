import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import LeaderboardChart from '../modules/AdminDashboard/LeaderboardChart';
import Navbar from '../modules/AdminDashboard/Navbar';
import SideDrawer from '../modules/AdminDashboard/SideDrawer';
import TotalRoomsCard from '../modules/AdminDashboard/TotalRoomsCard';
import TotalUsersCard from '../modules/AdminDashboard/TotalUsersCard';
import TotalQuestionCard from '../modules/AdminDashboard/TotalQuestionsCard';
import axios from 'axios';


function AdminDashboard() {
    const [dashboardDetails,setDashboardDetails]=React.useState();
    const [mounted, setMounted] = React.useState(false);
  
    const [LeaderboardData, getLeaderBoardDetails] = React.useState();
 
 

  

    useEffect(() => {
        axios.get("http://localhost:3001/getAdminData").then((response)=> {
        console.log(response.data);
        if(response.data != undefined){
            setDashboardDetails(response.data);
            setMounted(true);
        }
        })
        axios.get("http://localhost:3001/getLeaderboard").then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        getLeaderBoardDetails(response.data);
        setMounted(true);

      }
    })
        }, []);
        if (!mounted || dashboardDetails === undefined || LeaderboardData === undefined) {
            return <div>Loading...</div>;
          }
          else{

         

    return (
        <div style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",}}>
           <Navbar/>
            
           <Box padding={2}>
               <Grid container spacing={2}>
                   <Grid item xs={4}>
                   <TotalUsersCard users={dashboardDetails[0].users}/>
                   </Grid>
                   <Grid item xs={4}>
                   <TotalRoomsCard rooms={dashboardDetails[1].rooms}/>
                   </Grid>
                   <Grid item xs={4}>
                   <TotalQuestionCard questions={dashboardDetails[2].questions}/>        
                   </Grid>
               </Grid>
               <br></br>
               <LeaderboardChart leaderboard={LeaderboardData}/>
           </Box>

        </div>

    )
}
}
export default AdminDashboard