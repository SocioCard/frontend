import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import TwitterLogin from "react-twitter-login";
import {FaGoogle} from 'react-icons/fa';
import FacebookIcon from "@material-ui/icons/Facebook";
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from 'axios';

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
    padding: "5px",
    color:'#fff',
    display:'flex',
    fontSize:'19px',
    fontFamily:'Arial',
    padding:'12px',
  },
  buttonIcon:{
    margin:'0 5px',
  },
  buttonText:{
    margin:'0 5px',
  }
}));

export default function SignIn() {
  const theme = createMuiTheme({
    palette: {
      type: "light"
    }
  });
  const classes = useStyles();
  const responseFacebook=(response)=>{
    console.log(response.accessToken);
    axios({
      method:'POST',
      url:"http://localhost:5000/facebooklogin",
      data:{userId:response.userID,accessToken:response.accessToken}
    })
    .then(res=>{
        localStorage.setItem(`token${res.data.user.username}`,res.data.token)
        // setAccess(res.data.user);
        // history.push(res.data.user.username);
        console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const responseGoogle=(response)=>{
    console.log(response);
    axios({
      method:'POST',
      url:"http://localhost:5000/googlelogin",
      data:{tokenId:response.tokenId}
    })
    .then(res=>{
        localStorage.setItem(`token${res.data.user.username}`,res.data.token)
        // setAccess(res.data.user);
        // history.push(res.data.user.username);
        console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const responseTwitter=(response)=>{
    console.log(response);
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.container}>
        <h1 className={classes.title}>Welcome</h1>
        <div className={classes.options}>
        <GoogleLogin
          clientId="769406402556-njlr65a4ujf3t6knd4dv7hj4jf0f6ihv.apps.googleusercontent.com"
          buttonText="Log in with Google"
          render={renderProps => (
            <GoogleLoginButton onClick={renderProps.onClick}/>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId="222250642836810"
          autoLoad={false}
          callback={responseFacebook}
          render={renderProps => (
            <FacebookLoginButton onClick={renderProps.onClick}/>
          )}
        />
        <TwitterLogin
          authCallback={responseTwitter}
          consumerKey="Fd0VjgL1JjCswSBKRJLOiy0md"
          consumerSecret="gWfzgs9JQh8SeP8vsHlBhPbUoimTZyXS5G8cDCa94R2b6gaHC2"
          style={{color:'black'}}
          buttonTheme="dark"
        >
          <div style={{ cursor: "pointer" }}>
            <Paper style={{ margin: "10px 0", width: "100%", background:'#00aaee' }}>
              <div className={classes.buttonContainer}>
                <TwitterIcon className={classes.buttonIcon} />
                <div className={classes.buttonText}>Log in with Twitter</div>
              </div>
            </Paper>
          </div>
          </TwitterLogin>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
