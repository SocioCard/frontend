import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, TextField, Button} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:'white', margin:'40px'}}>
      {'Copyright © '}
      <Link style={{color:'white'}} href="http://3.108.100.131:5000/">
        SocioCard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#060E21',
    color:'white',
  },
  subscribeButton: {
    backgroundColor: '#3ee577',
    backgroundImage: 'linear-gradient(315deg, #3ee577 0%, #1bd1a6 74%)',
    color: '#fff',
    borderRadius: '20px',
    lineHeight: "1.8",
    margin:'10px 0 20px 0',
  },
  textfield: {
    backgroundColor: '#fff',
    color: '#060E21',
    borderRadius: '20px',
    width:'250px',
    height: '40px',
    border:'none',
    outline:'none',
    margin:'10px 0',
    padding: '0 10px'
  },
  icon:{
      color: '#060E21',
      margin: '5px 0px 30px 10px',
      fontSize: '25px',
      padding:'5px',
      border: '2px solid #3ee577',
      borderRadius: '20px',
      backgroundColor: '#3ee577',
      backgroundImage: 'linear-gradient(315deg, #3ee577 0%, #1bd1a6 74%)',
  },
  links: {
      textDecoration: 'none',
      color:'white',
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [email,setEmail] = useState('');

  const handleChange = (e) => {
      setEmail(e.target.value)
  }

  const handleClick = (e) => {
    if(email!=''){
        e.preventDefault();
        
        axios.post("http://localhost:5000/subscribeNewsletter", {email})
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
        setEmail("");
    }
  }

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          >
              <Grid
              container xs="12" sm="8" md="5"
              direction="column"
              justify="center"
              alignItems="flex-start"
              >
                  <h2>Subscribe to our Newsletter</h2>
                  <input className={classes.textfield} value={email} onChange={handleChange} placeholder="Enter Email"/>
                  <Button onClick={handleClick} className={classes.subscribeButton} variant="outlined">Subscribe</Button>
              </Grid>

              <Grid
              style={{marginTop:'20px'}}
              container xs="12" sm="4" md="3"
              direction="column"
              justify="center"
              alignItems="flex-start"
              >
                  <a href='/' className={classes.links}><p>Home</p></a>
                  <a href='#' className={classes.links}><p>Blog</p></a>
                  <a href='#' className={classes.links}><p>Terms and Conditions</p></a>
                  <a href='#' className={classes.links}><p>Privacy Policy</p></a>
                  <a href='/about' className={classes.links}><p>About Us</p></a>
                  <a href='#' className={classes.links}><p>Contact</p></a>
              </Grid>

              <Grid
              style={{marginTop:'20px'}}
              container xs="12" md="4"
              direction="column"
              justify="center"
              alignItems="flex-end"
              >
                  <h1>SocioCard</h1>
                  <div>
                  <a href='#'><FacebookIcon className={classes.icon}/></a>
                  <a href='#'><TwitterIcon className={classes.icon}/></a>
                  <a href='#'><InstagramIcon className={classes.icon}/></a>
                  </div>
              </Grid>

              <Copyright/>

          </Grid>
        </Container>
      </footer>
    </div>
  );
}