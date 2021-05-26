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
import React from "react";
import {useStateValue} from "../StateProvider";
import Axios from "axios";





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

function GeneralProfile() {
  const [{User}, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem('user'));
  const fullName = user.firstName + " " + user.lastName;
  const [name, setName] = React.useState(fullName);
  const [username, setUsername] = React.useState(user.username);
  const [email, setEmail] = React.useState(user.email);
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const id = user.id;

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  }

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  }

  const updateDetails = () => {
    Axios.post("http://localhost:3001/updateDetails", {
      id: id,
      name: name,
      username: username,
      email: email,
    }).then((response) => {
      console.log(response);
    })
  }

  const changePassword = () => {
    Axios.post("http://localhost:3001/changePassword", {
      id: id,
      currentPassword: currentPassword,
      newPassword: newPassword,
    }).then((response) => {
      console.log(response);
    })
  }
  
  const classes = useStyles();
  return (
    <div style={{padding: "0", backgroundColor: "#141d2b", justifyContent: "center"}}>
      
        <Box padding={5} style={{color: "#fff", backgroundColor: "#1a2332",  maxWidth: "1400px",}} >
        <Typography variant="h5">Update Details</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Change your details
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="body">Full Name</Typography>
        <TextField InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }} onChange={handleName} defaultValue={name} size="small" fullWidth variant="outlined" />
        <br></br>
        <br></br>
        <Typography variant="body">Username</Typography>
        <TextField InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }} onChange={handleUsername} defaultValue={username} size="small" fullWidth variant="outlined" />
        <br></br>
        <br></br>
        <Typography variant="body">Email</Typography>
        <TextField InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }} onChange={handleEmail} defaultValue={email} size="small" fullWidth variant="outlined" />
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
      <Box   padding={5} style={{maxWidth: "1400px",color: "#fff", backgroundColor: "#1a2332", }} >
        <Typography variant="h5">Change Password</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Change your password and choose a strong combination
        </Typography>

        <br></br>
        <br></br>
        <Typography variant="body">Current Password</Typography>
        <TextField InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }} onChange={handleCurrentPassword} size="small" type="password" fullWidth variant="outlined" />
        <br></br>
        <br></br>
        <Typography variant="body">New Password</Typography>
        <TextField InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#141d2b",
                },
              }}
              InputLabelProps={{
                style: {fontWeight: "bold",
                letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "uppercase"},
              }} onChange={handleNewPassword} size="small" type="password" fullWidth variant="outlined" />
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
