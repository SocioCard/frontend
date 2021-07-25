import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import SocialShare from "../components/socialShare";

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: "0 3px",
    color: "#fff",
    //backgroundColor: '#721D88'
    backgroundColor: "#404040",
    //backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',
  },
  link: {
    color: "#03D084",
    //height: '20px'
    maxWidth: "56vw",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "inline-block",
    textOverflow: "ellipses",
    marginRight: "12px",
  },
  onelink: {
    marginRight: "4px",
  },
}));

export default function LinkShareAppbar(){
    const classes = useStyles();
    var url = window.location.href;
    var id = url.split("/")[3];
    var link="https://main.d22qidw6d2y4nc.amplifyapp.com/"+id;
    var linkDisp="Share My Link";
    return(
        <AppBar className={classes.appbar} style={{alignItems: 'center',}} position="static">
            <Toolbar style={{minHeight:'44px'}}>
            <Typography variant="h8" className={classes.onelink}>
                Onelink
            </Typography>
                <a className={classes.link} href={link} target="_blank"><p style={{margin:0}}>{linkDisp}</p></a>
            <SocialShare link={link}/>
            </Toolbar>
        </AppBar>
    )
}
