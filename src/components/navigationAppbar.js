import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

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
        color: '#fff',
        textDecoration: 'none'
    }
}));

export default function NavigationAppbar({active, user}){
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
                <Link style={{textDecoration: 'none'}} to={`/${user}/admin/links`}><Button className={classes.button}>Links</Button></Link>
                <Link style={{textDecoration: 'none'}} to={`/${user}/admin/profile`}><Button className={classes.button}>Appearance</Button></Link>
                <Link style={{textDecoration: 'none'}} to={`/${user}/admin/settings`}><Button className={classes.button}>Settings</Button></Link>
            </Grid>
                
            </Toolbar>
        </AppBar>
    )
}