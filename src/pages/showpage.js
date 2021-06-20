import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Theme} from '../themes';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const Theme1 = makeStyles((theme)=>({
    root: {
        height:"100vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "wheat",
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
        height: "160px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: "5px",
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
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#e8b651",
        borderRadius: "13px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#e3e3e3",
        // transition: "width 2s, height 4s", 
        '&:hover':{
            backgroundColor: "#fff",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#6b5d41",
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: "brown",
            },
            '& $linkMsgCont > *': {
                color: "brown",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.25rem",
        color: "brown",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",
        
        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Fira Sans",
            color: "brown",
        },
    }
}));
const Theme2 = makeStyles((theme)=>({
    root: {
        height:"100vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: LocalThemes[1].Bg.color,
        backgroundColor: "#fff",
        backgroundImage: "url(https://thumbs.gfycat.com/DeterminedLimpHornbill-small.gif)",
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
        height: "160px",
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
        height: '45vh',
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
        // transition: "width 2s, height 4s", 
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

const ShowPage=()=>{
    // const theme1 = useStyles();
    const [user,setUser] = useState({
        email: "",
        username: "",
        name: "",
        bio: "",
        themes: "1",
        links: [{
            title:"",
            link:"",
            icon:"",
            visible:"",
        }],
        avatar:"",
    });
    useEffect(()=>{
        const request=async()=>{
        var Slno=2;
        const data=await axios.post("http://localhost:5000/mySocioCard", {username: "Amit_Shawuxzvf9"})
        .then(res=>{
            console.log(res.data);
            setUser(res.data[0]);
        })
        .catch(err=>{
            console.log(err);
        })
        }
        request();
    },[]);
    const classes = eval("Theme"+user.themes+"()");
    return(
        <>
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
                        <Grid item className={classes.userNameCont} xs={12}>
                            <Typography className={classes.userName}>@IssacXid</Typography>
                        </Grid>
                        <Grid item className={classes.userBioCont}>
                            <Typography className={classes.userBio}>
                                Sophomore at IIEST Shibpur | IT Undergrad | @MLEnthusiat | @BuddingWebDeveloper
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
                                    View my Insta
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.linkCard} fullWidth>
                            <Grid item container className={classes.linkLogoCont} xs={2}>
                                <FacebookIcon className={classes.linkLogo}/>
                            </Grid>
                            <Grid item container className={classes.linkMsgCont} xs={8}>
                                <Typography className={classes.linkMsg} xs={10}>
                                    View my facebook
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>
        </>
    );
};

export default ShowPage;

// var currTheme= {
//         Slno: 1,
//         Bg: {
//             color: "wheat",
//             img: "",
//         },
//         Avatar: {
//             borderWidth: "5px",
//             borderStyle: "solid",
//             borderColor: "green",
//         },
//         Username: {
//             fontSize: "1.35rem",
//             fontFamily: "Lato",
//             fontWeight: "400",
//             color: "black",
//         },
//         Userbio: {
//             fontSize: "1.10rem",
//             fontFamily: "Lato",
//             fontWeight: "400",
//             color: "black",
//         },
//         LinkCard: {
//             backgroundColor:"#e8b651",
//             borderRadius: "13px",
//             borderWidth: "2px",
//             borderStyle: "solid",
//             borderColor: "#e3e3e3",
//             onHover:{
//                 backgroundColor: "#fff",
//                 borderWidth: "2px",
//                 borderStyle: "solid",
//                 borderColor: "#6b5d41",
//                 msgColor: "brown"
//             },
//         },
//         LinkLogo: {
//             fontSize: "2.25rem",
//             color: "brown",
//         },
//         LinkMsg: {
//             fontSize: "1.35rem",
//             fontFamily: "Fira Sans",
//             color: "brown",
//         },
//     };