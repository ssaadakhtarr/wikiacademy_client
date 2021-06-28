import { Box, Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import React from 'react'
import BlogPageNav from '../modules/Blog/BlogPageNav';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from 'axios';

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
      backgroundColor: "transparent",
      color: "#9fef00",
      border: "1px solid #9fef00",
      "&:hover": {
        backgroundColor: "#9fef00",
        color: "#1e2633",
      },
    },
  })(Button);

function AddBlog() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [blogTitle, setBlogTitle] = React.useState('');
  const [blogDesc, setBlogDesc] = React.useState('');
  const [blogImg, setBlogImg] = React.useState('');
  const [blogMaterial, setBlogMaterial] = React.useState('');
  const [userId, setUserId] = React.useState(user.id);
  
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
  }

    return (
        <div style={{backgroundColor: "#141d2b"}}>
            <BlogPageNav/>
            
            <Box style={{ padding: " 5% 20%"}}>
            <Typography style={{color: "#9fef00", textAlign: "center"}} variant="h2">Add New Blog</Typography>
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
            <Typography style={{color: "#9fef00", fontWeight: "bold", textTransform: "uppercase"}} variant="h4">Blog</Typography>
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
            <SendButton fullWidth onClick={postBlog}>Post Blog</SendButton>
            </Box>
        </div>
    )
}

export default AddBlog
