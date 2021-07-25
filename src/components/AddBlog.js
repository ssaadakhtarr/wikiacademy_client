import { Box, Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import React from 'react'
import BlogPageNav from '../modules/Blog/BlogPageNav';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#9fef00',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#9fef00',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#9fef00',
        },
        '&:hover fieldset': {
          borderColor: '#9fef00',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#9fef00',
        },
      },
    },
  })(TextField);
  
  const SendButton = withStyles({
    root: {
        fontWeight: "bold",
       textTransform: "none",
      backgroundColor: "#9fef00",
      color: "#1e2633",
      border: "1px solid #9fef00",
      "&:hover": {
        backgroundColor: "#9fef00",
        color: "#1e2633",
      },
    },
  })(Button);

function AddBlog() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const [blogTitle, setBlogTitle] = React.useState('');
  const [blogDesc, setBlogDesc] = React.useState('');
  const [blogImg, setBlogImg] = React.useState('');
  const [blogMaterial, setBlogMaterial] = React.useState('');
  const [userId, setUserId] = React.useState(user.id);
  const nowEnable = blogTitle.length > 0 && blogDesc.length > 0 && blogImg.length > 0 && blogMaterial.length > 0;
  const postBlog = () => {
    
    Axios.post("http://localhost:3001/addBlog", {
      blogTitle: blogTitle,
      blogDesc: blogDesc,
      blogImg: blogImg,
      blogMaterial: blogMaterial,
      userId: userId,
    }).then((response) => {
      console.log(response.data);
    })
    Swal.fire({
      icon: 'success',
      title: 'Your blog is successfully added!',
      text: 'Your blog will be visible after an admin approves it!',
    
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/blog");
      }
    })
  }

    return (
        <div style={{backgroundColor: "#141d2b"}}>
            <BlogPageNav />
            
            <Box style={{ padding: " 5% 20%"}}>
            <Typography style={{color: "#fff", textAlign: "left"}} variant="h4">Add New Blog</Typography>
            <br></br>
            <CssTextField
            fullWidth
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "transparent",
              },
            }}
            InputLabelProps={{
              style: {fontWeight: "bold",
              letterSpacing: "1.5px", color: "#9fef00",fontSize: "12px", textTransform: "uppercase" },
            }}
              
              variant="outlined"
              label="Blog Title"
              multiline="false"
              onChange={(e) => {
                setBlogTitle(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <CssTextField
            fullWidth
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "transparent",
              },
            }}
            InputLabelProps={{
              style: {fontWeight: "bold",
              letterSpacing: "1.5px", color: "#9fef00",fontSize: "12px", textTransform: "uppercase" },
            }}
              
              variant="outlined"
              label="Blog Description"
              multiline="false"
              onChange={(e) => {
                setBlogDesc(e.target.value);
              }}
            />
             <br></br>
            <br></br>
            <CssTextField
            fullWidth
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "transparent",
              },
            }}
            InputLabelProps={{
              style: {fontWeight: "bold",
              letterSpacing: "1.5px", color: "#9fef00",fontSize: "12px", textTransform: "uppercase" },
            }}
              
              variant="outlined"
              label="Blog Image"
              multiline="false"
              onChange={(e) => {
                setBlogImg(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#fff", fontWeight: "bold", textTransform: "none"}} variant="h4">Blog</Typography>
            <br></br>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBlogMaterial(data);
              }}
              
            />
            <br></br>
            <br></br>
            <SendButton disabled={!nowEnable} fullWidth onClick={postBlog}>Post Blog</SendButton>
            </Box>
        </div>
    )
}

export default AddBlog
