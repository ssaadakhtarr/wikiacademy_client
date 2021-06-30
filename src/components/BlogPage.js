import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect } from "react";
import renderHTML from "react-render-html";
import { useParams } from "react-router-dom";
import BlogPageNav from "../modules/Blog/BlogPageNav";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

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

function BlogPage() {
  const history=useHistory();
  const {blogid}=useParams();
  const [mounted, setMounted] = React.useState(false);
  const [blogPage, setBlogPage] = React.useState();

  useEffect(() => {
    axios.post("http://localhost:3001/getBlogPage",{ 
      blogid:blogid,
    }).then((response)=>{
      console.log(response.data)
      if (response.data != undefined) {
        console.log("mounted");
       
        setBlogPage(response.data);
        setMounted(true);
            }
    })
  }, [])
  if (!mounted) {
    return <div>Loading...</div>;
  }
  if ((mounted && blogPage != undefined)) {
    console.log(blogPage);
    return (
      <div style={{backgroundColor: "#141d2b", color: "white"}}>
        <BlogPageNav />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        <div style={{ textAlign: "center" }}>
          
  
          <Typography variant="h2">{blogPage[0].blogTitle}</Typography>
        </div>
  
        <Box
          margin={2}
          style={{
            backgroundImage:
              `url(${blogPage[0].blogImg})`,
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        ></Box>
        <br></br>
        <br></br>
        <br></br>
        <Box
          style={{
              backgroundColor: "#141d2b",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={0} sm={1} md={1} lg={2}></Grid>
            <Grid item xs={12} sm={10} md={10} lg={8}>
              <Box style={{backgroundColor: "#141d2b", padding:"0 2%"}}>
                {renderHTML(blogPage[0].blogMaterial)}
              </Box>
              <br></br>
              <br></br>
              
              <Box
                padding={2}
                style={{ border: "1px solid #9fef00", borderRadius: "25px", padding: "0 2%"}}
              >
                <Grid container spacing={0}>
                  <Grid  item xs={6} md={10}>
                      <Box style={{padding: "2%"}} >
                      <Typography variant="h6">{blogPage[0].username}</Typography>
                    <Typography style={{ color: "grey" }} variant="body2">
                    {blogPage[0].summary}
                    </Typography>
                      </Box>
                    
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box style={{ textAlign: "right" }}>
                      <br></br>
                      <StyledButton href={'/p/'+blogPage[0].username}>Profile</StyledButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={1} lg={2}></Grid>
          </Grid>
        </Box>
        <br></br>
        <Footer />
      </div>
    );
  }
 
}

export default BlogPage;
