import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Footer from "./Footer";
import React from "react";
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




function Blog() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div style={{backgroundColor: "#141d2b"}}>
      <Box
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)", textAlign: "center", backgroundColor: "#212c42" }}
        padding={4}
      >
        <img style={{ width: "500px" }} src={Logo} />
        <FaBlog style={{fontSize: "130px", color: "white", marginLeft: "2%",}}/>
      </Box>
      <Box style={{ backgroundColor: "#212c42" }} padding={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box style={{ textAlign: "left" }}>
              <StyledButton>Home</StyledButton>
              <StyledButton>WikiSecurity</StyledButton>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Box style={{ textAlign: "right" }}>
              <IconButton style={{ margin: "0 1%" }}>
                <FaTwitter />
              </IconButton>
              <IconButton style={{ margin: "0 1%" }}>
                <FaDiscord style={{}} />
              </IconButton>
              <IconButton style={{ margin: "0 1%" }}>
                <FaInstagram style={{}} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      
      {/* <Box padding={10} style={{margin: "0 150px", backgroundColor: "black",}}></Box> */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
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
          <Grid item xs={12} sm={12} md={6}>
          <BlogCard/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <BlogCard/>
          </Grid>
        </Grid>
      </Container>

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
