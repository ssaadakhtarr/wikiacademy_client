import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/styles";
import Axios from "axios";
import routes from "../GetRoute.js";
import { useHistory } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ProfileButton = withStyles({
  root: {
    fontWeight: "bold",
    backgroundColor: "#9fef00",
    color: "#161e2d",
    "&:hover": {
      backgroundColor: "#161e2d",
      color: "#9fef00",
    },
  },
})(Button);

function OtherProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const id = user.id;
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setShowError(false);
    setOpen(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const deleteAccount = () => {
    Axios.post(`${routes}/deleteAccount`, {
      id: id,
      password: password,
    }).then((response) => {
      if (response.data.message === "success") {
        console.log("upper")
        setShowError(false);
        history.push("/signin")
      } else {
        console.log("lower")
        setShowError(true);
      }
    })
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{textAlign: "center"}} id="alert-dialog-title">{"Confirm Password"}</DialogTitle>
        <DialogContent  >
          <DialogContentText id="alert-dialog-description">
          {/* {showError && (
              <Alert severity="error">Invalid Username/Password!</Alert>
            )} */}
            <br></br>
            <TextField defaultValue="" type="password" onChange={handlePassword} size="small" variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent: "center"}} >
          <ProfileButton onClick={handleClose} color="primary">
            Cancel
          </ProfileButton>
          <ProfileButton onClick={deleteAccount} color="primary" autoFocus>
            Delete My account
          </ProfileButton>
        </DialogActions>
      </Dialog>
      <Box  padding={5} style={{color: "#fff", backgroundColor: "#1a2332", maxWidth: "1400px", }}>
        <Typography style={{color: "white",}} variant="h5"><DeleteForeverIcon style={{color: "white", fontSize: "30px", float: "left",}}/>Delete your account</Typography>
        
<br></br>
        <Typography style={{ color: "#dc3545" }} variant="subtitle2">
        <WarningIcon style={{fontSize: "20px", float: "left" }} />
          Warning: If you delete your account you will lose definitive access to
          it with no way of recovery. Your personal data and progress will be
          erased and lost as well as any ongoing subscription.
        </Typography>
        <br></br>

        <Button
        onClick={handleClickOpen}
          style={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#dc3545",
            color: "#fff",
          }}
          variant="contained"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete My Account
        </Button>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  );
}

export default OtherProfile;
