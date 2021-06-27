import {
    Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import Navbar from "../modules/AdminDashboard/Navbar";
import { ImSearch } from "react-icons/im";
import UserTable from "../modules/AdminDashboard/UserTable";


function UpdateUser() {
  const [values, setValues] = React.useState();

  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <br></br>
      <Typography style={{textAlign: "center", color: "#9fef00", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "2px"}} variant="h4">Update User</Typography>

      <br></br>
      <Container style={{textAlign: "center"}} maxWidth="lg">
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
      </FormControl>
      <br></br>
      <br></br>
          <UserTable/>
      </Container>

      
    </div>
  );
}

export default UpdateUser;
