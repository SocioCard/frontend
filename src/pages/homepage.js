import React from "react";
import SignIn from "./signIn";
import Footer from "../components/footer";
import { Grid, CssBaseline, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import hero from '../static/images/hero.svg'
import logo from '../static/images/logo.png'
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles((theme) => ({
    logo:{
        width: '50px',
        margin: '2.5% 4%'
    },
    main:{
        width:'90%',
        marginTop:'30px',
        marginBottom:'50px',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        width: '95%',
        margin: '40px 0 30px 0',
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
        margin:'20px 0 0px 0',
        border: 'none',
        padding: '10px 20px',
        "&:hover": {
            backgroundColor: '#1bd1a6',
            backgroundImage: 'linear-gradient(315deg, #1bd1a6 0%, #22406b 74%)',
        },
    },
    lower: {
        backgroundColor: '#fff'
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
            className={classes.main}
            >
                <Grid item xs={12} md={7}>
                <h1 className={classes.h1}>The only link you will ever need! <br/>Your universal profile.</h1>        
                </Grid>
                <Grid item xs={12} md={5}>
                <h3 className={classes.h3}>This is your social card. Add links, cards, banners and more. Choose the theme with which you vibe. <br/>Your own universal profile page!</h3>
                <Button onClick={handleClick} className={classes.getStartedButton} variant="outlined">Get Started</Button>
                </Grid>
            </Grid>
            <img className={classes.hero} src={hero} />
            <div className={classes.lower}>
            </div>
            <SignIn/>
            <Footer/>
        </Grid>
    )
}