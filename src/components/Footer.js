import React from 'react'
import Box from '@material-ui/core/Box';
import FooterImage from "../img/footer.png";
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fLogo from '../img/logo/neonWhiteHalf.png'
import { Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';


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
    const history = useHistory();
    return (
        <main style={{ backgroundColor: "#1e2633" ,color:"white"}}>
        
            <Box  padding={1} marginLeft={5}>
            <Grid container spacing={6}>
            <Grid item xs={12} sm={3} md={3} lg={3} className={classes.textL}>
          <Paper className={classes.logoText} style={{ backgroundColor: "#1e2633",color:"white"} }
          elevation={0}>
          <Link onClick={()=>{history.push("/")}}>
          <img
                
                src={fLogo}
                alt="logo"
                // className={classes.flogo}
                className={classes.Img}
              />
              </Link>
              <br></br>
              <Typography variant="caption">Copyright WikiSecurity Academy 2021</Typography>
              <Typography variant="caption">2A/7 WikiSec Technilogies,Pakistan</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{  backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
              <Typography variant="h5" className={classes.textLA}>Learn</Typography>
              
              <Link to="/" className={classes.textLAS}>Home</Link>
              <br></br>
              
              <Link to="/leaderboard" className={classes.textLAS}>Leaderboard</Link>
              <br></br>
              <Link to="/hacktivities" className={classes.textLAS}>Hacktivites</Link>
              <br></br>
             
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{ backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
            <Typography variant="h5" className={classes.textLA}>Docs</Typography>
              
              <Link to="/#about" className={classes.textLAS}>About Us</Link>
              <br></br>
              <Link to="/blog" className={classes.textLAS}>Blog</Link>
              <br></br>
              <Link to="/faq" className={classes.textLAS}>FAQ</Link>
              <br></br>
              
              
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Paper style={{ backgroundColor: "#1e2633",color:"white"}}
          elevation={0}>
            <Typography variant="h5" className={classes.textLA}>Social</Typography>
              
              <a target="blank" href="https://www.twitter.com/wikisecurityacademy" className={classes.textLAS}>Twitter</a>
              <br></br>
              <a target="blank" href="https://www.instagram.com/wikisecurityacademy" className={classes.textLAS}>Instagram</a>
              <br></br>
              <a target="blank" href="https://www.discord.com/wikisecurityacademy" className={classes.textLAS}>Discord</a>
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
