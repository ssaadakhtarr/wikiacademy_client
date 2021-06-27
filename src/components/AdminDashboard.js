import { Box, Grid } from '@material-ui/core';
import React from 'react';
import LeaderboardChart from '../modules/AdminDashboard/LeaderboardChart';
import Navbar from '../modules/AdminDashboard/Navbar';
import SideDrawer from '../modules/AdminDashboard/SideDrawer';
import TotalRoomsCard from '../modules/AdminDashboard/TotalRoomsCard';
import TotalUsersCard from '../modules/AdminDashboard/TotalUsersCard';
import TotalQuestionCard from '../modules/AdminDashboard/TotalQuestionsCard';


function AdminDashboard() {
    return (
        <div style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",}}>
           <Navbar/>

           <Box padding={2}>
               <Grid container spacing={2}>
                   <Grid item xs={4}>
                   <TotalUsersCard/>
                   </Grid>
                   <Grid item xs={4}>
                   <TotalRoomsCard/>
                   </Grid>
                   <Grid item xs={4}>
                   <TotalQuestionCard/>        
                   </Grid>
               </Grid>
               <br></br>
               <LeaderboardChart />
           </Box>
        </div>
    )
}

export default AdminDashboard
