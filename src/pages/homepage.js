import React from "react";
import SignIn from "./signIn";
import Footer from "../components/footer";
import { Grid, CssBaseline, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import hero from '../static/images/homepageHero.svg'
import allinone from '../static/images/allinone.svg'
import logo from '../static/images/logo.png'
import linksPage from '../static/images/linksPage.png'
import profilePage from '../static/images/profilePage.png'
// import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles((theme) => ({
    logo:{
        width: '50px',
        margin: '2.5% 4%'
    },
    section1:{
        width:'90%',
        margin: '0px auto 30px auto',
    },
    section2:{
        width:'90%',
        margin: '0px auto 30px auto',
        backgroundColor: ''
    },
    h1: {
        fontSize: '60px',
        margin: '0px 20px 10px 20px',
        //textAlign: 'center',
        lineHeight: '60px',
        width: '70%',
    },
    h3: {
        color: '#22406b',
        width: '100%',
        margin: '20px auto 0px auto',
    },
    h2: {
        color: '#22406b',
        width: '100%',
        margin: '40px 10px 30px 10px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '400px'
    },
    hero: {
        //maxWidth: '900px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
    },
    getStartedButton: {
        backgroundColor: '#22406b',
        backgroundImage: 'linear-gradient(315deg, #22406b 0%, #1bd1a6 74%)',
        color: '#fff',
        borderRadius: '10px',
        lineHeight: "1.8",
        margin:'10px 20px 20px 0',
        border: 'none',
        padding: '10px 20px',
        "&:hover": {
            backgroundColor: '#1bd1a6',
            backgroundImage: 'linear-gradient(315deg, #1bd1a6 0%, #22406b 74%)',
        },
    },
    lower: {
        backgroundColor: '#fff',
        margin: '100px 0'
    },
    allinone: {
        //maxWidth: '900px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    },
    featuresImage:{
        width: '100%',
        margin: '20px',
        maxWidth: '200px'
    },
}))

export default function Homepage(){

    const classes = useStyles();

    const handleClick =() => {

    }

    return(
        <Grid>
            <img className={classes.logo} src={logo}/>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.section1}
            >
                <Grid
                container
                xs={12} sm={6}
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.main}
                >
                    <Grid item xs={12} >
                    <h1 className={classes.h1}>The only link you will ever need!</h1>
                    </Grid>
                    <Grid style={{width:'90%', margin:'0 auto'}} item xs={12} >
                    <h3 className={classes.h3}>This is your social card. Add links, cards, banners and more. Choose the theme with which you vibe. <br/>Your own universal profile page!</h3>
                    <Button onClick={handleClick} className={classes.getStartedButton} variant="outlined">Get Started</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className={classes.hero} src={hero} />
                </Grid>
            </Grid>

            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.section2}
            >
                <h1 className={classes.h2}>Let your SocioCard speak for you. Use this as your your universal bio!</h1>
            </Grid>
                
            
            <div className={classes.lower}>
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12} md={8}>
                        <Grid item xs={8} md={6}>
                        <img className={classes.featuresImage} src={linksPage}/>
                        </Grid>
                        <Grid item xs={9} md={6}>
                        <div>
                            <h3>Various Elements to add</h3>
                            <p>Add button links, cards style links and icon links. Add buymeacoffee link to get support from followers!</p>
                        </div>
                        </Grid>                          
                    </Grid>
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12} md={8}>
                        <Grid item xs={8} md={6}>
                        <img className={classes.featuresImage} src={profilePage}/>
                        </Grid>
                        <Grid item xs={9} md={6}>
                        <div>
                            <h3>Personalised Page</h3>
                            <p>Add name, and a  bio to describe yourself.</p>
                        </div>
                        </Grid>                          
                    </Grid>
                </Grid>
            </div>
            <img src={allinone} className={classes.allinone}/>
            <h2 className={classes.h2}>All your links in one place!</h2>
            <SignIn/>
            <Footer/>
        </Grid>
    )
}