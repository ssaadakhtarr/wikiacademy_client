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
import DeleteBlogsTable from "../modules/AdminDashboard/DeleteBlogsTable";
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import { MdDelete } from "react-icons/md";



function PendingBlogs() {
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
      <Typography style={{textDecoration: "none", textAlign: "center", color: "#9fef00", textTransform: "none", fontWeight: "bold", letterSpacing: "2px"}} variant="h4"><MdDelete style={{fontSize: "30px", color: "#9fef00"}}/> Delete Blogs</Typography>

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
      <DeleteBlogsTable/>
      </Container>

      
    </div>
  );
}

export default PendingBlogs;
