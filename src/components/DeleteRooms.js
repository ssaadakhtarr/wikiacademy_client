import {
    Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Navbar from "../modules/AdminDashboard/Navbar";
import { ImSearch } from "react-icons/im";
import UserTable from "../modules/AdminDashboard/UserTable";
import RoomsTable from "../modules/AdminDashboard/RoomsTable";
import axios from "axios";
import routes from "../GetRoute.js";


function DeleteRooms() {
  const [values, setValues] = React.useState();
  const [roomDetails, setRoomDetails] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    axios.get(`${routes}/getAllRooms`).then((response) => {
      console.log(response.data);
      if (response.data != undefined) {
        setRoomDetails(response.data);
        setMounted(true);

      }
    })
  }, [])


//   if (!mounted && roomDetails === undefined) {
//     return ("loading");
//   }
// else {
  return (
   
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <br></br>
      <Container style={{textAlign: "center"}} maxWidth="lg">
          <Typography style={{color: "#fff", textTransform: "none", fontWeight: "bold", letterSpacing: "2px"}} variant="h3">Delete Rooms</Typography>
          {/* <br></br> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inlineBlock",
                width: "320px",
                height: "5px",
                borderRadius: "20px",
                backgroundColor: "#88cc14",
              }}
            ></div>
          </div>
          {/* <br></br> */}
{/* 
      <FormControl  variant="outlined">
        <InputLabel
          style={{ color: "#9fef00" }}
          fullWidth
          htmlFor="outlined-adornment-password"
        >
          Search
        </InputLabel>
        <OutlinedInput
          fullWidth
          style={{ color: "#9fef00" }}
          id="outlined-adornment-password"
          type="text"
          value={values}
          onChange={(e) => {
            setValues(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                style={{ color: "#9fef00" }}
                edge="end"
              >
                <ImSearch />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={55}
        />
      </FormControl> */}
      <br></br>
      <br></br>
      {/* {console.log(roomDetails)} */}
      {(roomDetails != undefined) ? (<RoomsTable roomData={roomDetails}/>) : "loading..."}
      </Container>

      
    </div>
  );

}
// }

export default DeleteRooms;
