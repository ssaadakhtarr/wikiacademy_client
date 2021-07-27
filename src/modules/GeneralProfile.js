import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import Axios from "axios";
import Swal from "sweetalert2";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  box: {
    // minWidth: 1000,
    // [theme.breakpoints.up("md")]: {
    //   minWidth: 1000,
    // },
    // [theme.breakpoints.up("sm")]: {
    //   minWidth: 500,
    // },
  },
}));

const ProfileButton = withStyles({
  root: {
    letterSpacing: "1px",
    fontWeight: "bold",
    backgroundColor: "#9fef00",
    color: "#161e2d",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#161e2d",
    },
  },
})(Button);

function GeneralProfile(userData) {
  console.log(userData);
  const [{ User }, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem("user"));
  const fullName = userData.userData.firstName + " " + userData.userData.lastName;
  const [name, setName] = React.useState(fullName);
  const [username, setUsername] = React.useState(userData.userData.username);
  const [email, setEmail] = React.useState(userData.userData.email);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const id = user.id;

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



  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const updateDetails = () => {
    Axios.post("http://localhost:3001/updateDetails", {
      id: id,
      name: name,
      username: username,
      email: email,
    }).then((response) => {
      console.log(response);
      // if(response.data.message==="User already exists"){
      //   setShowSuccess(false)
      //   setShowError(true)
      //   Toast.fire({
      //     icon: "error",
      //     title: "Email/username already exists",
      //   });
    //  }else{
      if (response.data.status === "success") {
        
        setShowError(false)
        setShowSuccess(true)
        Toast.fire({
          icon: "success",
          title: "Your details have been updated",
        });
        window.location.reload();
      } else if (response.data.status === "email failure") {
        Toast.fire({
          icon: "error",
          title: "This email already exists",
        });
      } else if (response.data.status === "username failure") {
        Toast.fire({
          icon: "error",
          title: "This username already exists",
        });
      } else if (response.data.status === "both failure") {
        Toast.fire({
          icon: "error",
          title: "This username/email already exists",
        });
      }
        
      //}
    });
  };

  const changePassword = () => {
    Axios.post("http://localhost:3001/changePassword", {
      id: id,
      currentPassword: currentPassword,
      newPassword: newPassword,
    }).then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        
        Toast.fire({
          icon: "success",
          title: "Password changed successfully!",
        });
        
      } else if (response.data.status === "failure") {
        Toast.fire({
          icon: "error",
          title: "Wrong current password",
        });
      }
    });
  };

  const classes = useStyles();
  return (
    <div
      style={{
        padding: "0",
        backgroundColor: "#141d2b",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        padding={5}
        style={{
          color: "#fff",
          backgroundColor: "#1a2332",
          maxWidth: "1400px",
        }}
      >
        <Typography variant="h5">Update Details</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Change your details
        </Typography>
      
        <br></br>
        {/* {showSuccess && (
          <Alert severity="success">Changes saved!</Alert>
        )}
        {showError && (
          <Alert severity="error">Email/Username already exists!</Alert>
        )} */}
        <br></br>
        <br></br>
        <Typography variant="body">Full Name</Typography>
        <TextField
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
          onChange={handleName}
          defaultValue={name}
          size="small"
          fullWidth
          variant="outlined"
        />
        <br></br>
        <br></br>
        <Typography variant="body">Username</Typography>
        <TextField
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
          onChange={handleUsername}
          defaultValue={username}
          size="small"
          fullWidth
          variant="outlined"
        />
        <br></br>
        <br></br>
        <Typography variant="body">Email</Typography>
        <TextField
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
          onChange={handleEmail}
          defaultValue={email}
          size="small"
          fullWidth
          variant="outlined"
        />
        <br></br>
        <br></br>
        <ProfileButton
          onClick={updateDetails}
          fullWidth
          style={{ padding: "10px", textTransform: "none" }}
        >
          Save Changes
        </ProfileButton>
        
      </Box>

      <br></br>
      <br></br>
      <Box
        padding={5}
        style={{
          maxWidth: "1400px",
          color: "#fff",
          backgroundColor: "#1a2332",
        }}
      >
        <Typography variant="h5">Change Password</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Change your password and choose a strong combination
        </Typography>

        <br></br>
        <br></br>
        <Typography variant="body">Current Password</Typography>
        <TextField
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
          onChange={handleCurrentPassword}
          size="small"
          type="password"
          fullWidth
          variant="outlined"
        />
        <br></br>
        <br></br>
        <Typography variant="body">New Password</Typography>
        <TextField
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
          onChange={handleNewPassword}
          size="small"
          type="password"
          fullWidth
          variant="outlined"
        />
        <br></br>
        <br></br>
        <ProfileButton
          onClick={changePassword}
          fullWidth
          style={{ padding: "10px", textTransform: "none" }}
        >
          Change Password
        </ProfileButton>
      </Box>
    </div>
  );
}

export default GeneralProfile;
