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
import Axios from "axios";
import routes from "../GetRoute.js";
import TableLoader from "./TableLoader";


function UpdateUser() {
  const [values, setValues] = React.useState();
  const [userDetails, setUserDetails] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    Axios.get(`${routes}/getUserData`).then((response) => {
      console.log(response.data[1]);
      if (response.data != undefined) {
        setUserDetails(response.data);
        setMounted(true);

      }
    })
  }, [])


//   if (!mounted && userDetails === undefined) {
//     return ("loading");
//   }
// else {
//   console.log(userDetails)
  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",
        minHeight: "1000px",
      }}
    >
      <Navbar />
      <br></br>
      <Typography style={{textAlign: "center", color: "#fff", textTransform: "none", fontWeight: "bold", letterSpacing: "2px"}} variant="h3">Update User</Typography>

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
      <Container style={{textAlign: "center"}} maxWidth="lg">
      {/* <FormControl  variant="outlined">
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
      {(userDetails != undefined) ? (<UserTable userData={userDetails} search={values}/>) : (<TableLoader/>)}
      </Container>

      
    </div>
  );
}
// }
export default UpdateUser;
