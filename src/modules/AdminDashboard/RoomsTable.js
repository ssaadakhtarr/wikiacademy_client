import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import routes from "../../GetRoute.js";
import Swal from "sweetalert2";

const JoinButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const LoginButton = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1e2633",
    },
  },
})(Button);

const EditButton = withStyles({
  root: {
    fontWeight: "bold",
    textTransform: "none",
    backgroundColor: "transparent",
    color: "#4e60ee",
    border: "1px solid #4e60ee",
    "&:hover": {
      backgroundColor: "#4e60ee",
      color: "#1e2633",
    },
  },
})(Button);

const DeleteButton = withStyles({
  root: {
    fontWeight: "bold",
    textTransform: "none",
    backgroundColor: "transparent",
    color: "#d93237",
    border: "1px solid #d93237",
    "&:hover": {
      backgroundColor: "#d93237",
      color: "#1e2633",
    },
  },
})(Button);

function RoomsTable(roomData) {
  console.log(roomData.roomData);
  const [data, setData] = React.useState([
    ["1", "nmap"],
    ["2", "hydra"],
    ["2", "linux"],
    ["2", "owasp top 10"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
  ]);
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteRoom = (index) => {
    setTemp(roomData.roomData[index].roomsId)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(roomData.roomData[index].roomsId)
        Axios.post(`${routes}/deleteRoom`, {
          roomId: roomData.roomData[index].roomsId,
        }).then((response) => {
          console.log(response.data);
          window.location.reload(false);
        })


        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };
  return (
    <div>
      <Box style={{ backgroundColor: "rgb(255,255,255,0.1)", color: "white" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              ID
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Room Name
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Room Title
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Delete
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      {roomData.roomData.map((current, index) => {
        return (
          <div>
            <br></br>
            <Box style={{ backgroundColor: "rgb(0,0,0,0.1)", color: "white" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography style={{ marginTop: "2%" }}>
                    {current.roomsId}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <a
                    style={{ color: "#9fef00" }}
                    href={"/room/" + current.roomName}
                  >
                    <Typography
                      style={{
                        marginTop: "2%",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    >
                      {current.roomName}
                    </Typography>
                  </a>
                </Grid>

                <Grid item xs={3}>
                
                   
                    <Typography
                      style={{
                        marginTop: "2%",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    >
                      {current.roomTitle}
                    </Typography>
                  
                </Grid>

                <Grid item xs={3}>
                  <Typography>
                    <DeleteButton
                      onClick={() => {
                        // setTemp(current.roomId);
                        deleteRoom(index);
                      }}
                    >
                      Delete
                    </DeleteButton>
                    {/* <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are you sure?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          {
                            " By proceeding the room will be permanently deleted!"
                          }
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <JoinButton
                          style={{ backgroundColor: "#9fef00", color: "black" }}
                          onClick={handleClose}
                          color="primary"
                        >
                          Cancel
                        </JoinButton>
                        <DeleteButton
                         
                          style={{ backgroundColor: "#f54e4e", color: "black" }}
                          color="primary"
                          autoFocus
                        >
                          Delete
                        </DeleteButton>
                      </DialogActions>
                    </Dialog> */}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default RoomsTable;
