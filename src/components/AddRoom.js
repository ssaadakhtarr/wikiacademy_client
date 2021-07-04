import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { useStateValue } from "../StateProvider";
import Axios from "axios";
import Navbar from "../modules/AdminDashboard/Navbar";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#9fef00',
      
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "blue",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

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

function AddRoom() {
  const [{ Cke }, dispatch] = useStateValue();
  const classes = useStyles();
  const [pageNumber, setPageNumber] = React.useState(1);

  const [roomName, setRoomName] = React.useState("");
  const [roomTagline, setRoomTagline] = React.useState("");
  const [roomImage, setRoomImage] = React.useState("");
  const [roomDescription, setRoomDescription] = React.useState("");
  const [taskName, setTaskName] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");
  const [ques1, setQues1] = React.useState("");
  const [ans1, setAns1] = React.useState("");
  const [ques2, setQues2] = React.useState("");
  const [ans2, setAns2] = React.useState("");
  const [ques3, setQues3] = React.useState("");
  const [ans3, setAns3] = React.useState("");
  const [ques4, setQues4] = React.useState("");
  const [ans4, setAns4] = React.useState("");
  const [ques5, setQues5] = React.useState("");
  const [ans5, setAns5] = React.useState("");
  const [taskNo, setTaskNo] = React.useState(0);

  const [roomSent, setRoomSent] = React.useState(false);
  const [task1Sent, setTask1Sent] = React.useState(false);
  const [task2Sent, setTask2Sent] = React.useState(false);
  const [task3Sent, setTask3Sent] = React.useState(false);
  const [task4Sent, setTask4Sent] = React.useState(false);
  const [task5Sent, setTask5Sent] = React.useState(false);

  const handlePage = (event, value) => {
    setTaskNo(value-1);
    setPageNumber(value);
    dispatch({
      type: "Cke_Value",
      data: "",
    });
  };

  const sendData = () => {
    Axios.post("http://localhost:3001/sendTask", {
      Cke: Cke,
    }).then((response) => {
      console.log(response);
    });
  };
  
  const handleTask1 = () => {
    
    switch (taskNo) {
      case 1:
        setTask1Sent(true);
        break;
      case 2:
        setTask2Sent(true);
        break;
      case 3:
        setTask3Sent(true);
        break;
      case 4:
        setTask4Sent(true);
        break;
      case 5:
        setTask5Sent(true);
        break;
    }
    console.log("clicked");
    Axios.post("http://localhost:3001/sendTask", {
      roomName: roomName,
      taskNo: taskNo,
      taskName: taskName,
      taskDescription: taskDescription,
      ques1: ques1,
      ques2: ques2,
      ques3: ques3,
      ques4: ques4,
      ques5: ques5,
      ans1: ans1,
      ans2: ans2,
      ans3: ans3,
      ans4: ans4,
      ans5: ans5,
    }).then((response) => {
      console.log(response);
    });
    
  };


  const handleRoomDetails = () => {
    setRoomSent(true);
    Axios.post("http://localhost:3001/sendRoomDetails", {
      roomName: roomName,
      roomTagline: roomTagline,
      roomImage: roomImage,
      roomDescription: roomDescription,
    }).then((response) => {
      console.log(response)
      
    })
  }

  console.log(roomDescription);

  return (
    <div style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
    backgroundPosition: "center",}}>
      <Navbar/>
      <br></br>
      <Typography style={{textAlign: "center", color: "#9fef00", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "2px"}} variant="h4">Add Room</Typography>

      <Box boxShadow={2} padding={10}>
        {pageNumber === 1 && (
          <div>
            <Typography style={{color: "#9fef00"}} variant="h4">Room Details</Typography><br></br>
            <CssTextField
            disabled={roomSent}
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
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
              variant="outlined"
              label="Room Name"
            />
            <br></br>
            <br></br>
            <CssTextField
            disabled={roomSent}
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
              onChange={(e) => {
                setRoomTagline(e.target.value);
              }}
              variant="outlined"
              label="Room Tagline"
              multiline="false"
            />
            <br></br>
            <br></br>
            <CssTextField
            disabled={roomSent}
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
              onChange={(e) => {
                setRoomImage(e.target.value);
              }}
              variant="outlined"
              label="Room Image"
              multiline="false"
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Room Description</Typography><br></br>
            <CKEditor
            disabled={roomSent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setRoomDescription(data);
              }}
            />
            <br></br>
            <SendButton disabled={roomSent} fullWidth onClick={handleRoomDetails} > Send Room Details</SendButton>
            <br></br>
            <br></br>
          </div>
        )}

        {pageNumber === 2 && (
          <div>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo}</Typography><br></br>
            <CssTextField
            disabled={task1Sent}
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
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo} Description</Typography><br></br>
            <CKEditor
            disabled={task1Sent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <br></br>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Questions</Typography><br></br>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <CssTextField
              disabled={task1Sent}
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
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task1Sent}
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
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={8}>
              <CssTextField
              disabled={task1Sent}
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
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task1Sent}
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
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task1Sent}
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
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task1Sent}
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
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task1Sent}
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
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task1Sent}
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
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task1Sent}
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
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task1Sent}
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
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
              </Grid>

              
            </Grid>
            
            
            <br></br>
            
            
            
            <br></br>
            
          
            <SendButton disabled={task1Sent} fullWidth onClick={handleTask1}>Submit</SendButton>

            <br></br>
             <br></br>
          </div>
        )}
        {pageNumber === 3 && (<div>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo}</Typography><br></br>
            <CssTextField
            disabled={task2Sent}
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
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo} Description</Typography><br></br>
            <CKEditor
            disabled={task2Sent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <br></br>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Questions</Typography><br></br>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <CssTextField
              disabled={task2Sent}
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
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task2Sent}
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
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={8}>
              <CssTextField
              disabled={task2Sent}
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
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task2Sent}
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
            }}ield
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task2Sent}
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
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task2Sent}
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
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task2Sent}
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
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task2Sent}
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
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task2Sent}
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
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task2Sent}
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
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
              </Grid>

              
            </Grid>
            
            
            <br></br>
            
            
            
            <br></br>
            
          
            <SendButton disabled={task2Sent} fullWidth onClick={handleTask1}>Submit</SendButton>

            <br></br>
             <br></br>
          </div>)}
          

