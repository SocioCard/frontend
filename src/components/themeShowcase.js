import { Avatar, Grid, Typography } from "@material-ui/core";
import {Theme1, Theme2, Theme3, Theme4, Theme5, Theme6, Theme7, Theme8, Theme9, Theme10, Theme11, Theme12} from './themes.js';


const ThemeShowcase=({theme})=>{
    const getClass=()=>{
        if(theme===1){
            return Theme1();
        }else if(theme===2){
            return Theme2();
        }else if(theme===3){
            return Theme3();
        }else if(theme===4){
            return Theme4();
        }else if(theme===5){
            return Theme5();
        }else if(theme===6){
            return Theme6();
        }else if(theme===7){
            return Theme7();
        }else if(theme===8){
            return Theme8();
        }else if(theme===9){
            return Theme9();
        }else if(theme===10){
            return Theme10();
        }else if(theme===11){
            return Theme11();
        }else{
            return Theme12();
        }
    }
    const classes=getClass()
    return(
        <>
            <Grid container className={classes.root}>
                <Grid item container className={classes.mainCont}>
                    <Grid item className={classes.avatarCont}>
                        <Avatar
                            className={classes.avatar}
                        />
                    </Grid>
                    <Grid item container className={classes.linkList}>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                        <Grid item container className={classes.linkCard}>
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>
        </>
    );
};

export default ThemeShowcase;