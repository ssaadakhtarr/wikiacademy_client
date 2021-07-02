import React, { useEffect } from "react";
import Nav from "./Nav";
import Box from "@material-ui/core/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import Nav2 from "./Nav2";
import Footer from "./Footer";
import Cookies from "universal-cookie";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import UserTable from "../modules/AdminDashboard/UserTable";
import LeaderboardDetails from "../components/LeaderboardDetails";
import {
  Container,
FormControl,
IconButton,
InputAdornment,
InputLabel,
OutlinedInput,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#1e2633",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(rank, username, points, level, rooms) {
  return { rank, username, points, level, rooms };
}

const rows = [
  createData(1, "Ali Khan", 4400, 4, 15),
  createData(2, "Umer Amir", 3780, 3, 12),
  createData(3, "Asif Ali", 2172, 2, 7),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  textVS: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
  Leader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: "2em",
    fontWeight: "bold",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3em",
      fontWeight: "bold",
      paddingBottom: "10px",
    },
  },
}));

const boxStyle = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp2757874.gif')",
  backgroundPosition: "center",
  textAlign: "center",
  backgroundColor: "#5e5e5e",
  color: "white",
};

function Leaderboard() {
  const cookies = new Cookies();
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [values, setValues] = React.useState();
  const [LeaderboardDetails, getLeaderBoardDetails] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/getLeaderboard").then((response) => {
      if (response.data != undefined) {
        getLeaderBoardDetails(response.data);
        setMounted(true);

      }
    })
  }, [])


  if (!mounted && LeaderboardDetails === undefined) {
    return ("loading")
  }
else {
  console.log(LeaderboardDetails)
 
  return(
    <div style={{ backgroundColor: "#141d2b" }}>
      <Box style={boxStyle}>
      {/* {user === null && <Nav />}
      {user !== null && <Nav2 />} */}
      {(cookies.get("userId") ? <Nav2/>:<Nav/>)}
      <Box padding={10}>
      <Typography variant="h2" className={classes.textVS}>
          Leaderboard
        </Typography>
        <Typography style={{color: "#c6cede"}} variant="subtitle1" className={classes.HackA}>
        Welcome to the wall of fame - Here are our top 10 users
        </Typography> 
        
        {(cookies.get("userId") ? <Typography style={{color: "#c6cede",fontSize:"30px",paddingTop:"20px"}} variant="subtitle1" className={classes.HackA}>Your current rank is {user.rank}</Typography>:<Typography style={{color: "#c6cede"}} variant="subtitle1" className={classes.HackA}>Rank will be displayed of Login ones</Typography>)}
</Box>
</Box>
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
      {console.log(LeaderboardDetails)}
      {(LeaderboardDetails != undefined) && (<LeaderboardDetails userData={LeaderboardDetails}/>)}
      </Container>
    </div>
  );
}
}
export default Leaderboard;
