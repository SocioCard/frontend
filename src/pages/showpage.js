import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import { IconPickerItem } from 'react-fa-icon-picker';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { themeLogoColor } from "../data/localthemes";
import { GuardSpinner } from "react-spinners-kit";
import props from '../data/themes.json';
import Loader from "./loader";


const useStyles = makeStyles({
    root: props => ({
        minHeight: "100vh",
        //maxHeight:"500vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: props.backgroundColor,
        backgroundImage: props.background,
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        //display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    mainCont: (props,theme) => ( {
        minHeight:"100vh",
        height:"100%",
        maxWidth:'600px',
        // [theme.breakpoints.up('md')]: {
        //     width: '60vw',
        // },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
    }),
    avatarCont: props => ( {
        height: "140px",
        width: "auto",
    }),
    avatar: props => ( {
        height: "120px",
        width: "120px",
        borderWidth: "0",
        borderStyle: "dotted",
        borderColor: props.borderColor,
    }),
    userDetails: props => ( {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    }),
    userName: props => ( {
        fontSize: "1.35rem",
        fontFamily: props.fontFamily,
        fontWeight: "600",
        color: props.headerFontColor,
    }),
    userBio: props => ( {
        fontSize: "1.15rem",
        fontFamily: props.fontFamily,
        fontWeight: "500",
        color: props.headerFontColor,
    }),
    linkList: props => ( {
        //height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    }),
    linkCard: props => ( {
        minHeight:"70px",
        cursor:"pointer",
        margin: "10px 0",
        color: props.buttonFontColor,
        backgroundColor:props.foregroundColor,
        borderRadius: props.borderRadius,
        borderWidth: props.borderWidth,
        borderStyle: "solid",
        borderColor: props.borderColor,
        boxShadow: "6px 6px 7px 0px rgba(31,29,29,0.6)",
        '&:hover':{
            //backgroundColor: props.foregroundHoverColor,
            transform: "scale(1.03, 1.09)",
            //color: props.buttonHoverFontColor,
            '& *': {
                //color: props.borderColor,
            },
        },
    }),
    linkLogoCont: props => ( {
        paddingLeft: '12px',
        alignContent:"center",
    }),
    linkMsgCont: props => ( {
        margin: "0 10px",
        textAlign: "center",
        justifyContent: 'center',
        alignContent:"center",

        '& > *':{
            fontSize: "1.35rem",
            fontFamily: props.fontFamily,
        },
    }),
});

const ShowPage=()=>{
    var url = window.location.href;
    var id = url.split("/")[3];
    const [user,setUser] = useState();
    const [themeId,setThemeId] = useState("0");
    const [access, setAccess]=useState(-1);
    const username=useHistory().location.pathname.split("/")[1];
    useEffect(()=>{
        const request=async()=>{
        var Slno=2;
        const data=await axios.post("http://localhost:5000/mySocioCard", {username: username})
        .then(res=>{
            setUser(res.data[0]);
            setAccess(1);
            setThemeId(res.data[0].themes);
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
    const classes = useStyles(props[themeId-1]);
    return(
        <>
        {access===-1?
            //<h2>Loading, Please wait....</h2>:
            <Loader />:
            (access===0?
                <h2>Sorry... No user found</h2>
                :
                <Grid container className={classes.root}>
                <Grid item container className={classes.mainCont}>
                    <Grid item className={classes.avatarCont}>
                        <Avatar
                            className={classes.avatar}
                            alt={defaultImg} 
                            src={user.image}
                        />
                    </Grid>
                    <Grid item className={classes.userDetails} container>
                        <Grid item className={classes.userNameCont} xs={12} >
                            <Typography className={classes.userName} style={{textAlign: "center"}}>{user.name}</Typography>
                        </Grid>
                        <Grid item className={classes.userBioCont}>
                            <Typography className={classes.userBio} style={{textAlign: "center", paddingBottom:"35px"}}>
                                {user.bio}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.linkList}>
                        {
                            user.links.map((item, index) => (
                                <Grid item container className={classes.linkCard} onClick={()=>{window.open(item.link, "_blank")}} href={item.link} key={index}>
                                    {      
                                        (item.icon!="FaImages")
                                        ?<Grid item container className={classes.linkLogoCont} xs={2}>
                                            <IconPickerItem icon={item.icon} 
                                            size={"2 rem"} 
                                            containerStyles={{
                                                color:props[themeId-1].buttonFontColor,
                                                '&:hover':{
                                                   // color: props[themeId].buttonHoverFontColor,
                                                },
                                            }}/>
                                        </Grid>
                                        :
                                        <Grid item container className={classes.linkLogoCont} xs={2}>
                                        </Grid>
                                        
                                    }
                                    <Grid item container className={classes.linkMsgCont} xs={8}>
                                        <Typography className={classes.linkMsg} xs={10}>
                                            {item.title}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>                
            </Grid>
            )
        }
        </>
    );
};

export default ShowPage;