import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
import Profile from "./profile";

const useStyles = makeStyles((theme) => ({
  cont: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    minHeight:'100vh',
    //backgroundColor: "rgb(22,26,43)",
    // [theme.breakpoints.only("md")]:{
    //   display:'none',
    // },
  },
    profileCont: {
    borderRadius: "20px",
    backgroundColor: "#fff",
    padding: "10px 15px",
  },
}));

const Appearance = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} direction='column' justify='flex-center' alignItems='center'>
        <Grid item xs={11} container direction='column' alignItems='flex-start'>
          <h3 style={{"color":"white", "margin":"10px 0 0 10px"}}>Profile</h3>
        </Grid>
        <Grid
          item
          xs={11}
          container
          className={classes.profileCont}
          spacing={1}
        >
          <Profile />
        </Grid>
      </Grid>
    </div>
  );
};

export default Appearance;
