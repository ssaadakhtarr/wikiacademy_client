import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useHistory  } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';
import routes from "../../GetRoute.js";


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


function DeleteBlogsTable(blogData) {
  console.log(blogData);
  const history = useHistory();
  const [data, setData] = React.useState([['1', 'ssaadakhtarr'], ['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar'],['2', 'asadakhtar']]);
  const [open, setOpen] = React.useState(false);
  const [blogId, setBlogId] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const discardBlog = (id) => {
    Axios.post(`${routes}/discardBlog`, {
      id: id,
    }).then((response) => {
      console.log(response.data);

    })
    window.location.reload(false);
  }
  return (
    <div>
    <Box style={{backgroundColor: "rgb(255,255,255,0.1)", color: "white"}}>
      <Grid container spacing={2}>
        <Grid item xs={3}><Typography variant="h6" style={{fontWeight: "bold"}}>ID</Typography></Grid>
        <Grid item xs={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Blog Name</Typography></Grid>
        <Grid item xs={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Details</Typography></Grid>
       
        <Grid item xs={3}><Typography variant="h6" style={{fontWeight: "bold"}}>Delete</Typography></Grid>
      </Grid>
    </Box>
    <br></br>
    {blogData.blogData.map((current) => {
      return(
        <div>
          <br></br>
        <Box style={{backgroundColor: "rgb(0,0,0,0.1)", color: "white"}}>
        <Grid container spacing={2}>
        <Grid item xs={3}><Typography style={{marginTop: "2%"}}>{current.blogId}</Typography></Grid>
        <Grid item xs={3}><Typography style={{color: "#9fef00", marginTop: "2%",fontWeight: "bold", letterSpacing: "1px",}}>{current.blogTitle}</Typography></Grid>
        <Grid item xs={3}><Typography><EditButton onClick={()=>{
          history.push(`/blogs/${current.blogId}`)
        }}>View</EditButton></Typography></Grid>
        <Grid item xs={3}><Typography><DeleteButton onClick={ ()=>{
          
          discardBlog(current.blogId);
        }}>Delete</DeleteButton>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {" By proceeding the blog will be permanently deleted!"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <JoinButton style={{backgroundColor: "#9fef00", color: "black"}} onClick={handleClose} color="primary">
            Cancel
          </JoinButton>
          <DeleteButton style={{backgroundColor: "#f54e4e", color: "black"}} color="primary" autoFocus>
            Delete
          </DeleteButton>
        </DialogActions>
      </Dialog>
      </Typography></Grid>
      </Grid>
      </Box>
       <br></br>
       
       </div>
      )
      
    })}
    </div>
  );
}

export default DeleteBlogsTable;
