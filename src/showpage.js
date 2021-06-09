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
        backgroundColor: "wheat",
    },
    avatarCont: {
        height: "160px",
        width: "auto",
    },
    avatar: {
        height: "120px",
        width: "120px",
        border: "5px solid green",
    },
    userDetails: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        minHeight: '130px',
    },
    userName: {
        fontSize: '1.35rem',
        fontFamily: 'Lato',
        color: 'black',
    },
    userBio: {
        fontSize: '1.10rem',
        fontFamily: 'Lato',
        color: 'black',
    },
    linkList: {
        height: '45vh',
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    linkCard: {
        height:"80px",
        margin: "10px 0",
        [theme.breakpoints.up("sm")]:{
            width: '85vw',
        },
        [theme.breakpoints.up("md")]:{
            width: '90vw',
        },
        backgroundColor:"#e8b651",
        borderRadius: '13px',
        border: '2px solid #e3e3e3',
        '&:hover':{
            backgroundColor: "#fff",
            border: "2px solid #6b5d41",
        },
    },
    linkLogoCont: {
        paddingLeft: '12px',
        alignContent:"center",
    },
    linkLogo: {
        fontSize: '2.25rem',
        color: 'brown',
    },
    linkMsgCont: {
        justifyContent: 'center',
        alignContent:"center",
        padding: "0 30px 0 10px",
        [theme.breakpoints.up("sm")]:{
            padding: "0 130px 0 20px",
        },
        [theme.breakpoints.up("lg")]:{
            padding: "0 120px 0 20px",
        },
        
        '& > *':{
            fontSize: '1.35rem',
            fontFamily: 'Fira Sans',
            color: 'brown',
        },
    }
}));
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
                        <Grid item container className={classes.linkMsgCont} xs={10}>
                            <Typography className={classes.linkMsg} xs={10}>
                                View my Insta
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.linkCard} fullWidth>
                        <Grid item container className={classes.linkLogoCont} xs={2}>
                            <InstagramIcon className={classes.linkLogo} fontSize='large'/>
                        </Grid>
                        <Grid item container className={classes.linkMsgCont} xs={10}>
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