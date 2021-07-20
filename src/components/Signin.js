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

import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import logo from "../img/logo/neonWhite.png";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { renderTextFieldEdit } from "./Textfield";

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
  console.log(User);

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

  const login = (values) => {
    Axios.post("http://localhost:3001/login", values).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
        if (
          response.data.message === "wrong username/password" ||
          response.data.message === "no user exists"
        ) {
          setShowError(true);
          setShowSuccess(false);
        }
      } else {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: "User_Details",
          data: response.data.result[0],
        });

        setUserDetails(response.data.result);
        setLoginStatus(true);

        Axios.get("http://localhost:3001/isUserAuth", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
          .then((response) => {
            if (response.data.auth) {
              setShowError(false);
              setShowSuccess(true);
              history.push("/dashboard");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
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
            <main style={{ backgroundColor: "#141d2b" }}>
              {/* <Nav /> */}

              <Box style={{ paddingTop: "5%", textAlign: "center" }}>
                <a href="/">
                  <img className={classes.image} src={logo} />
                </a>
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
                      variant="h5"
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
