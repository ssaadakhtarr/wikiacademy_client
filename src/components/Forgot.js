import React from "react";
import Nav from "./Nav";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, CssBaseline, Grid } from "@material-ui/core";
import logo from "../img/logo/neonWhite.png";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  email: {
    color: "white",
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#9fef00",
    color: "#1e2633",
  },
  background: {
    backgroundColor: "#263143",
  },
  backgrounds: {
    backgroundColor: "#9fef00",
    color: "black",
    marginTop: 10,
    "&:hover": {
      backgroundColor: "#9fef00",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    width: "30%",
    height: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      height: "50%",
    },
  },
}));

function Forgot() {
  const classes = useStyles();
  return (
    <div>
      <Box style={{ paddingBottom: "10%", backgroundColor: "#141d2b" }}>
        <Box style={{ paddingTop: "5%", textAlign: "center" }}>
          <a href="/">
            <img className={classes.image} src={logo} />
          </a>
        </Box>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <br></br>
          <br></br>
          <Box
            style={{ textAlign: "center", backgroundColor: "#1a2332" }}
            padding={4}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </div>
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "white" }}
              >
                Forgot Password
              </Typography>
              <br></br>
              <TextField
                InputProps={{
                  className: classes.email,
                }}
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color="primary"
                autoFocus
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#141d2b",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: "bold",
                    letterSpacing: "1.5px",
                    color: "#9fef00",
                    fontSize: "12px",
                    textTransform: "uppercase",
                  },
                }}
              />
              <br></br>
              <br></br>
              <Button
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1.5px",
                  color: "black",
                  marginTop: 10,
                }}
                fullWidth
                variant="contained"
                className={classes.backgrounds}
              >
                Send Password Reset Link
              </Button>
              <br></br>
              <br></br>

              <a
                style={{ textDecoration: "none", color: "#9fef00" }}
                href="/signin"
              >
                {"Remembered your password? Login Here"}
              </a>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Forgot;
