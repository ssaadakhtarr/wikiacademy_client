import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useStateValue } from "../StateProvider";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function AddRoom() {
  const [{ Cke }, dispatch] = useStateValue();
  const classes = useStyles();
  const [pageNumber, setPageNumber] = React.useState(0);

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
    <div>
      <Box boxShadow={2} padding={10}>
        {pageNumber === 1 && (
          <div>
            <TextField
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
              variant="outlined"
              label="Room Name"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={(e) => {
                setRoomTagline(e.target.value);
              }}
              variant="outlined"
              label="Room Tagline"
              multiline="false"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={(e) => {
                setRoomImage(e.target.value);
              }}
              variant="outlined"
              label="Room Image"
              multiline="false"
            />
            <br></br>
            <br></br>
            <h1>Room Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setRoomDescription(data);
              }}
            />
            <Button onClick={handleRoomDetails} > Send room details</Button>
          </div>
        )}

        {pageNumber === 2 && (
          <div>
            <h1>Task {taskNo}</h1>
            <TextField
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <h1>Task {taskNo} Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <h1>{Cke}</h1>
            <TextField
              variant="outlined"
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
            <br></br>
            <Button onClick={handleTask1}>Done1</Button>

           
          </div>
        )}
        {pageNumber === 3 && (
          <div>
            <h1>Task {taskNo}</h1>
            <TextField
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <h1>Task {taskNo} Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <h1>{Cke}</h1>
            <TextField
              variant="outlined"
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
            <br></br>
            <Button onClick={handleTask1}>Done1</Button>
          </div>
        )}

{pageNumber === 4 && (<div><h1>Task {taskNo}</h1>
            <TextField
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <h1>Task {taskNo} Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <h1>{Cke}</h1>
            <TextField
              variant="outlined"
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
            <br></br>
            <Button onClick={handleTask1}>Done1</Button></div>)}
{pageNumber === 5 && (<div><h1>Task {taskNo}</h1>
            <TextField
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <h1>Task {taskNo} Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <h1>{Cke}</h1>
            <TextField
              variant="outlined"
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
            <br></br>
            <Button onClick={handleTask1}>Done1</Button></div>)}
{pageNumber === 6 && (<div><h1>Task {taskNo}</h1>
            <TextField
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              variant="outlined"
              label={`task ${taskNo} name`}
            />
            <h1>Task {taskNo} Description</h1>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTaskDescription(data);
              }}
            />
            <h1>{Cke}</h1>
            <TextField
              variant="outlined"
              label="Question 1"
              onChange={(e) => {
                setQues1(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 1"
              onChange={(e) => {
                setAns1(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 2"
              onChange={(e) => {
                setQues2(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 2"
              onChange={(e) => {
                setAns2(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 3"
              onChange={(e) => {
                setQues3(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 3"
              onChange={(e) => {
                setAns3(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 4"
              onChange={(e) => {
                setQues4(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 4"
              onChange={(e) => {
                setAns4(e.target.value);
              }}
            />
            <br></br>
            <TextField
              variant="outlined"
              label="Question 5"
              onChange={(e) => {
                setQues5(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="Answer 5"
              onChange={(e) => {
                setAns5(e.target.value);
              }}
            />
            <br></br>
            <Button onClick={handleTask1}>Done1</Button></div>)}


        <Pagination defaultPage="1" page={pageNumber} onChange={handlePage} count={6} />
      </Box>
    </div>
  );
}

export default AddRoom;
