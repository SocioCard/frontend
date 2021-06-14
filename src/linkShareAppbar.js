import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        padding: '0 3px',
        color:'#fff',
        backgroundColor: '#1f263c'
    },
    link: {
        color: '#03D084',
        //height: '20px'
        marginRight: '12px',
    },
    onelink: {
        marginRight: '4px',
    }
}));

export default function LinkShareAppbar(){
    const classes = useStyles();

    return(
        <AppBar className={classes.appbar} position="static">
            <Toolbar style={{minHeight:'44px'}}>
            <Typography variant="h8" className={classes.onelink}>
                Onelink
            </Typography>
                <a className={classes.link} href="https://onelink.io/imtushar" target="_blank"><p style={{margin:0}}>https://onelink.io/imtushar</p></a>
            
            <Button size="small" variant="outlined" color="primary">Share</Button>
            </Toolbar>
        </AppBar>
    )
}