import { Grid, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {LocalThemes} from '../data/localthemes';
import axios from 'axios';

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
    // backgroundImg: "https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/14.jpg",
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