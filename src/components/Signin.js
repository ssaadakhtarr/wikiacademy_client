import React, { useState, useEffect } from "react";
import Axios from "axios";
import routes from "../GetRoute.js";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Nav from "./Nav";

import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import logo from "../img/logo/neonWhite.png";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { renderTextFieldEdit } from "./Textfield";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

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
  },
}));

function Signin() {
  const [{ User }, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(User);
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
  const [initialState, setInitialState] = useState({
    username: "",
    password: "",
  });

  const nowEnable = username.length > 0 && password.length > 0;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const login = (values) => {
    Axios.post(`${routes}/login`, values).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
        if (
          response.data.message === "wrong username/password" ||
          response.data.message === "no user exists"
        ) {
          Toast.fire({
            icon: "error",
            title: "Invalid username/password",
          });
          setShowError(true);
          setShowSuccess(false);
        }
      } else {
      
        console.log(response.data.result[0].username);
        const sessionCookie = cookies.get("userId");
        const username = response.data.result[0].username;
        Axios.post(`${routes}/setSession`, {
          username: username,
          sessionCookie: sessionCookie,
        }).then((response)=>{console.log(response);})
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: "User_Details",
          data: {...response.data.result[0], session: sessionCookie},
        });

        setUserDetails(response.data.result);
        setLoginStatus(true);

        Axios.get(`${routes}/isUserAuth`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
          .then((response) => {
            if (response.data.auth) {
              
              setShowError(false);
              setShowSuccess(true);
              if (user && cookies.get("userId") == user.session) {
                history.push("/dashboard");
              }
              
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is Required"),
  });

  return (
    <Formik
      initialValues={initialState}
      enableReinitialize={true}
      validationSchema={validate}
      onSubmit={(values) => login(values)}
      //onClick={login}
    >
      {({ values }) => (
        <div>
          {console.log(values)}
          <Form>
            <main style={{ backgroundColor: "#141d2b", minHeight: "100vh" }}>
              {/* <Nav /> */}

              <Box style={{ paddingTop: "5%", textAlign: "center" }}>
                <Link to="/" onClick={()=>{
                            history.push("/")
                          }}>
                  <img className={classes.image} src={logo} />
                </Link>
              </Box>

              <Container spacing={2} component="main" maxWidth="sm">
                <CssBaseline />
                <div className="login">
                  <br></br>
                  <br></br>
                  <Box style={{ backgroundColor: "#1a2332" }} padding={6}>
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
                      style={{ color: "white", textTransform: "capitalize" }}
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
                    <Field
                      name="username"
                      label="UserName"
                      component={renderTextFieldEdit}
                      // className={classes.colorChange}
                    />
                    <br></br>
                    <br></br>
                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      component={renderTextFieldEdit}
                      // className={classes.colorChange}
                    />{" "}
                    <br></br>
                    <br></br>
                    <FormControlLabel
                      style={{ color: "white" }}
                      control={<Checkbox value="remember" color="default" />}
                      label="Keep me logged in"
                    />
                    {/* <br></br> */}
                    <br></br>
                    <Button
                      //disabled={!nowEnable}
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1.5px",
                        backgroundColor: "#9fef00",
                        color: "#1e2633",
                        marginTop: 10,
                      }}
                      fullWidth
                      variant="contained"
                      type="submit"
                      onClick={login}
                    >
                      Login
                    </Button>
                    <br></br>
                    <br></br>
                    <Grid container>
                      <Grid item xs>
                        {/* <Link
                          style={{ color: "#9fef00" }}
                          to="/password-reset"
                          onClick={()=>{
                            history.push("/password-reset")
                          }}
                          // variant="body2"
                        >
                          Forgot password?
                        </Link> */}
                      </Grid>
                      <Grid item>
                        <Link
                          style={{ color: "#9fef00" }}
                          to="/signup"
                          onClick={()=>{
                            history.push("/signup")
                          }}
                        >
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </Container>
              <Box padding={5}></Box>
            </main>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signin;
