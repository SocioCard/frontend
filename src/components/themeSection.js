import { Grid, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {LocalThemes} from '../data/localthemes';
import axios from 'axios';
import Theme1 from '../static/images/Theme1.png';
import Theme2 from '../static/images/Theme2.gif';
import ThemeShowcase from "./themeShowcase";

const useStyles = makeStyles((theme) => ({
  themeInnerCont:{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    // gridAutoRows: "300px",
    gap:"24px",
  },
  themeCard:{
    display: "flex",
    flexDirection: "column",
  },
  themeImg:{
    backgroundImage: `url(${Theme1})`,
    backgroundSize: 'cover',
    backgroundPosition:'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: "10px",
    border: "2px solid #ccc",
    paddingTop:"150%"
  }, 
  themeShowcase:{
    borderRadius: "10px",
  }, 
  label: {
      textAlign: "center",
      lineHeight: "1.57",
      fontSize: "14px",
      paddingTop: "8px",
  },
}));
const ThemeSection = ()=>{
    const classes = useStyles();
    return(
        <Grid item container className={classes.themeInnerCont}>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="6"/>
              </div>
              <span className={classes.label}>Classic</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="7"/>
              </div>
              <span className={classes.label}>Black Ocean</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="8"/>
              </div>
              <span className={classes.label}>Golden Night</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="9"/>
              </div>
              <span className={classes.label}>Rose White</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="10"/>
              </div>
              <span className={classes.label}>Dark Love</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="11"/>
              </div>
              <span className={classes.label}>Naruto</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="12"/>
              </div>
              <span className={classes.label}>Chill Night</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="1"/>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="2"/>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="3"/>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="4"/>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div>
                <ThemeShowcase  className={classes.themeShowcase} theme="5"/>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
          </Grid>
    
    );
};

export default ThemeSection;