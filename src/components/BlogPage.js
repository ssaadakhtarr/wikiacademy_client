import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import BlogPageNav from "../modules/Blog/BlogPageNav";
import Footer from "./Footer";

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
  return (
    <div style={{backgroundColor: "#141d2b", color: "white"}}>
      <BlogPageNav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <div style={{ textAlign: "center" }}>
        <Typography style={{color: "#9fef00"}} variant="body2">7 MAY 2021</Typography>

        <Typography variant="h2">Cyber Security Training</Typography>
      </div>

      <Box
        margin={2}
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/3413086.jpg')",
          backgroundPosition: "center",
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
              <Typography variant="body1">
                Certifications seem to be on everyone's mind nowadays, but why
                is that the case? After all, it's just some fancy piece of
                paper, right? As it turns out, certifications, while sometimes
                controversial, can play a massive role in your cyber security
                career. Throughout this blog post, we'll explore the ins and
                outs of certifications and what exactly they mean.
              </Typography>
              <br></br>
              <br></br>
              <Typography variant="h4">
                Chapters Getting your First Certification When to Get a
                Certification Career Path Specific Certifications Reasons for
                Certifications: Education and Career Advancement How TryHackMe
                can Help
              </Typography>
              <br></br>
              <br></br>

              <Typography variant="body1">
                For many, certifications can be the doorway into a career in
                cyber security. Be it in the form of sequential training or
                landing your next role, certifications and their respective
                courses can match up with your experiences, proving to employers
                that you really know your stuff. While this can vary a bit,
                let's dive into the employer perspective to better understand
                what we're getting into.
              </Typography>
              <br></br>
              <br></br>
              <Typography variant="h4">
                Getting your First Certification
              </Typography>
              <br></br>
              <br></br>
              <Typography variant="body1">
                Have you ever looked at a cyber security job post and thought,
                wait, that's a ton of experience and requirements for even just
                an entry level job and I'm not even sure where to start? If so,
                first, you should absolutely check out the previous blog post in
                this series on getting into cyber security. You can find that
                post here! Secondly, the information provided here is incredibly
                valuable. Jumping between positions can be tricky at it's best
                and downright confusing otherwise. However, job posts can often
                provide many of the answers required in order to make this leap.
                Often provided at the top of job listings, certifications,
                coupled with years of experience, can be found center stage. HR
                departments, those actually handling the hiring for companies,
                will work hand-in-hand with department managers to map out
                different certifications that they desire within their team.
                More than not, multiple similar certifications will be listed,
                creating a rather daunting list. Employers will often list
                multiple to allow variance within applicants, allowing us as job
                seekers to start plotting out our own training. While this may
                vary from employer to employer depending on the certifications
                they actually want, leveraging job postings in this manner can
                be incredibly affective in growing into the roles and goals
                you've set for yourself.
              </Typography>
              <br></br>
              <br></br>

              <Typography variant="h4">
                The Two Major Reasons for Certifications: Education and Career
                Advancement
              </Typography>
              <br></br>
              <br></br>
              <Typography variant="body1">
                Let's take a step back now and refocus on how to know better
                what certifications to ultimately get. While I've alluded to
                this at points throughout this post, there are a few general
                rules of thumb for what certifications are ultimately going to
                be the most bang for you own buck. First, consider why you're
                seeking a certification. Let's delve into the two major reasons
                for certs: education and career advancement. Getting a cert for
                the sake of learning? Awesome! Beyond just the quality of the
                content taught in the coursework, there isn't a lot to consider
                here. Generally speaking, while cost is a major factor, the
                biggest item you'll want to consider is the experiences others
                have had with whatever course you're pursuing. This is where
                asking around can provide some great insight and provide the
                determining information on if a cert is worth it in your use
                case.
              </Typography>
              <br></br>
              <br></br>
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
                    <Typography variant="h6">ssaadakhtarr</Typography>
                  <Typography style={{ color: "grey" }} variant="body2">
                    Pentester and TryHackMe Administrator | Creator of the Red
                    and Blue primer series, Blue, Ignite, and several other
                    rooms.
                  </Typography>
                    </Box>
                  
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box style={{ textAlign: "right" }}>
                    <br></br>
                    <StyledButton>Profile</StyledButton>
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

export default BlogPage;
