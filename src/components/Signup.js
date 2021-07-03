import React, { useState, Component } from "react";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import Alert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core";
import logo from "../img/logo/neonWhite.png";
import Footer from "./Footer";
import { Formik, Form,ErrorMessage,Field } from "formik";
import * as Yup from "yup";
import { renderTextFieldEdit } from "./Textfield";

//Styles here
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const history = new useHistory();
  const classes = useStyles();

  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const nowEnable =
    firstNameReg.length > 0 &&
    lastNameReg.length > 0 &&
    usernameReg.length > 0 &&
    emailReg.length > 0 &&
    emailReg.match("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$") &&
    passwordReg.length > 0;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstName: firstNameReg,
      lastName: lastNameReg,
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message === "User already exists") {
        setShowSuccess(false);
        setShowError(true);
        return;
      } else if (response.data.message === "Success") {
        setShowSuccess(true);
        setShowError(false);
      }
    });
  };
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),
      userName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Email is Required"),
    password: Yup.string()
      .min(6,"Password must be atleast 6 characters")
      .required("Password is Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName:"",
        email: "",
        password: "",
      }}
      enableReinitialize={true}
      validationSchema={validate}
      onSubmit={register}
    >
      {({values}) => (
        <div>
        {console.log(values)}
          <Form>
            <main style={{ minHeight: "100%", backgroundColor: "#263143" }}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <Box
                    style={{
                      backgroundImage:
                        "url('https://wallpapercave.com/wp/wp2757874.gif')",
                      padding: "50% 5%",
                    }}
                  >
                    <a href="/">
                      <img
                        style={{ width: "100%", height: "20%" }}
                        src={logo}
                      />
                    </a>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <div className="registration">
                    <Box
                      style={{ backgroundColor: "#263143", padding: "15% 5%" }}
                      padding={4}
                    >
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
                        style={{ color: "white", fontWeight: "400" }}
                        component="h1"
                        align="center"
                        variant="h5"
                      >
                        Sign Up
                      </Typography>
                      <br></br>
                      {showSuccess && (
                        <Alert severity="success">
                          Registered Successfully!
                        </Alert>
                      )}
                      {showError && (
                        <Alert severity="error">
                          Email/Username already exists!
                        </Alert>
                      )}
                      <br></br>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                         
                          <Field
                            name="firstName"
                            label="FirstName"
                            component={renderTextFieldEdit}
                            // className={classes.colorChange}
                            
                          />{" "}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Field
                            name="lastName"
                            label="LastName"
                            component={renderTextFieldEdit}
                            // className={classes.colorChange}
                            
                          />
                        </Grid>
                      </Grid>
                      <br></br>
                      <Field
                            name="userName"
                            label="UserName"
                            component={renderTextFieldEdit}
                            // className={classes.colorChange}
                            
                          />{" "}
                      <br></br>
                      <br></br>
                      <Field
                            name="email"
                            label="Email"
                            component={renderTextFieldEdit}
                            // className={classes.colorChange}
                            
                          />{" "}
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
                        control={
                          <Checkbox value="allowExtraEmails" color="default" />
                        }
                        label="
                By registering you agree to our Terms and Conditions"
                      />
                      <Button
                      type="submit"
                        // disabled={!nowEnable}
                        style={{
                          fontWeight: "bold",
                          letterSpacing: "1.5px",
                          backgroundColor: "#9fef00",
                          color: "#1e2633",
                          marginTop: 10,
                        }}
                        fullWidth
                        variant="contained"
                        onClick={register}
                      >
                        Signup
                      </Button>
                      <br></br>
                      <br></br>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link
                            style={{ color: "#9fef00" }}
                            href="/signin"
                            variant="body2"
                          >
                            Already have an account? Sign in
                          </Link>
                          <br></br>
                          <br></br>
                          <br></br>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </Grid>
              </Grid>
              <Footer />
            </main>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
