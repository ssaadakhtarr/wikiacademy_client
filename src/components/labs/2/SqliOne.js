import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import routes from "../../../GetRoute"

function SqliOne() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState();
  const [invalid, setInvalid] = React.useState(false);
  const [isSolved, setIsSolved] = React.useState(false);

  const login = () => {
    axios
      .post(`${routes}/lab2/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data !== undefined) {
          if (response.data.length === 1) {
            console.log("1")
            setIsLoggedIn(true);
            setUserDetails(response.data);
          } else if (response.data.length > 1) {
              console.log("2")
            setIsLoggedIn(true);
            setUserDetails(response.data);
            setIsSolved(true);
          } 
          else {
            console.log("3")
            setInvalid(true);
          }
        }
      });
  };

  const logout = () => {
      setInvalid(false);
      setIsLoggedIn(false);
      setIsSolved(false);
      setUserDetails(undefined);
      setUsername('');
      setPassword('');
  }

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <Box style={{ textAlign: "center" }} padding={10}>
            <Typography variant="h3">Login</Typography>
            <br></br>
            <Container maxWidth="xs">
              <TextField
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                fullWidth
                id="outlined-basic"
                label="username"
                variant="outlined"
              />
              <br></br>
              <br></br>
              <TextField
              type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                fullWidth
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
              <br></br>
              <br></br>
              <Button
                onClick={login}
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
              <br></br>
              <br></br>
              {invalid && (
                <Typography style={{ color: "red" }} variant="body1">
                  Invalid username/password
                </Typography>
              )}
            </Container>
          </Box>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <Box style={{ textAlign: "center", padding: "2%" }}>
            <Typography variant="h2">Welcome to your Dashboard</Typography>
          </Box>
          <Container maxWidth="sm">
            <Box style={{ textAlign: "center" }}>
              {userDetails !== undefined &&
                userDetails.map((i) => {
                  return (
                    <div>
                      {console.log(i)}
                      <Typography variant="h4">Hello, {i.username}</Typography>
                      <Typography variant="h4">
                        Your password is, {i.password}
                      </Typography>
                    </div>
                  );
                })}
                {isSolved && <Typography>Congratulations! You have solved the lab. Here is the flag <span style={{color: "green"}}>{"$FLAG{" + "ab8nr2no3e56815ojwj0qvdr2fi9nqjh" + "}"}</span></Typography>}
              <br></br>
              <br></br>
              <Button
                onClick={logout}
                
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
             
            </Box>
          </Container>
        </div>
      )}
    </div>
  );
}

export default SqliOne;
