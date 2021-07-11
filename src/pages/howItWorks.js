import Footer from "../components/footer";
import { Grid, CssBaseline, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import hero from '../static/images/howitworks.svg'
import SignIn from "./signIn";

const useStyles = makeStyles((theme) => ({
    h1:{
        textAlign:'center',
        margin:'30px auto',
        fontSize:'50px',
    },
    h2:{
        textAlign:'center',
        color: '#060E21',
        margin:'30px auto 10px auto',
    },
    h3:{
        textAlign:'center',
        margin:'30px auto',
        color:'#22406b',
        maxWidth: '500px'
    },
    section1:{
        margin:'20px auto',
        width:'80%',
    },
    hero:{
        width:'80%',
        margin:'30px auto',
        maxWidth: '400px'
    },
}))

export default function HowItWorks (){
    const classes = useStyles();
    return(
        <Grid>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.section1}
            >
                <h1 className={classes.h1}>How it works</h1>
                <img src={hero} className={classes.hero}/>
                <h3 className={classes.h3}>Signup with your google, facebook or twitter account. Set your name, profile image, a classy bio, choose a theme from a wide variety and add links to your work and social handles. You may also add embeded contents like youtube videos, tweets and many more.</h3><h3 className={classes.h3}>And Voila! You are ready to go</h3>
                
            </Grid>
            {/* <SignIn/>
            <Footer /> */}
        </Grid>
        
    )
}