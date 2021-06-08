import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        padding: '0 3px',
        color:'#fff',
        backgroundColor: '#1f263c'
    },
    toolbar: {
        minHeight:'44px',
    },
    button: {
        color: 'white'
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
                <Button className={classes.button}>Links</Button>
                <Button className={classes.button}>Appearance</Button>
                <Button className={classes.button}>Settings</Button>
            </Grid>
                
            </Toolbar>
        </AppBar>
    )
}