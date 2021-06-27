import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Theme1 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#FFE5E2",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "dotted",
        borderColor: "#05386B",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.35rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#a3295a",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#a3295a",
    },
    linkList: {
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#E93B81",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
        boxShadow: "6px 6px 7px 0px rgba(31,29,29,0.6)",
        '&:hover':{
            backgroundColor: "#e3e3e3",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#E93B81",
            transform: "scale(1.03, 1.09)",
            '& *': {
                color: "#E93B81",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.25rem",
        color: "#e3e3e3",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Ubuntu",
            color: "#e3e3e3",
        },
    }
}));
const Theme2 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#fff",
        backgroundImage: "url(https://i.stack.imgur.com/ReAxi.gif)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.35rem",
        fontFamily: "Lato",
        fontWeight: "400",
        color: "black",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Lato",
        fontWeight: "400",
        color: "black",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
        '&:hover':{
            backgroundColor: "#fff",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#3d3b3c",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#3d3b3c",
            },
            '& $linkMsgCont > *': {
                color: "#3d3b3c",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#fff",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            color: "#fff",
        },
    }
}));
const Theme3 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#fffbdf",
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.45rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "black",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "black",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#575da5",
        borderRadius: "13px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
        '&:hover':{
            backgroundColor: "#dfbbb1",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "#823a92",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#7b4f91",
            },
            '& $linkMsgCont > *': {
                color: "#7b4f91",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#f7f0be",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            color: "#f7f0be",
        },
    }
}));
const Theme4 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#C6FFC1",
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.45rem",
        fontFamily: "Ubuntu",
        fontWeight: "600",
        color: "#334443",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#334443",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#eeeeee",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
        '&:hover':{
            backgroundColor: "#fffbdf",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#fffbdf",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#334443",
            },
            '& $linkMsgCont > *': {
                color: "#334443",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#34656d",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Ubuntu",
            color: "#34656d",
        },
    }
}));
const Theme5 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#f9f9f9",
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.65rem",
        fontFamily: "Ubuntu",
        fontWeight: "600",
        color: "#334443",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#334443",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#3d3b3c",
        borderRadius: "13px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "#f9f9f9",
        '&:hover':{
            backgroundColor: "#fffbdf",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#3d3b3c",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#334443",
            },
            '& $linkMsgCont > *': {
                color: "#334443",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#f9f9f9",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Ubuntu",
            color: "#f9f9f9",
        },
    }
}));
const Theme6 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#c0fefc",
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.45rem",
        fontFamily: "Ubuntu",
        fontWeight: "600",
        color: "#334443",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#334443",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#03d5ff",
        borderRadius: "0px",
        borderWidth: "6px",
        borderStyle: "double",
        borderColor: "#2a2d34",
        '&:hover':{
            backgroundColor: "#fee9e1",
            borderWidth: "4px",
            borderStyle: "double",
            borderColor: "#ff6978",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#ff6978",
            },
            '& $linkMsgCont > *': {
                color: "#ff6978",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#2a2d34",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Ubuntu",
            color: "#2a2d34",
        },
    }
}));
const Theme7 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#fff",
        backgroundImage: "url(https://wallpaperaccess.com/full/1077319.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.55rem",
        fontFamily: "Ubuntu",
        fontWeight: "800",
        color: "#e5e5e5",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#e5e5e5",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#fca311",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#daad00",
        '&:hover':{
            backgroundColor: "#14213d",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#e5e5e5",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#fca311",
            },
            '& $linkMsgCont > *': {
                color: "#e5e5e5",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#284b63",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontWeight: "600",
            fontFamily: "Ubuntu",
            color: "#14213d",
        },
    }
}));
const Theme8 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        background: 'linear-gradient(155deg, rgba(75,76,79,1) 0%, rgba(36,36,36,1) 29%, rgba(29,29,29,1) 84%)',
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.55rem",
        fontFamily: "Ubuntu",
        fontWeight: "800",
        color: "#e5e5e5",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#e5e5e5",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#fca311",
        borderRadius: "35px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "#fca311",
        '&:hover':{
            backgroundColor: "#14213d",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#e5e5e5",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#fca311",
            },
            '& $linkMsgCont > *': {
                color: "#fca311",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#284b63",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontWeight: "600",
            fontFamily: "Ubuntu",
            color: "#14213d",
        },
    }
}));
const Theme9 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#f9f9f9",
        backgroundImage: "",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.55rem",
        fontFamily: "Ubuntu",
        fontWeight: "800",
        color: "#333333",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#333333",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#b90504",
        borderRadius: "0px",
        borderWidth: "6px",
        borderStyle: "double",
        borderColor: "#e8e8e8",
        '&:hover':{
            backgroundColor: "#e8e8e8",
            borderWidth: "6px",
            borderStyle: "double",
            borderColor: "#990100",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#990100",
            },
            '& $linkMsgCont > *': {
                color: "#990100",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#e8e8e8",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            fontWeight: '600',
            color: "#e8e8e8",
        },
    }
}));
const Theme10 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#f9f9f9",
        backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 99%)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "1.55rem",
        fontFamily: "Ubuntu",
        fontWeight: "800",
        color: "#edd5ff",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#cdb5ff",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        background:"linear-gradient(316deg, #310e68 0%, #5f0f40 74%)",
        borderRadius: "20px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "#e8e8e8",
        '&:hover':{
            background: "linear-gradient(316deg, #dcf763 0%, #f9a03f 74%)",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "#990100",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#353434",
            },
            '& $linkMsgCont > *': {
                color: "#353434",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#e8e8e8",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            fontWeight: '600',
            color: "#e8e8e8",
        },
    }
}));
const Theme11 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#f9f9f9",
        backgroundImage: "url(https://i0.wp.com/giffiles.alphacoders.com/209/209686.gif?w=300)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "2.05rem",
        fontFamily: "Fira Sans",
        fontWeight: "600",
        color: "#efe009",
        textShadow: "7px -2px 10px #252422",
    },
    userBio: {
        fontSize: "1.20rem",
        fontFamily: "Fira Sans",
        fontWeight: "600",
        color: "#f9e437",
        textShadow: "7px -2px 10px #252422",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        background:"linear-gradient(316deg, #ffe323 0%, #e96b35 74%)",
        borderRadius: "20px",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "#e8e8e8",
        '&:hover':{
            background: "linear-gradient(316deg, #dcf763 0%, #f9a03f 74%)",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "#990100",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#353434",
            },
            '& $linkMsgCont > *': {
                color: "#353434",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#e8e8e8",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            fontWeight: '600',
            color: "#e8e8e8",
        },
    }
}));
const Theme12 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#f9f9f9",
        backgroundImage: "url(https://i.pinimg.com/originals/62/f6/0e/62f60eb00055ce5a3580bd91559f9f94.gif)",
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainCont: {
        maxHeight:"auto",
        [theme.breakpoints.up('md')]: {
            width: '60vw',
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    },
    avatarCont: {
        height: "140px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: "2.05rem",
        fontFamily: "Fira Sans",
        fontWeight: "600",
        color: "#efe009",
        textShadow: "7px -2px 10px rgba(233,182,72,1)",
    },
    userBio: {
        fontSize: "1.20rem",
        fontFamily: "Fira Sans",
        fontWeight: "600",
        color: "#f9e437",
    },
    linkList: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        background:"linear-gradient(316deg, #eb5e28 0%, #fca311 74%)",
        borderRadius: "20px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "#e8e8e8",
        '&:hover':{
            background: "linear-gradient(316deg, #dcf763 0%, #f9a03f 74%)",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "#990100",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "#353434",
            },
            '& $linkMsgCont > *': {
                color: "#353434",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.35rem",
        color: "#e8e8e8",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            fontWeight: '600',
            color: "#e8e8e8",
        },
    }
}));




