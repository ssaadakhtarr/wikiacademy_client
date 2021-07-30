import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Nav from "./Nav";
import routes from "../GetRoute.js";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import {useStateValue} from "../StateProvider";
import logo from "../img/logo/neonWhite.png";
import Cookies from "universal-cookie";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(0),
    },
    logo: {
      width: 10,
      height: 5,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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
  }
}));

function AdminLogin() {

  const [{Admin}, dispatch] = useStateValue();
 
  const cookies = new Cookies();
  const history = useHistory();
  const classes = useStyles();

  Axios.defaults.withCredentials = true;

  const [userDetails, setUserDetails] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const [showStatus, setShowStatus] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const nowEnable = username.length > 0 && password.length > 0;

  const login = () => {
    console.log(username, password)
    Axios.post(`${routes}/adminLogin`, {
      username,
      password,
    }).then((response) => {

        if (
          response.data.status === "fail"
        ) {
          setShowError(true);
          setShowSuccess(false);
        }
       else {
        const sessionCookie = cookies.get("userId");
        const username = response.data.result[0].username;
        console.log(response.data.result)
        
        Axios.post(`${routes}/setAdminSession`, {
          username: username,
          sessionCookie: sessionCookie,
        }).then((response)=>{
          console.log(response);
          // if (response.data !== undefined) {
          //   localStorage.setItem("admin", JSON.stringify(response.data[0]))
          // }
        

        })
        dispatch({
          type: "Admin_Details",
          data: {...response.data[0], session: sessionCookie},
        });
        history.push('/admin-dashboard')
        
        
        setUserDetails(response.data.result);
        setLoginStatus(true);

        // Axios.get("http://localhost:3001/isUserAuth", {
        //   headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        // })
        //   .then((response) => {
        //     if (response.data.auth) {
        //       setShowError(false);
        //       setShowSuccess(true);
        //       history.push("/dashboard");
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      }
    });
  };

  useEffect(() => {
    Axios.get(`${routes}/login`).then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    });
  }, []);

  return (
    <main style={{ backgroundColor: "#141d2b" }}>
      {/* <Nav /> */}
     
      <Box style={{paddingTop: "5%", textAlign: "center",}}>
      <a href="/" ><img className={classes.image}  src={logo}/></a>
      </Box>
    
      
      <Container spacing={2} component="main" maxWidth="sm">
        <CssBaseline />
        <div className="login">
          <br></br>
          <br></br>
          <Box style={{ backgroundColor: "#1a2332" }} padding={6}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
         
          <Avatar className={classes.avatar} >
              <LockOutlinedIcon />
            </Avatar>
          </div>
            
            <Typography
              style={{ color: "white" , textTransform: "capitalize",}}
              component="h1"
              align="center"
              variant="h4"
            >
              Sign in
            </Typography>
            <br></br>
            {/* {showSuccess && (
              <Alert severity="success">Signed in Successfully!</Alert>
            )}
            {showError && (
              <Alert severity="error">Invalid Username/Password!</Alert>
            )} */}
            <br></br>
            <TextField
              required
              fullWidth
              className={classes.textField}
              id="outlined-basic"
              label="Username"
              variant="filled"
              InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00",fontSize: "12px", textTransform: "uppercase" },
              }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              type="password"
              required
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="filled"
              InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />{" "}
            <br></br>
            <br></br>
            {/* <FormControlLabel
              style={{ color: "white" }}
              control={<Checkbox value="remember" color="default" />}
              label="Remember me"
              
            /> */}
            {/* <br></br> */}
            <br></br>
            <Button
              disabled={!nowEnable}
              style={{
                fontWeight: "bold",
                  letterSpacing: "1.5px",
                backgroundColor: "#9fef00",
                color: "#1e2633",
                marginTop: 10,
              }}
              fullWidth
              variant="contained"
              onClick={login}
            >
              Login
            </Button>
            <br></br>
            <br></br>
            {/* <Grid container>
              <Grid item xs>
                <Link
                  style={{ color: "#9fef00" }}
                  href="/password-reset"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  style={{ color: "#9fef00" }}
                  href="/signup"
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </div>
      </Container>
      <Box padding={5}></Box>
    </main>
  );
}

export default AdminLogin;
