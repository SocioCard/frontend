import { Grid, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {LocalThemes} from '../data/localthemes';
import axios from 'axios';
import Theme1 from '../static/images/Theme1.png';
import Theme2 from '../static/images/Theme2.gif';

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
              <div className={classes.themeImg}>
              </div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div className={classes.themeImg} style={{'backgroundImage':`url(${Theme2})`}}></div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div className={classes.themeImg}></div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div className={classes.themeImg}></div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div className={classes.themeImg}></div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
            <Grid item container className={classes.themeCard}>
              <div className={classes.themeImg}></div>
              <span className={classes.label}>Lorem Ipsum</span>
            </Grid>
          </Grid>
    
    );
};

export default ThemeSection;