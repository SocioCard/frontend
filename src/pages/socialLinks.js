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

export default function SocialLink({user, setUser}){
    //console.log(user.social);

    const handleChange = (event) => {
        console.log(event.target.name+" "+event.target.value)
        setUser({ social: [ ...(user.social), [event.target.name]: event.target.value]});
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
                    value={user.social.instagram}
                    name="instagram"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Instagram" />
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
                    value={user.social.facebook}
                    name="facebook"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Facebook" />
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
                    value={user.social.twitter}
                    name="twitter"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Twitter" />
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
                    value={user.social.youtube}
                    name="youtube"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Youtube" />
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
                    value={user.social.pinterest}
                    name="pinterest"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Pinterest" />
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
                    value={user.social.linkedin}
                    name="linkedin"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="LinkedIn" />
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
                    value={user.social.reddit}
                    name="reddit"
                    onChange={handleChange}
                    id="input-with-icon-grid" placeholder="Reddit" />
                </Grid>
                </Grid>
            </div>
        </Grid>
    );

}