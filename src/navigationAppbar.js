import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        padding: '0 3px',
        color:'#1641db',
        //backgroundColor: '#1f263c'
        backgroundColor: 'rgba(0,0,0,0)',
        //backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',
    },
    toolbar: {
        minHeight:'44px',
    },
    button: {
        color: '#fff'
    }
}));

export default function NavigationAppbar(){
    const classes = useStyles();

    return(
        <AppBar className={classes.appbar} position="static">
            <Toolbar className={classes.toolbar}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Button className={classes.button}><b>Links</b></Button>
                <Button className={classes.button}><b>Profile</b></Button>
                <Button className={classes.button}><b>Settings</b></Button>
            </Grid>
                
            </Toolbar>
        </AppBar>
    )
}