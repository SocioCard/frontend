import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useEffect, useState } from "react";
import axios from "axios";
// import {Theme} from '../themes';

const Theme1 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#FFE5E2",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#E93B81",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme2 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#fff",
        backgroundImage: "url(https://i.stack.imgur.com/ReAxi.gif)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        //backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme3 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#FFF5AB",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#867AE9",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme4 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#C6FFC1",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#FFFBDF",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "rgba(227, 227, 227,1)",
    },
}));

const Theme5 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#C0FEFC",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "2px 0",
        backgroundColor:"#3EDBF0",
        borderRadius: "13px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#77ACF1",
    },
}));

const Theme6 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#f9f9f9",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        border: "2px solid #ccc",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme7 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundImage: "url(https://wallpaperaccess.com/full/1077319.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1.5px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme8 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        background: 'rgb(75,76,79)',
        background: 'linear-gradient(155deg, rgba(75,76,79,1) 0%, rgba(36,36,36,1) 29%, rgba(29,29,29,1) 84%)',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "#C5911A",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1.5px 0",
        backgroundColor:"#393939",
        borderRadius: "13px",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderColor: "#C5911A",
    },
}));

const Theme9 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#f9f9f9",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        border: "2px solid #ccc",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#DB0144",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme10 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 99%)',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor: '#310e68',
        backgroundImage: 'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)',
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#2E1832",
    }
}));

const Theme11 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#fff",
        backgroundImage: "url(https://cdn.statically.io/img/giffiles.alphacoders.com/209/209686.gif)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        //backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const Theme12 = makeStyles((theme)=>({
    root: {
        padding:"3vh 2.5vw 5vh 2.5vw",
        backgroundColor: "#fff",
        backgroundImage: "url(https://i.pinimg.com/originals/62/f6/0e/62f60eb00055ce5a3580bd91559f9f94.gif)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        //backgroundAttachment: "fixed",
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        //maxHeight:"auto",
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "50px",
        width: "auto",
        marginBottom: '25px',
    },
    avatar: {
        height: "50px",
        width: "50px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"25px",
        margin: "1px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
    },
}));

const ThemeShowcase=({theme})=>{
    const classes = eval("Theme"+theme+"()");
    // console.log("Theme"+theme+"()");
    // const classes = Theme2();
    return(
        <>
            <Grid container className={classes.root}>
                <Grid item container className={classes.mainCont}>
                    <Grid item className={classes.avatarCont}>
                        <Avatar
                            className={classes.avatar}
                        />
                    </Grid>
                    <Grid item container className={classes.linkList}>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>
        </>
    );
};

export default ThemeShowcase;