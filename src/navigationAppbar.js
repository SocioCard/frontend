import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

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
                <Link to="/tushar/admin/links"><Button className={classes.button}>Links</Button></Link>
                <Link to="/tushar/admin/profile"><Button className={classes.button}>Appearance</Button></Link>
                <Link><Button className={classes.button}>Settings</Button></Link>
            </Grid>
                
            </Toolbar>
        </AppBar>
    )
}