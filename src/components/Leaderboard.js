import React from "react";
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
  const user = JSON.parse(localStorage.getItem("user"));

  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#141d2b" }}>
      
      <Box style={boxStyle}>
      {/* {user === null && <Nav />}
      {user !== null && <Nav2 />} */}
      <Nav/>
      <Box padding={10}>
      <Typography variant="h2" className={classes.textVS}>
          Leaderboard
        </Typography>
        <Typography style={{color: "#c6cede"}} variant="subtitle1" className={classes.HackA}>
        Welcome to the wall of fame - Here are our top 10 users
        </Typography> 
        {/* {user !== null && (
          <Typography variant="h6">
            You are ranked{" "}
            <span style={{ color: "#9fef00" }}>#{user.rank}</span>
          </Typography>
        )} */}
      </Box>
        
      </Box>
      <Box style={{ color: "white" }} padding={5}>
        {/* <Typography className={classes.Leader}>
          Welcome to the wall of fame - Here are our top 10 users
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Rank</StyledTableCell>
                    <StyledTableCell align="center">Username</StyledTableCell>
                    <StyledTableCell align="center">Points</StyledTableCell>
                    <StyledTableCell align="center">Level</StyledTableCell>
                    <StyledTableCell align="center">Rooms In</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" align="center">
                        {row.rank}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.username}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.points}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.level}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.rooms}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default Leaderboard;