{pageNumber === 4 && (<div>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo}</Typography><br></br>
            <CssTextField
            disabled={task3Sent}
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
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo} Description</Typography><br></br>
            <CKEditor
            disabled={task3Sent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <br></br>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Questions</Typography><br></br>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <CssTextField
              disabled={task3Sent}
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
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task3Sent}
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
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={8}>
              <CssTextField
              disabled={task3Sent}
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
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task3Sent}
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
            }}ield
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task3Sent}
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
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task3Sent}
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
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task3Sent}
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
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task3Sent}
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
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task3Sent}
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
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task3Sent}
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
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
              </Grid>

              
            </Grid>
            
            
            <br></br>
            
            
            
            <br></br>
            
          
            <SendButton disabled={task3Sent} fullWidth onClick={handleTask1}>Submit</SendButton>

            <br></br>
             <br></br>
          </div>)}
{pageNumber === 5 && (<div>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo}</Typography><br></br>
            <CssTextField
            disabled={task4Sent}
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
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo} Description</Typography><br></br>
            <CKEditor
            disabled={task4Sent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <br></br>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Questions</Typography><br></br>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <CssTextField
              disabled={task4Sent}
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
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task4Sent}
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
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={8}>
              <CssTextField
              disabled={task4Sent}
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
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task4Sent}
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
            }}ield
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task4Sent}
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
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task4Sent}
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
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task4Sent}
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
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task4Sent}
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
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task4Sent}
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
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task4Sent}
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
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
              </Grid>

              
            </Grid>
            
            
            <br></br>
            
            
            
            <br></br>
            
          
            <SendButton disabled={task4Sent} fullWidth onClick={handleTask1}>Submit</SendButton>

            <br></br>
             <br></br>
          </div>)}
{pageNumber === 6 && (<div>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo}</Typography><br></br>
            <CssTextField
            disabled={task5Sent}
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
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <br></br>
            <br></br>
            <Typography style={{color: "#9fef00"}} variant="h4">Task {taskNo} Description</Typography><br></br>
            <CKEditor
            disabled={task5Sent}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <br></br>
            
            <Typography style={{color: "#9fef00"}} variant="h4">Questions</Typography><br></br>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <CssTextField
              disabled={task5Sent}
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
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task5Sent}
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
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={8}>
              <CssTextField
              disabled={task5Sent}
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
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task5Sent}
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
            }}ield
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task5Sent}
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
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task5Sent}
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
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task5Sent}
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
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task5Sent}
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
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
              </Grid>

              <Grid item xs={8}>
              <CssTextField
              disabled={task5Sent}
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
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
              </Grid>
              <Grid item xs={4}>
              <CssTextField
              disabled={task5Sent}
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
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
              </Grid>

              
            </Grid>
            
            
            <br></br>
            
            
            
            <br></br>
            
          
            <SendButton fullWidth onClick={handleTask1}>Submit</SendButton>

            <br></br>
             <br></br>
          </div>)}

            <MuiThemeProvider  theme={theme}>
              <Box padding={2} style={{textAlign: "center", backgroundColor: "rgb(255,255,255,0.1)"}}>
              <Pagination color="secondary" style={{color: "#9fef00"}} defaultPage="1" page={pageNumber} onChange={handlePage} count={6} />
              </Box>
       
        </MuiThemeProvider>
      </Box>
    </div>
  );
}

export default AddRoom;
