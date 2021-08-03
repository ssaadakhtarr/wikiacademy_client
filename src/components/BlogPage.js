import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect } from "react";
import renderHTML from "react-render-html";
import { useParams } from "react-router-dom";
import BlogPageNav from "../modules/Blog/BlogPageNav";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import routes from "../GetRoute.js";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


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
    axios.post(`${routes}/getBlogPage`,{ 
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
    return (<div
      style={{
        backgroundColor: "#141d2b",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <Box
        style={{
          backgroundColor: "#141d2b",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PuffLoader
          color={"#9fef00"}
          loading={true}
          css={override}
          size={100}
        />
      </Box>
    </div>);
  }
  if ((mounted && blogPage !== undefined)) {
  
    return (
      <div style={{backgroundColor: "#141d2b", color: "white"}}>
        <BlogPageNav />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        <div style={{ textAlign: "center" }}>
          
  
          <Typography variant="h2">{blogPage !== undefined ? blogPage[0].blogTitle : "loading..."}</Typography>
        </div>
  
        {blogPage !== undefined ? <Box
          margin={2}
          style={{
            backgroundImage:
              `url(${blogPage[0].blogImg})`,
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        ></Box> : "loading..."}
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
              {blogPage !== undefined ? <Box style={{backgroundColor: "#141d2b", padding:"0 2%", fontSize: "1.2rem"}}>
                
                {renderHTML(blogPage[0].blogMaterial)}
              </Box> : "loading..."}
              <br></br>
              <br></br>
              
              <Box
                padding={2}
                style={{ border: "1px solid #9fef00", borderRadius: "25px", padding: "0 2%"}}
              >
                <Grid container spacing={0}>
                  <Grid  item xs={6} md={10}>
                      {blogPage !== undefined ? <Box style={{padding: "2%"}} >
                      <Typography variant="h6">{blogPage[0].username}</Typography>
                    <Typography style={{ color: "grey" }} variant="body2">
                    {blogPage[0].summary}
                    </Typography>
                      </Box> : "loading..."}
                    
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box style={{ textAlign: "right" }}>
                      <br></br>
                      {blogPage !== undefined ? <StyledButton href={'/p/'+blogPage[0].username}>Profile</StyledButton> : "loading..."}
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
