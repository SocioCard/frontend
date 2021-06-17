import { Grid, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {LocalThemes} from './data/localthemes';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  themeCard: {
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#515d85',
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    //   '&:hover': {
    //     backgroundColor: 'white',
    //   },
       transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.enteringScreen,
        ease: 'sharp'
       }),
      '& > *': {
          fontSize: '3.5rem',
          color: 'grey',
      },
  },
}));
const Themes = ()=>{
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item container elevation={3} className={classes.themeCard}>
                <AddIcon className={classes.icon}/>
            </Grid>
        </Grid>
    );
};

export default Themes;