import {
  Box,
  Button,
  Container,
  createMuiTheme,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Footer from "./Footer";
import React, { useEffect } from "react";
import Logo from "../img/logo/neonWhite.png";
import { FaBlog, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Cards from "../modules/Blog/Cards";
import { h } from "preact";
import { Cube } from "styled-loaders";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {useHistory} from 'react-router-dom'
import BlogCard from "../modules/Blog/BlogCard";
import axios from "axios";
import routes from "../GetRoute.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  box: {
    position: "relative",
    bottom: "80px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3em",
    },
  },
  logo: {
    width: "500px",
    height: "120px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "80px",
      
    },
  },
  blogLogo: {
    fontSize: "130px", color: "white", marginLeft: "2%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "80px",
      
    },
  },
  icons: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
      
    },
  },
  buttons: {
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      
    },
  },
}));

const StyledButton = withStyles({
  root: {
    margin: "0 2%",
    fontWeight: "bold",
    textTransform: "none",
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
  
})(Button);

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        color: "white",
        "&:hover": {
          color: "#9fef00",
        },
      },
    },
  },
  palette: {
    secondary: {
        main: '#9fef00'
    }
 }
});



function Blog() {
  const history = useHistory();
  const classes = useStyles();
  const [blogData, setBlogData] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return ;
        }
        const diff = Math.random() * 50;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    axios.get(`${routes}/getBlogs`).then((response)=> {
    console.log(response.data);
    if (response.data != undefined) {
      console.log("mounted");
      setMounted(true);
      setBlogData(response.data);
      console.log(response.data[0].blogTitle)
    }
    
    })
    }, []);

    // if (!mounted) {
    //   return <div>Loading...</div>;
    // }
  return (
    
    <div style={{backgroundColor: "#141d2b"}}>
      {(loading) && (<MuiThemeProvider theme={theme}>
            <LinearProgress style={{backgroundColor: "#1a2332",}} color="secondary" value={progress} variant="determinate"/> 
          </MuiThemeProvider>)}
      <Box
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)", textAlign: "center", backgroundColor: "#212c42" }}
        padding={4}
      >
        <img className={classes.logo}  src={Logo} />
        <FaBlog className={classes.blogLogo} />
      </Box>
      <Box style={{ backgroundColor: "#212c42" }} padding={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.buttons} >
              <StyledButton onClick={()=>{history.push("/blog")}}>Home</StyledButton>
              <StyledButton onClick={()=>{history.push("/")}}>WikiSecurity</StyledButton>
            </Box> 
          </Grid>
          <Grid item xs={0} sm={4}></Grid>
          <Grid item xs={0} sm={4}>
            <Box className={classes.icons} style={{ textAlign: "right"}}>
              <IconButton target="blank" href="https://www.twitter.com/wikisecurityacademy" style={{ margin: "0 1%", color: "white", }}>
                <FaTwitter />
              </IconButton>
              <IconButton target="blank" href="https://www.discord.com/wikisecurityacademy"  style={{ margin: "0 1%" , color: "white",}}>
                <FaDiscord style={{}} />
              </IconButton>
              <IconButton target="blank" href="https://www.instagram.com/wikisecurityacademy"  style={{ margin: "0 1%" , color: "white",}}>
                <FaInstagram style={{}} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      
      {/* <Box padding={10} style={{margin: "0 150px", backgroundColor: "black",}}></Box> */}
      <Box style={{padding: "0 1%"}}>
      {/* {(mounted && blogData != undefined) && (<BlogCard blogTitle={blogData[0].blogTitle} blogDesc={blogData[0].blogDesc} blogImg={blogData[0].blogImg} username={blogData[0].username} />)} */}
      <Grid container spacing={1}>
      {blogData !== undefined && blogData.length > 0 ? blogData?.map((i) => {
        return (
      
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <BlogCard blogTitle={i.blogTitle} blogDesc={i.blogDesc} blogImg={i.blogImg} username={i.username} url={"/blogs/"+i.blogId} />
            </Grid>
          
          )
      }): "loading..."}
      </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <BlogCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <BlogCard/>
          </Grid>
        </Grid> */}
      </Box>

      <Fab
      onClick={() => {
        history.push("/add-blog")
      }}
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
          backgroundColor: "#9fef00",
          color: "#141d2b",
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
    
      </Fab>
      <br></br>
    <Footer />
    </div>

  );
}

export default Blog;
