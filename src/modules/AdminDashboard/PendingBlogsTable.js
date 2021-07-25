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
import { useHistory } from "react-router-dom";
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

const ApproveButton = withStyles({
  root: {
    fontWeight: "bold",
    textTransform: "none",
    backgroundColor: "transparent",
    color: "#22f52b",
    border: "1px solid #22f52b",
    "&:hover": {
      backgroundColor: "#22f52b",
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

function PendingBlogsTable({ pendingBlogs }) {
  console.log(pendingBlogs.length);
  const history = useHistory();
  const [data, setData] = React.useState([
    ["1", "ssaadakhtarr"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
    ["2", "asadakhtar"],
  ]);
  const [open, setOpen] = React.useState(false);
  const [blogId, setBlogId] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const discardBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.post("http://localhost:3001/discardBlog", {
          id: id,
        }).then((response) => {
          console.log(response.data);
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
          (res) => {
            window.location.reload(false);
          }
        );
      }
    });
  };
  const approveBlog = (id) => {
    Axios.post("http://localhost:3001/approveBlog", {
      id: id,
    }).then((response) => {
      console.log(response.data);
    });
    Swal.fire("Approved!", "This blog has been approved!", "success").then(
      (res) => {
        window.location.reload(false);
      }
    );
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
              Blog Title
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Details
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Approval
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      {pendingBlogs.length === 0 && (
        <div>
          <br></br>
          <Typography
            variant="h4"
            style={{ color: "#9fef00", fontWeight: "bold" }}
          >
            There are no pending blogs!
          </Typography>
        </div>
      )}
      {pendingBlogs.map((current) => {
        return (
          <div>
            <br></br>
            <Box style={{ backgroundColor: "rgb(0,0,0,0.1)", color: "white" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography style={{ marginTop: "2%" }}>
                    {current.blogId}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    style={{
                      marginTop: "2%",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      color: "#9fef00",
                    }}
                  >
                    {current.blogTitle}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    <EditButton
                      onClick={() => {
                        history.push(`/blogs/${current.blogId}`);
                      }}
                    >
                      View
                    </EditButton>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    <DeleteButton
                    style={{marginRight: "2%"}}
                      onClick={() => {
                        discardBlog(current.blogId);
                      }}
                    >
                      Discard
                    </DeleteButton>
                    <ApproveButton
                    style={{marginLeft: "2%"}}
                      onClick={() => {
                        approveBlog(current.blogId);
                      }}
                    >
                      Approve
                    </ApproveButton>
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

export default PendingBlogsTable;
