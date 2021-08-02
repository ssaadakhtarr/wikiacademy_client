import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Swal from "sweetalert2";


const JoinButton = withStyles({
  root: {
    fontWeight: "bold",
    fontSize: "16px",
    padding: "3% 0",
    margin: "auto",
    backgroundColor: "transparent",
    color: "#9fef00",
    border: "1px solid #9fef00",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#9fef00",
      color: "#1e2633",
    },
  },
})(Button);

const HintButton = withStyles({
  root: {
    fontWeight: "bold",
    fontSize: "16px",
    padding: "6% 0",
    margin: "auto",
    backgroundColor: "transparent",
    color: "#db9c09",
    border: "1px solid #db9c09",
    "&:hover": {
      fontWeight: "bold",
      backgroundColor: "#db9c09",
      color: "#1e2633",
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    backgroundColor: "#141d2b",

    // minWidth: 360,
    maxWidth: 500,
    minHeight: 425,
    // maxHeight: 425,
    transition: "0.5s all ease",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)",
    },
  },
  media: {
    height: 200,
  },
  content: {
    maxnHeight: 560,
  },
});

function Labs({ img, name, desc, path, hint }) {

  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Box align="center" padding={1}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={img} />
            <CardContent
              className={classes.content}
              style={{
                backgroundColor: "#141d2b",
                color: "white",
                minHeight: "130px",
              }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                style={{ color: "#cad2e2" }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
                {desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions  style={{ backgroundColor: "#141d2b",  }}>
           <Grid container spacing={1}>
              <Grid item xs={8}>
                <JoinButton
                onClick={()=>{
                  history.push(`/labs/${path}`)
                }}
                  
                  fullWidth
                  size="small"
                  
                >
                  Start
                </JoinButton>
              </Grid>
            
              <Grid item xs={4}>
                <HintButton
                size="small"
                  onClick={() => {
                    Swal.fire({
                      icon: "info",
                      title: "Hint",
                      text: `${hint}`,
                    });
                  }}
                  fullWidth
                >
                  Hint
                </HintButton>
              </Grid>
            </Grid>
            
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default Labs;
