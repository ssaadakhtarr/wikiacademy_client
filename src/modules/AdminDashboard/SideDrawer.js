import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {CgProfile} from 'react-icons/cg';
import {MdDashboard} from 'react-icons/md';
import {AiOutlineUserDelete} from 'react-icons/ai';
import {AiOutlineUserSwitch} from 'react-icons/ai';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {RiChatDeleteLine} from 'react-icons/ri';
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import {Link, useHistory} from "react-router-dom";




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


function SideDrawer() {
    const classes = useStyles();
    const history = useHistory();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    style={{backgroundColor: "rgb(17, 25, 39)", color: "white", minHeight: "100vh", height: "100vh",}}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <br></br>
       <div style={{textAlign: "center"}}><CgProfile style={{color: "#9fef00",  fontSize: "80px"}}/></div>
      <Typography style={{textAlign: "center"}} variant="h6">Admin</Typography>
      <br></br>
      <Divider />

      <br></br>

      <List>
        {/* {['Dashboard', 'Add User', 'Update User', 'Add Room', 'Update Room', 'Pending Blogs', 'Delete Blogs'].map((text, index) => (
          <ListItem  button key={text}>
            
            {(text === 'Dashboard') && (<ListItemIcon></ListItemIcon>)}
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            {/* <ListItemText primary={text} />
          </ListItem> */}
        
        <ListItem button key="Dashboard">
          <Button onClick={()=>{history.push("/admin-dashboard")}} style={{textDecoration: "none", display: "flex", color: "white",}} >
            <ListItemIcon><MdDashboard style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Dashboard" />
          </Button>
        </ListItem>
       
        <ListItem button key="Update User">
          <Button onClick={()=>{history.push("/update-user")}} style={{textDecoration: "none", display: "flex", color: "white",}}>
            <ListItemIcon><AiOutlineUserSwitch style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Update User" />
          </Button>
        </ListItem>
        <ListItem button key="Add Room">
          <Button onClick={()=>{history.push("/add-room")}} style={{textDecoration: "none", display: "flex", color: "white",}} >
            <ListItemIcon><AiOutlineAppstoreAdd style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Add Room" />
          </Button>
        </ListItem>
        <ListItem button key="Delete Room">
          <Button onClick={()=>{history.push("/delete-room")}} style={{textDecoration: "none", display: "flex", color: "white",}} >
            <ListItemIcon><RiChatDeleteLine style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Delete Room" />
          </Button>
        </ListItem>
        <ListItem button key="Pending Blogs">
          <Button onClick={()=>{history.push("/pending-blogs")}} style={{textDecoration: "none", display: "flex", color: "white",}}>
            <ListItemIcon><AiOutlineExclamationCircle style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Pending Blogs" />
          </Button>
        </ListItem>
        <ListItem button key="Delete Blogs">
          <Button onClick={()=>{history.push("/delete-blogs")}} style={{textDecoration: "none", display: "flex", color: "white",}} >
            <ListItemIcon><MdDelete style={{fontSize: "30px", color: "#9fef00"}}/></ListItemIcon>   
            <ListItemText primary="Delete Blogs" />
          </Button>
        </ListItem>
        {/* <br></br> */}
      </List>
      {/* <Divider /> */}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
        <React.Fragment  key={'left'}>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
          
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}

export default SideDrawer
