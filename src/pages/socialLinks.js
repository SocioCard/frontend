import React,{useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { TextField, Grid } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor: '#f9f9f9',
        margin: '20px 0'
    },
    margin: {
        //width:'250px',
        margin: '12px',
    },
}));

export default function SocialLink({user, temp, setTemp}){
    console.log(temp);
    const handleChange = (event) => {
        setTemp({ ...(temp), [event.target.name]: event.target.value});
    };

    const classes = useStyles();
    return(
        <Grid container direction='column' justify='center' alignItems="center" className={classes.root}>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <InstagramIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.instagram}
                    name="instagram"
                    onChange={handleChange}
                    id="instagram" placeholder="Instagram" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <FacebookIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.facebook}
                    name="facebook"
                    onChange={handleChange}
                    id="facebook" placeholder="Facebook" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <MailIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.mail}
                    name="mail"
                    onChange={handleChange}
                    id="mail" placeholder="Mail" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <CallIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.call}
                    name="call"
                    onChange={handleChange}
                    id="call" placeholder="Call" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <TwitterIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.twitter}
                    name="twitter"
                    onChange={handleChange}
                    id="twitter" placeholder="Twitter" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <YouTubeIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.youtube}
                    name="youtube"
                    onChange={handleChange}
                    id="youtube" placeholder="Youtube" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <PinterestIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.pinterest}
                    name="pinterest"
                    onChange={handleChange}
                    id="pinterest" placeholder="Pinterest" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <LinkedInIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.linkedin}
                    name="linkedin"
                    onChange={handleChange}
                    id="linkedin" placeholder="LinkedIn" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <RedditIcon />
                </Grid>
                <Grid item>
                    <TextField
                    value={!temp?'':temp.reddit}
                    name="reddit"
                    onChange={handleChange}
                    id="reddit" placeholder="Reddit" />
                </Grid>
                </Grid>
            </div>
        </Grid>
    );

}