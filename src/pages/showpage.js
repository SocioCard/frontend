import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from '../static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Theme} from '../themes';

const useStyles = makeStyles((theme)=>({
    root: {
        height:"100vh",
        padding:"6vh 4vw 10vh 4vw",
        // backgroundColor: Theme[1].Bg.color,
        background: `url(${Theme[1].Bg.img}), ${Theme[1].Bg.color}`,
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
        borderWidth: Theme[1].Avatar.borderWidth,
        borderStyle: Theme[1].Avatar.borderStyle,
        borderColor: Theme[1].Avatar.borderColor,
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: Theme[1].Username.fontSize,
        fontFamily: Theme[1].Username.fontFamily,
        color: Theme[1].Username.color,
    },
    userBio: {
        fontSize: Theme[1].Userbio.fontSize,
        fontFamily: Theme[1].Userbio.fontFamily,
        fontWeight: Theme[1].Userbio.fontWeight,
        color: Theme[1].Userbio.color,
    },
    linkList: {
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:Theme[1].LinkCard.backgroundColor,
        borderRadius: Theme[1].LinkCard.borderRadius,
        borderWidth: Theme[1].LinkCard.borderWidth,
        borderStyle: Theme[1].LinkCard.borderStyle,
        borderColor: Theme[1].LinkCard.borderColor,
        // transition: "width 2s, height 4s", 
        '&:hover':{
            backgroundColor:Theme[1].LinkCard.onHover.backgroundColor,
            borderWidth: Theme[1].LinkCard.onHover.borderWidth,
            borderStyle: Theme[1].LinkCard.onHover.borderStyle,
            borderColor: Theme[1].LinkCard.onHover.borderColor,
            transform: "scale(1.03, 1.09)",
            '& $linkLogo': {
                color: Theme[1].LinkCard.onHover.msgColor,
            },
            '& $linkMsgCont > *': {
                color: Theme[1].LinkCard.onHover.msgColor,
            },
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: Theme[1].LinkLogo.fontSize,
        color: Theme[1].LinkLogo.color,
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",
        
        '& > *':{
            fontSize: Theme[1].LinkMsg.fontSize,
            fontFamily: Theme[1].LinkMsg.fontFamily,
            color: Theme[1].LinkMsg.color,
        },
    }
}));


const ShowPage=()=>{
    const classes = useStyles();
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