import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles } from "@material-ui/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Axios from "axios";
import {useStateValue} from "../StateProvider";

const IconStyle = { marginTop: "10px", marginRight: "10px" };

const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: "red"
    },
    "&:hover $notchedOutline": {
      borderColor: "blue"
    },
    "&$focused $notchedOutline": {
      borderColor: "green"
    }
  },
  focused: {},
  notchedOutline: {}
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  box: {
    minWidth: 1000,
    maxWidth: 1000,
    height: "100%",
  },
  inputlabel: {
    color: "#9fef00",
    "&.Mui-focused": {
      color: "#9fef00",
  },},
  select: {
    color: "#9fef00",
    "&:before": {
      borderColor: "red"
    },
  },
    formControl: {
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderColor: "red"
      }
    },
   
    "& .MuiSvgIcon-root": {
      color: "#9fef00",
    },

}));

const SubmitButton = withStyles({
  root: {
    fontWeight: "bold",
    backgroundColor: "#9fef00",
    color: "#161e2d",
    "&:hover": {
      backgroundColor: "#161e2d",
      color: "#9fef00",
    },
  },
})(Button);

function AboutProfile(userData) {
  const outlinedInputClasses = useOutlinedInputStyles();
  console.log(userData.userData);
  const [{User}, dispatch] = useStateValue();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("in aboutprofile.js user is: ")
  console.log(user)
  const classes = useStyles();
  const id = userData.userData.id;
  const [gender, setGender] = React.useState(userData.userData.gender);
  const [occupation, setOccupation] = React.useState(userData.userData.occupation);
  const [areaOfInterest, setAreaOfInterest] = React.useState(userData.userData.areaOfInterest);
  const [selectedDate, setSelectedDate] = React.useState(userData.userData.dateOfBirth.slice(0,10));
  const [summary, setSummary] = React.useState(userData.userData.summary);
  const [twitter, setTwitter] = React.useState(userData.userData.twitter);
  const [instagram, setInstagram] = React.useState(userData.userData.instagram);
  const [github, setGithub] = React.useState(userData.userData.github);
  const [linkedin, setLinkedin] = React.useState(userData.userData.linkedin);

console.log(userData.userData.dateOfBirth.slice(0,10));
console.log(userData.userData.dateOfBirth);
  
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleOccupation = (event) => {
    setOccupation(event.target.value);
  };
  const handleAreaOfInterest = (event) => {
    setAreaOfInterest(event.target.value);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleTwitter = (event) => {
    setTwitter(event.target.value);
  };

  const handleInstagram = (event) => {
    setInstagram(event.target.value);
  };

  const handleGithub = (event) => {
    setGithub(event.target.value);
  };

  const handleLinkedin = (event) => {
    setLinkedin(event.target.value);
  };





  const updateChanges = () => {
    Axios.post("http://localhost:3001/updatePersonalInfo", {
      id: id,
      selectedDate: selectedDate,
      gender: gender,
      occupation: occupation,
      areaOfInterest: areaOfInterest,
      summary: summary,
    }).then((response) => {
      console.log(response);
    })
  }
  
  const updateSocials = () => {
    Axios.post("http://localhost:3001/updateSocials", {
      id: id,
      twitter: twitter,
      instagram: instagram,
      github: github,
      linkedin: linkedin,
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div>
      <Box padding={5} style={{color: "#fff", backgroundColor: "#1a2332", maxWidth: "1400px",}}>
        <Typography variant="h5">Personal Info</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Your personal info will stay private
        </Typography>
        <br></br>
        <br></br>

        <TextareaAutosize
          style={{backgroundColor: "#141d2b", color: "#9fef00", width: "100%", minWidth: "50%",maxWidth: "600px", float: "right" }}
          rowsMin={18}
          rowsMax={Infinity}
          aria-label="empty textarea"
          placeholder="Write a short summary about yourself"
          value={summary}
          onChange={handleSummary}
        />

        
          <TextField
            style={{color: "#9fef00", width: "320px" }}
            id="date"
            label="Birthday"
            type="date"
            defaultValue={selectedDate}
            className={classes.textField}
            onChange={handleDateChange}
            
            InputProps={{
              
              style: {
                color: "#9fef00",
                backgroundColor: "#141d2b",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {fontWeight: "bold",
              letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "none"},
            }}
          />
        <br></br>

        <br></br>

        <FormControl
          size="small"
          style={{ width: "320px" }}
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel className={classes.inputlabel} id="demo-simple-select-outlined-label">Gender</InputLabel>
          <Select
          
          className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={gender}
            onChange={handleGender}
            label="Gender"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>

        <FormControl
          size="small"
          style={{ width: "320px" }}
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel className={classes.inputlabel} id="demo-simple-select-outlined-label">
            Occupation
          </InputLabel>
          <Select
          className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={occupation}
            onChange={handleOccupation}
            label="Occupation"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Full-time Employee">Full-time Employee</MenuItem>
            <MenuItem value="Part-time Employee">Part-time Employee</MenuItem>
            <MenuItem value="Self-Employed">Self-Employed</MenuItem>
            <MenuItem value="Unemployed">Unemployed</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl
          size="small"
          style={{ width: "320px" }}
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel className={classes.inputlabel} id="demo-simple-select-outlined-label">
            Area of Interest
          </InputLabel>
          <Select
          className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={areaOfInterest}
            onChange={handleAreaOfInterest}
            label="Area of Interest"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Incident Response">Incident Response</MenuItem>
            <MenuItem value="Penetration Testing">Penetration Testing</MenuItem>
            <MenuItem value="Security Engineer">Security Engineer</MenuItem>
            <MenuItem value="Forensics">Forensics</MenuItem>
            <MenuItem value="Research">Research</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <SubmitButton onClick={updateChanges} style={{ textTransform: "none" }}>
          Update Changes
        </SubmitButton>
      </Box>
      <br></br>
      <Box  padding={5} style={{color: "#fff", backgroundColor: "#1a2332", maxWidth: "1400px", }}>
        <Typography variant="h5">Social Info</Typography>
        <Typography style={{ color: "#898c94" }} variant="subtitle1">
          Add your social accounts to stay in touch with other members
        </Typography>
        <br></br>
        <br></br>
        <TwitterIcon style={IconStyle} />
        <TextField
        InputProps={{
          style: {
            color: "#fff",
            backgroundColor: "#141d2b",
          },
        }}
        InputLabelProps={{
          style: {fontWeight: "bold",
          letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "none"},
        }}
          defaultValue={twitter}
          onChange={handleTwitter}
          style={{ width: "295px" }}
          size="small"
          variant="outlined"
          label="Twitter"
        />
        <br></br>
        <br></br>
        <InstagramIcon style={IconStyle} />
        <TextField
        InputProps={{
          style: {
            color: "#fff",
            backgroundColor: "#141d2b",
          },
        }}
        InputLabelProps={{
          style: {fontWeight: "bold",
          letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "none"},
        }}
        defaultValue={instagram}
        onChange={handleInstagram}
          style={{ width: "295px" }}
          size="small"
          variant="outlined"
          label="Instagram"
        />
        <br></br>
        <br></br>
        <GitHubIcon style={IconStyle} />
        <TextField
        InputProps={{
          style: {
            color: "#fff",
            backgroundColor: "#141d2b",
          },
        }}
        InputLabelProps={{
          style: {fontWeight: "bold",
          letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "none"},
        }}
        defaultValue={github}
        onChange={handleGithub}
          style={{ width: "295px" }}
          size="small"
          variant="outlined"
          label="Github"
        />
        <br></br>
        <br></br>
        <LinkedInIcon style={IconStyle} />
        <TextField
        InputProps={{
          style: {
            color: "#fff",
            backgroundColor: "#141d2b",
          },
        }}
        InputLabelProps={{
          style: {fontWeight: "bold",
          letterSpacing: "1.5px", color: "#9fef00", fontSize: "12px", textTransform: "none"},
        }}
        defaultValue={linkedin}
        onChange={handleLinkedin}
          style={{ width: "295px" }}
          size="small"
          variant="outlined"
          label="Linkedin"
        />
        <br></br>
        <br></br>
        <SubmitButton onClick={updateSocials} style={{ textTransform: "none" }}>
          Update Socials
        </SubmitButton>
      </Box>
    </div>
  );
}

export default AboutProfile;
