import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import {Theme} from '../themes';

const Theme1 = makeStyles((theme)=>({
    root: {
        minHeight: "100vh",
        maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: "#5CDB95",
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
        color: "#edf5e1",
    },
    userBio: {
        fontSize: "1.10rem",
        fontFamily: "Ubuntu",
        fontWeight: "400",
        color: "#edf5e1",
    },
    linkList: {
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:"#05386B",
        // borderRadius: "13px",
        // borderWidth: "2px",
        // borderStyle: "solid",
        // borderColor: "#fff",
        // transition: "width 2s, height 4s", 
        "boxShadow": "6px 6px 7px 0px rgba(31,29,29,0.6)",
        '&:hover':{
            backgroundColor: "#fff",
            // borderWidth: "2px",
            // borderStyle: "solid",
            // borderColor: "#6b5d41",
            transform: "scale(1.03, 1.09)",
            '& *': {
                color: "#05386B",
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: "2.25rem",
        color: "#fff",
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: "Ubuntu",
            color: "#fff",
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

const ShowPage=()=>{
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
    const classes = user!==undefined?eval("Theme"+user.themes+"()"):Theme1();
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
                    </Grid>
                </Grid>                
            </Grid>
            )
        }
        </>
    );
};

export default ShowPage;