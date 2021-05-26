import React from 'react'
import Box from '@material-ui/core/Box';
import FooterImage from "../img/footer.png";
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fLogo from '../img/logo/neonWhiteHalf.png'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   /*  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }, */
    flogo: {
        width: "30%",
        height: "30%",
      },
      textL: {
        [theme.breakpoints.down("xs")]: {
          fontSize:"0.52em"
        },
      },
      textLA: {
        fontWeight: "bold",
        paddingTop: "20%",
        [theme.breakpoints.down("xs")]: {
          paddingTop: "0%",
        },
      },
      textLAS: {
        textDecoration: "none",
        lineHeight: "1.5",
        color: "#cad2e2",
        [theme.breakpoints.down("xs")]: {
         
        },
      },
      Img: {
        paddingTop: "10%",
        width: "40%",
        height: "40%",
        
        [theme.breakpoints.down("xs")]: {
          width:"30%",
          height:"30%"
        },
      },
      logoText: {
        [theme.breakpoints.down("xs")]: {
          textAlign: "center"
        },
      }
  }));
  

function Footer() {
    const classes = useStyles();
    return (
        <main style={{ backgroundColor: "#1e2633" ,color:"white"}}>
        
            <Box  padding={1} marginLeft={5}>
            <Grid container spacing={6}>
            <Grid item xs={12} sm={3} md={3} lg={3} className={classes.textL}>
          <Paper className={classes.logoText} style={{ backgroundColor: "#1e2633",color:"white"} }
          elevation={0}>
          <a href="/">
          <img
                
                src={fLogo}
                alt="logo"
                // className={classes.flogo}
                className={classes.Img}
              />
              </a>
              <br></br>
              <Typography variant="caption">Copyright WikiSecurity Academy 2021</Typography>
              <Typography variant="caption">2A/7 WikiSec Technilogies,Pakistan</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{  backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
              <Typography variant="h5" className={classes.textLA}>Learn</Typography>
              
              <a href="/hacktivities" className={classes.textLAS}>Hacktivites</a>
              <br></br>
              
              <a href="/leaderboard" className={classes.textLAS}>Leaderboard</a>
              <br></br>
              <a href="/hacktivities" className={classes.textLAS}>Hacktivites</a>
              <br></br>
             
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{ backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
            <Typography variant="h5" className={classes.textLA}>Docs</Typography>
              
              <a href="/about" className={classes.textLAS}>About Us</a>
              <br></br>
              <a href="/blog" className={classes.textLAS}>Blog</a>
              <br></br>
              <a href="/faq" className={classes.textLAS}>FAQ</a>
              <br></br>
              
              
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{ backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
            <Typography variant="h5" className={classes.textLA}>Social</Typography>
              
              <a href="/#" className={classes.textLAS}>Twitter</a>
              <br></br>
              <a href="/# " className={classes.textLAS}>Instagram</a>
              <br></br>
              <a href="/#" className={classes.textLAS}>Discord</a>
              <br></br>
              
          </Paper>
        </Grid>
            </Grid>
        <br></br>
            </Box>
            
       </main>
    )
}

export default Footer