const ShowPage=()=>{
    var url = window.location.href;
    var id = url.split("/")[3];
    const [user,setUser] = useState();
    const [access, setAccess]=useState(-1);
    const username=useHistory().location.pathname.split("/")[1];
    useEffect(()=>{
        const request=async()=>{
        var Slno=2;
        const data=await axios.post("http://localhost:5000/mySocioCard", {username: username})
        .then(res=>{
            console.log(res.data);
            setUser(res.data[0]);
            setAccess(1);
        })
        .catch(err=>{
            console.log(err);
            setAccess(0);
        })
        }
        request();
    },[]);
    if (user!==undefined)
    console.log(user.themes)
    const classes = (user!==undefined)?eval("Theme"+user.themes+"()"):Theme1();
    // const classes = access?getClass():Theme1();
    return(
        <>
        {access===-1?
            <h2>Loading, Please wait....</h2>:
            (access===0?
                <h2>Sorry... No user found</h2>
                :
                <Grid container className={classes.root}>
                <Grid item container className={classes.mainCont}>
                    <Grid item className={classes.avatarCont}>
                        <Avatar
                            className={classes.avatar}
                            alt={defaultImg} 
                            src={defaultImg}
                        />
                    </Grid>
                    <Grid item className={classes.userDetails} container>
                        <Grid item className={classes.userNameCont} xs={12} >
                            <Typography className={classes.userName} style={{"text-align": "center"}}>{user.name}</Typography>
                        </Grid>
                        <Grid item className={classes.userBioCont}>
                            <Typography className={classes.userBio} style={{"text-align": "center", "paddingBottom":"35px"}}>
                                {user.bio}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.linkList}>
                        <Grid item container className={classes.linkCard}>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <InstagramIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[0].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[1].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard}>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <InstagramIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[0].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[1].title}
                                </Typography>
                            </Grid>
                        </Grid><Grid item container className={classes.linkCard}>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <InstagramIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[0].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[1].title}
                                </Typography>
                            </Grid>
                        </Grid><Grid item container className={classes.linkCard}>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <InstagramIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[0].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[1].title}
                                </Typography>
                            </Grid>
                        </Grid><Grid item container className={classes.linkCard}>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <InstagramIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[0].title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    {user.links[1].title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>
            )
        }
        </>
    );
};

export default ShowPage;