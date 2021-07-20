import Footer from "../components/footer";
import { Grid, CssBaseline, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import hero from '../static/images/aboutus.svg'
import team1 from '../static/images/amit.png'
import team3 from '../static/images/divyaroop.png'
import team2 from '../static/images/tushar.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from "@material-ui/icons/LinkedIn";

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
    section2:{
        margin:'20px auto',
        width:'80%',
    },
    hero:{
        width:'80%',
        margin:'30px auto',
        maxWidth: '400px'
    },
    team:{
        width:'80%',
        margin: '20px',
        // border: '5px solid #3ee577',
        // borderRadius: '100%'
    },
    icon:{
        color: '#060E21',
        margin: '5px 0px 30px 10px',
        fontSize: '25px',
    },
}))

export default function About (){
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
                <h1 className={classes.h1}>About Us</h1>
                <img src={hero} className={classes.hero}/>
                <h3 className={classes.h3}>We here at sociocard wish to make creating a personal website a process of 2 mins. Just add a profile pic, your name, bio, social handles and few links to your work and you are ready to go!</h3>
            </Grid>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.section2}
            >
                <h2 className={classes.h2}>Our Team</h2>
                <h3 className={classes.h3}>
                    We are a team of developers from Indian Institute of Engineering Science and Technology having the common love for building stuff.
                </h3>
                <Grid
                container 
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid container 
                    direction="column"
                    justify="center"
                    alignItems="center" xs={12} md={3}>
                        <img src={team2} className={classes.team}/>
                        <h4>Tushar Raj</h4>
                        <p>Developer</p>
                        <div style={{justify:'center'}}>
                        <a href='#'><LinkedIn className={classes.icon}/></a>
                        <a href='#'><TwitterIcon className={classes.icon}/></a>
                        <a href='#'><InstagramIcon className={classes.icon}/></a>
                        </div>
                    </Grid>
                    <Grid container 
                    direction="column"
                    justify="center"
                    alignItems="center" xs={12} md={3}>
                        <img src={team1} className={classes.team}/>
                        <h4>Amit Shaw</h4>
                        <p>Developer</p>
                        <div style={{justify:'center'}}>
                        <a href='#'><LinkedIn className={classes.icon}/></a>
                        <a href='#'><TwitterIcon className={classes.icon}/></a>
                        <a href='#'><InstagramIcon className={classes.icon}/></a>
                        </div>
                    </Grid>
                    <Grid container 
                    direction="column"
                    justify="center"
                    alignItems="center" xs={12} md={3}>
                        <img src={team3} className={classes.team}/>
                        <h4>Dibyaroop Dutta</h4>
                        <p>Developer</p>
                        <div style={{justify:'center'}}>
                        <a href='#'><LinkedIn className={classes.icon}/></a>
                        <a href='#'><TwitterIcon className={classes.icon}/></a>
                        <a href='#'><InstagramIcon className={classes.icon}/></a>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Footer style={{width:'100%'}}/>
        </Grid>
        
    )
}