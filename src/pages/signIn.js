import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.only("xs")]: {
      width: "80%"
    },
    [theme.breakpoints.only("sm")]: {
      width: "50%"
    },
    [theme.breakpoints.only("md")]: {
      width: "35%"
    },
    [theme.breakpoints.only("lg")]: {
      width: "25%"
    },
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "20px"
  },
  title: {
    margin: "0 auto",
    marginTop: "10px",
    marginBottom: "10px"
  },
  options: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    marginBottom: "10px",
    marginTop: "10px"
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    padding: "5px",
    backgroundColor: "grey",
    borderRadius: "5px"
  },
  buttonIcon: {
    alignSelf: "center",
    margin: "5px",
    width: "20%",
    fontSize: "1.5rem"
  },
  buttonText: {
    alignSelf: "center",
    fontSize: "0.9rem"
  }
}));

export default function SignIn() {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.container}>
        <h1 className={classes.title}>Welcome</h1>
        <div className={classes.options}>
          <div style={{ cursor: "pointer" }}>
            <Paper style={{ margin: "10px 0", width: "100%" }}>
              <div className={classes.buttonContainer}>
                <TwitterIcon className={classes.buttonIcon} />
                <div className={classes.buttonText}>LogIn with Twitter</div>
              </div>
            </Paper>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Paper style={{ margin: "10px 0", width: "100%" }}>
              <div className={classes.buttonContainer}>
                <FacebookIcon className={classes.buttonIcon} />
                <div className={classes.buttonText}>LogIn with Facebook</div>
              </div>
            </Paper>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Paper style={{ margin: "10px 0", width: "100%" }}>
              <div className={classes.buttonContainer}>
                <InstagramIcon className={classes.buttonIcon} />
                <div className={classes.buttonText}>LogIn with Instagram</div>
              </div>
            </Paper>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
