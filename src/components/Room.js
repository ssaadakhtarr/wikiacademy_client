import {
  Box,
  Button,
  Container,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import Nav2 from "./Nav2";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import IconImage from "../img/tick.png";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Axios from "axios";
import routes from "../GetRoute.js";
import { useHistory, useParams } from "react-router-dom";
import renderHTML from "react-render-html";
import { withStyles } from "@material-ui/styles";
import CheckIcon from "@material-ui/icons/Check";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { SiNintendogamecube } from "react-icons/si";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography style={{ color: "#cad2e2" }} variant="body2">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
    backgroundColor: "#1e2633",
  },
  nested: {
    backgroundColor: "white",
    color: "black",
  },
}));

const StyledButton = withStyles({
  root: {
    fontSize: "16px",
    backgroundColor: "#111927",
    color: "#9fef00",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#9fef00",
      color: "#111927",
    },
  },
})(Button);

function Room() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { roomname } = useParams();

  const [mounted, setMounted] = React.useState(false);
  const [mounted1, setMounted1] = React.useState(false);
  const [mounted2, setMounted2] = React.useState(false);
  const [roomDetails, setRoomDetails] = React.useState();
  const [taskDetails, setTaskDetails] = React.useState();
  const [checkAns, setCheckAns] = React.useState("");
  const [changeButton, setChangeButton] = React.useState(false);
  const [userId, setUserId] = React.useState(user.id);

  const [fullDetails, setFullDetails] = React.useState();

  const [isJoined, setIsJoined] = React.useState(false);

  const [showTaskButton, setShowTaskButton] = React.useState(true);

  const [pageCount, setPageCount] = React.useState(1);

  const [previousData, setPreviousData] = React.useState();

  const [progress, setProgress] = React.useState(0);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  console.log(roomname);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    Axios.post(`${routes}/getRoomDetails`, {
      roomname: roomname,
    }).then((response) => {
      setRoomDetails(response.data);

      console.log(response.data);
      setMounted(true);
    });

    Axios.post(`${routes}/getTaskDetails`, {
      roomname: roomname,
    }).then((response) => {
      console.log(response.data);

      setTaskDetails(response.data);

      console.log(taskDetails);
      setMounted1(true);
    });

    Axios.post(`${routes}/checkUserRooms`, {
      userId: userId,
      roomname: roomname,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        setIsJoined(false);
      } else {
        setIsJoined(true);
        setPreviousData(response.data);
      }
    });
  }, []);

  useEffect(() => {
    Axios.post(`${routes}/getProgress`, {
      userId: userId,
      roomname: roomname,
    }).then((response) => {
      console.log(response.data["COUNT(progBar)"]);
      setProgress(response.data["COUNT(progBar)"] * 4);
    });
    if (progress === 100) {
      Swal.fire({
        icon: "success",
        title: "Congratulations",
        text: "You have completed this room!",
      });
    }
  }, [progress]);

  if (!mounted || !mounted1) {
    return <div>Loading...</div>;
  }

  const handleJoinRoom = () => {
    setIsJoined(true);

    Axios.post(`${routes}/getUserRooms`, {
      userId: userId,
      roomname: roomname,
    }).then((response) => {
      console.log(response);

      setMounted2(true);
    });
    history.push(`/room/${roomname}`);
  };

  const handleAnswer = () => {};

  const generateDetails = () => {};
  console.log(isJoined);
  console.log(fullDetails);

  const showTasks = () => {
    setPageCount(pageCount + 1);

    setShowTaskButton(false);
    if (taskDetails !== undefined && isJoined) {
      let index = 0;
      setFullDetails(
        taskDetails[0].map((i) => {
          for (var j = -1; j < 5; j++) {
            if ("questions" in i) {
              i.questions.push(taskDetails[1][j + index]);
            } else {
              i.questions = [];
            }
          }
          index += 5;
          return i;
        })
      );
    }
  };

  console.log(previousData);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#9fef00",
      },
    },
  });

  return (
    <div style={{ backgroundColor: "#141d2b", color: "#cad2e2" }}>
      <Nav2 />
      <Box
        style={{
          paddingTop: "100px",
          backgroundImage: `url(${roomDetails.roomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "left",
          backgroundColor: "#5e5e5e",
          color: "white",
        }}
      >
        <Box padding={2} style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <Typography variant="h2">
            <span>
              <SiNintendogamecube style={{ fontSize: "70%" }} />
            </span>{" "}
            {roomDetails.roomTitle}
          </Typography>
          <Typography style={{ color: "#c5c8cc" }} variant="h6">
            {roomDetails.roomTagline}
          </Typography>
        </Box>
      </Box>

      {/* main description page after the jumbotron */}
      <Container spacing={2} component="main" maxWidth="lg">
        <br></br>
        {isJoined && (
          <div>
            <div
              style={{ backgroundColor: "#141d2b" }}
              className={classes.root}
            >
              <MuiThemeProvider theme={theme}>
                <LinearProgressWithLabel
                  style={{
                    margin: "3% 0",
                    borderRadius: "25px",
                    height: "15px",
                    backgroundColor: "#1a2332",
                  }}
                  value={progress}
                />
              </MuiThemeProvider>
            </div>
            <br></br>

            {pageCount === 1 && (
              <Box
                style={{ backgroundColor: "#1a2332" }}
                padding={4}
                boxShadow={2}
              >
                <Typography variant="h6">
                  {renderHTML(roomDetails.roomDescription)}
                </Typography>
              </Box>
            )}
            <br></br>

            {/* Task 1 page */}
            {pageCount === 2 && (
              <div>
                <Box style={{ backgroundColor: "#1a2332" }} padding={2}>
                  {/* Task 1 Description */}
                  <Typography variant="h4">
                    Task 1 - {fullDetails[0].taskName}
                  </Typography>
                  <Typography variant="h6">
                    {renderHTML(fullDetails[0].taskDescription)}
                  </Typography>
                  <hr></hr>
                  <br></br>
                  {/* Task 1 Questions */}
                  <Typography style={{ fontWeight: "600" }} variant="h4">
                    Questions
                  </Typography>
                  <Typography variant="body1">
                    Answer the questions below to complete this Section
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[0].questions[0].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData !== undefined && previousData[0].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[0].isAnswered === 1
                        ? fullDetails[0].questions[0].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <StyledButton
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[0].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[0].questions[0].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);

                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[0].questions[0].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try again!",
                        });
                      }
                    }}
                  >
                    {previousData[0].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </StyledButton>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[0].questions[1].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[1].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[1].isAnswered === 1
                        ? fullDetails[0].questions[1].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    disabled={previousData[1].isAnswered === 1 ? true : false}
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (checkAns === fullDetails[0].questions[1].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[0].questions[1].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[1].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[0].questions[2].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[2].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[2].isAnswered === 1
                        ? fullDetails[0].questions[2].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[2].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[0].questions[2].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[0].questions[2].questionsId,
                        }).then((response) => {
                          console.log(response.data);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[2].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[0].questions[3].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[3].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[3].isAnswered === 1
                        ? fullDetails[0].questions[3].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[3].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[0].questions[3].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[0].questions[3].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[3].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[0].questions[4].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[4].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[4].isAnswered === 1
                        ? fullDetails[0].questions[4].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[4].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[0].questions[4].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[0].questions[4].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[4].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                </Box>
                <br></br>
              </div>
            )}

            {/* Task 2 page */}
            {pageCount === 3 && (
              <div>
                <Box style={{ backgroundColor: "#1a2332" }} padding={2}>
                  {/* Task 2 Description */}
                  <Typography variant="h4">
                    Task 2 - {fullDetails[1].taskName}
                  </Typography>
                  <Typography variant="h6">
                    {renderHTML(fullDetails[1].taskDescription)}
                  </Typography>
                  <hr></hr>
                  <br></br>
                  {/* Task 2 Questions */}
                  <Typography style={{ fontWeight: "600" }} variant="h4">
                    Questions
                  </Typography>
                  <Typography variant="body1">
                    Answer the questions below to complete this Section
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[1].questions[0].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[5].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[5].isAnswered === 1
                        ? fullDetails[1].questions[0].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <StyledButton
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[5].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[1].questions[0].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[1].questions[0].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[5].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </StyledButton>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[1].questions[1].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[6].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[6].isAnswered === 1
                        ? fullDetails[1].questions[1].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    disabled={previousData[6].isAnswered === 1 ? true : false}
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (checkAns === fullDetails[1].questions[1].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[1].questions[1].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[6].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[1].questions[2].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[7].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[7].isAnswered === 1
                        ? fullDetails[1].questions[2].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[7].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[1].questions[2].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[1].questions[2].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[7].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[1].questions[3].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[8].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[8].isAnswered === 1
                        ? fullDetails[1].questions[3].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[8].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[1].questions[3].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[1].questions[3].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[8].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[1].questions[4].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[9].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[9].isAnswered === 1
                        ? fullDetails[1].questions[4].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[9].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[1].questions[4].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[1].questions[4].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[9].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                </Box>
                <br></br>
              </div>
            )}

            {/* Task 3 page */}
            {pageCount === 4 && (
              <div>
                <Box style={{ backgroundColor: "#1a2332" }} padding={2}>
                  {/* Task 3 Description */}
                  <Typography variant="h4">
                    Task 3 - {fullDetails[2].taskName}
                  </Typography>
                  <Typography variant="h6">
                    {renderHTML(fullDetails[2].taskDescription)}
                  </Typography>
                  <hr></hr>
                  <br></br>
                  {/* Task 3 Questions */}
                  <Typography style={{ fontWeight: "600" }} variant="h4">
                    Questions
                  </Typography>
                  <Typography variant="body1">
                    Answer the questions below to complete this Section
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[2].questions[0].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[10].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[10].isAnswered === 1
                        ? fullDetails[2].questions[0].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <StyledButton
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[10].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[2].questions[0].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[2].questions[0].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[10].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </StyledButton>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[2].questions[1].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[11].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[11].isAnswered === 1
                        ? fullDetails[2].questions[1].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    disabled={previousData[11].isAnswered === 1 ? true : false}
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (checkAns === fullDetails[2].questions[1].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[2].questions[1].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[11].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[2].questions[2].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[12].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[12].isAnswered === 1
                        ? fullDetails[2].questions[2].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[12].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[2].questions[2].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[2].questions[2].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[12].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[2].questions[3].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[13].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[13].isAnswered === 1
                        ? fullDetails[2].questions[3].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[13].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[2].questions[3].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[2].questions[3].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[13].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[2].questions[4].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[14].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[14].isAnswered === 1
                        ? fullDetails[2].questions[4].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[14].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[2].questions[4].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[2].questions[4].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[14].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                </Box>
                <br></br>
              </div>
            )}

            {/* Task 4 page */}
            {pageCount === 5 && (
              <div>
                <Box style={{ backgroundColor: "#1a2332" }} padding={2}>
                  {/* Task 4 Description */}
                  <Typography variant="h4">
                    Task 4 - {fullDetails[3].taskName}
                  </Typography>
                  <Typography variant="h6">
                    {renderHTML(fullDetails[3].taskDescription)}
                  </Typography>
                  <hr></hr>
                  <br></br>
                  {/* Task 4 Questions */}
                  <Typography style={{ fontWeight: "600" }} variant="h4">
                    Questions
                  </Typography>
                  <Typography variant="body1">
                    Answer the questions below to complete this Section
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[3].questions[0].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[15].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[15].isAnswered === 1
                        ? fullDetails[3].questions[0].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <StyledButton
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[15].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[3].questions[0].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[3].questions[0].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[15].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </StyledButton>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[3].questions[1].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[16].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[16].isAnswered === 1
                        ? fullDetails[3].questions[1].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    disabled={previousData[16].isAnswered === 1 ? true : false}
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (checkAns === fullDetails[3].questions[1].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[3].questions[1].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[16].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[3].questions[2].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[17].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[17].isAnswered === 1
                        ? fullDetails[3].questions[2].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[17].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[3].questions[2].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[3].questions[2].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[17].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[3].questions[3].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[18].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[18].isAnswered === 1
                        ? fullDetails[3].questions[3].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[18].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[3].questions[3].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[3].questions[3].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[18].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[3].questions[4].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[19].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[19].isAnswered === 1
                        ? fullDetails[3].questions[4].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[19].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[3].questions[4].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[3].questions[4].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[19].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                </Box>
                <br></br>
              </div>
            )}

            {/* Task 5 page */}
            {pageCount === 6 && (
              <div>
                <Box style={{ backgroundColor: "#1a2332" }} padding={2}>
                  {/* Task 5 Description */}
                  <Typography variant="h4">
                    Task 5 - {fullDetails[4].taskName}
                  </Typography>
                  <Typography variant="h6">
                    {renderHTML(fullDetails[4].taskDescription)}
                  </Typography>
                  <hr></hr>
                  <br></br>
                  {/* Task 5 Questions */}
                  <Typography style={{ fontWeight: "600" }} variant="h4">
                    Questions
                  </Typography>
                  <Typography variant="body1">
                    Answer the questions below to complete this Section
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[4].questions[0].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[20].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[20].isAnswered === 1
                        ? fullDetails[4].questions[0].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <StyledButton
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[20].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[4].questions[0].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[4].questions[0].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[20].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </StyledButton>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[4].questions[1].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[21].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[21].isAnswered === 1
                        ? fullDetails[4].questions[1].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    disabled={previousData[21].isAnswered === 1 ? true : false}
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (checkAns === fullDetails[4].questions[1].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[4].questions[1].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[21].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[4].questions[2].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[22].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[22].isAnswered === 1
                        ? fullDetails[4].questions[2].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[22].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[4].questions[2].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[4].questions[2].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[22].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[4].questions[3].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[23].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[23].isAnswered === 1
                        ? fullDetails[4].questions[3].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[23].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[4].questions[3].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[4].questions[3].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[23].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                  <Typography variant="h6">
                    {fullDetails[4].questions[4].questions}
                  </Typography>
                  <br></br>
                  <TextField
                    disabled={previousData[24].isAnswered === 1 ? true : false}
                    onChange={(e) => {
                      setCheckAns(e.target.value);
                    }}
                    size="small"
                    style={{ width: "70%" }}
                    variant="outlined"
                    label={
                      previousData[24].isAnswered === 1
                        ? fullDetails[4].questions[4].answers
                        : "Answer"
                    }
                    InputProps={{
                      style: {
                        color: "#fff",
                        backgroundColor: "#111927",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#9fef00",  },
                    }}
                  />
                  <Button
                    style={{
                      color: "#1e2633",
                      backgroundColor: "#9fef00",
                      float: "right",
                      width: "25%",
                      textTransform: "none",
                    }}
                    disabled={previousData[24].isAnswered === 1 ? true : false}
                    onClick={() => {
                      if (checkAns === fullDetails[4].questions[4].answers) {
                        setChangeButton(true);
                        setProgress(progress + 4);
                        Toast.fire({
                          icon: "success",
                          title: "You are correct!",
                        });
                        Axios.post(`${routes}/isAnswered`, {
                          userId: userId,
                          roomsId: roomDetails.roomsId,
                          questionsId: fullDetails[4].questions[4].questionsId,
                        }).then((response) => {
                          console.log(response);
                          if (response.data !== []) {
                            setPreviousData(response.data);
                          }
                        });
                      } else {
                        Toast.fire({
                          icon: "error",
                          title: "You are wrong! Try Again!",
                        });
                      }
                    }}
                  >
                    {previousData[24].isAnswered === 1 ? (
                      <CheckIcon />
                    ) : (
                      `Submit`
                    )}
                  </Button>
                  <br></br>
                  <br></br>
                </Box>
                <br></br>
              </div>
            )}

            {/* Next and previous buttons */}
            <Box
              padding={2}
              style={{ textAlign: "left", backgroundColor: "#1a2332" }}
            >
              {pageCount > 1 && (
                <StyledButton
                  onClick={() => {
                    setPageCount(pageCount - 1);
                  }}
                >
                  Previous
                </StyledButton>
              )}
              {fullDetails !== undefined && pageCount < 6 && (
                <StyledButton
                  style={{ marginLeft: "5px" }}
                  onClick={() => {
                    setPageCount(pageCount + 1);

                    setShowTaskButton(false);
                    if (fullDetails === undefined) {
                      let index = 0;
                      setFullDetails(
                        taskDetails[0].map((i) => {
                          for (var j = -1; j < 5; j++) {
                            if ("questions" in i) {
                              i.questions.push(taskDetails[1][j + index]);
                            } else {
                              i.questions = [];
                            }
                          }
                          index += 5;
                          return i;
                        })
                      );
                    }
                  }}
                >
                  Next
                </StyledButton>
              )}
            </Box>
            <br></br>

            {/* Table of contents box */}
            <Box style={{ backgroundColor: "#1a2332" }} padding={4}>
              <Typography variant="body1">Table of Contents</Typography>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(1);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Description
              </StyledButton>
              <br></br>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(2);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Task 1{" "}
              </StyledButton>
              <br></br>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(3);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Task 2
              </StyledButton>
              <br></br>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(4);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Task 3
              </StyledButton>
              <br></br>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(5);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Task 4
              </StyledButton>
              <br></br>
              <br></br>
              <StyledButton
                disableElevation
                onClick={() => {
                  setPageCount(6);
                  if (fullDetails === undefined) {
                    let index = 0;
                    setFullDetails(
                      taskDetails[0].map((i) => {
                        for (var j = -1; j < 5; j++) {
                          if ("questions" in i) {
                            i.questions.push(taskDetails[1][j + index]);
                          } else {
                            i.questions = [];
                          }
                        }
                        index += 5;
                        return i;
                      })
                    );
                  }
                }}
                style={{ textTransform: "none", justifyContent: "flex-start" }}
                fullWidth
                variant="contained"
              >
                Task 5
              </StyledButton>
            </Box>
            <br></br>
            <br></br>
          </div>
        )}
        {!isJoined && (
          <div>
            <Box
              style={{
                border: "1px solid #9fef00",
                padding: "20%",
                textAlign: "center",
                minHeight: "50vh",
              }}
            >
              <Typography style={{ color: "#9fef00" }} variant="h3">
                Join the room to access the tasks!
              </Typography>
              <br></br>
              <Typography>
                <Button
                  onClick={handleJoinRoom}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#9fef00",
                    color: "#1e2633",
                  }}
                  variant="contained"
                >
                  Join Room
                </Button>
              </Typography>
            </Box>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Room;
