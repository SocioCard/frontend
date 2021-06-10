import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import defaultImg from './static/images/avatarDefault1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "flex-start",
        height:"100vh",
        padding:"6vh 4vw 10vh 4vw",
        backgroundColor: Theme.Bg.color,
    },
    avatarCont: {
        height: "160px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        borderWidth: Theme.Avatar.borderWidth,
        borderStyle: Theme.Avatar.borderStyle,
        borderColor: Theme.Avatar.borderColor,
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: Theme.Username.fontSize,
        fontFamily: Theme.Username.fontFamily,
        color: Theme.Username.color,
    },
    userBio: {
        fontSize: Theme.Userbio.fontSize,
        fontFamily: Theme.Userbio.fontFamily,
        color: Theme.Userbio.color,
    },
    linkList: {
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"70px",
        margin: "10px 0",
        backgroundColor:Theme.LinkCard.backgroundColor,
        borderRadius: Theme.LinkCard.borderRadius,
        borderWidth: Theme.LinkCard.borderWidth,
        borderStyle: Theme.LinkCard.borderStyle,
        borderColor: Theme.LinkCard.borderColor,
        '&:hover':{
            backgroundColor:Theme.LinkCard.onHover.backgroundColor,
            borderWidth: Theme.LinkCard.onHover.borderWidth,
            borderStyle: Theme.LinkCard.onHover.borderStyle,
            borderColor: Theme.LinkCard.onHover.borderColor,
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: Theme.LinkLogo.fontSize,
        color: Theme.LinkLogo.color,
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",
        
        '& > *':{
            fontSize: Theme.LinkMsg.fontSize,
            fontFamily: Theme.LinkMsg.fontFamily,
            color: Theme.LinkMsg.color,
        },
    }
}));

var Theme = {
    Bg: {
        color: "wheat",
    },
    Avatar: {
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: "green",
    },
    Username: {
        fontSize: '1.35rem',
        fontFamily: 'Lato',
        color: 'black',
    },
    Userbio: {
        fontSize: '1.10rem',
        fontFamily: 'Lato',
        color: 'black',
    },
    LinkCard: {
        backgroundColor:"#e8b651",
        borderRadius: '13px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#e3e3e3',
        onHover:{
            backgroundColor: "#fff",
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#6b5d41',
        },
    },
    LinkLogo: {
        fontSize: '2.25rem',
        color: 'brown',
    },
    LinkMsg: {
        fontSize: '1.35rem',
        fontFamily: 'Fira Sans',
        color: 'brown',
    },
};

const ShowPage=()=>{
    const classes = useStyles();
    return(
        <>
            <Grid container className={classes.root}>
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
                            <InstagramIcon className={classes.linkLogo} fontSize='large'/>
                        </Grid>
                        <Grid item container className={classes.linkMsgCont} xs={8}>
                            <Typography className={classes.linkMsg} xs={10}>
                                View my Insta
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.linkCard} fullWidth>
                        <Grid item container className={classes.linkLogoCont} xs={2}>
                            <InstagramIcon className={classes.linkLogo} fontSize='large'/>
                        </Grid>
                        <Grid item container className={classes.linkMsgCont} xs={8}>
                            <Typography className={classes.linkMsg} xs={10}>
                                View my Insta
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </>
    );
};

export default ShowPage;