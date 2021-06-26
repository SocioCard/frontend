import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Theme1, Theme2, Theme3, Theme4, Theme5, Theme6, Theme7, Theme8, Theme9, Theme10, Theme11, Theme12} from '../components//themes.js';

// import {Theme} from '../themes';

const ShowPage=()=>{
    const [user,setUser] = useState({});
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
    // const classes = eval("Theme1"+"()");
    const getClass=()=>{
        if(user.themes==="1"){
            return Theme1();
        }else if(user.themes==="2"){
            return Theme2();
        }else if(user.themes==="3"){
            return Theme3();
        }else if(user.themes==="4"){
            return Theme4();
        }else if(user.themes==="5"){
            return Theme5();
        }else if(user.themes==="6"){
            return Theme6();
        }else if(user.themes==="7"){
            return Theme7();
        }else if(user.themes==="8"){
            return Theme8();
        }else if(user.themes==="9"){
            return Theme9();
        }else if(user.themes==="10"){
            return Theme10();
        }else if(user.themes==="11"){
            return Theme11();
        }else{
            return Theme12();
        }
    }
    const classes = access?getClass():Theme1();
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
                            <Typography className={classes.userName} style={{"text-align": "center"}}>@Issd</Typography>
                        </Grid>
                        <Grid item className={classes.userBioCont}>
                            <Typography className={classes.userBio} style={{"text-align": "center", "paddingBottom":"35px"}}>
                                Sophomore at IIEST Shibpur | IT Undergrad | @MLEnthusiast | @BuddingWebDeveloper
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
            )
        }
        </>
    );
};

export default ShowPage;