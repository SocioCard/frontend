import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import defaultImg from '../static/images/avatarDefault1.jpg';
import { IconPickerItem } from 'react-fa-icon-picker';

const useStyles = makeStyles({
    root: props => ({
        minHeight: '100vh',
        backgroundColor: props.color1,
        justifyContent:"center",
    }),
    card: props => ({        
        minHeight: '100vh',
        margin:'auto',
        maxWidth:'400px',
    }),
    h: props => ({
      backgroundColor: props.color1,
      color: props.color2,
      fontSize: '28px',
    }),
    bio: props => ({
      color: props.color2,
      fontSize: '18px',
      textAlign:"center"
    }),
    title: props => ({
        color: props.color1,
        fontSize: '18px',
        textAlign:"center"
      }),
    link: props => ({
        backgroundColor: props.color3,
        borderRadius: props.linkBorderRadius,
        borderColor: props.linkBorderColor,
        borderStyle: "solid",
        borderWidth: '2px',
    }),
    avatar: props => ({
        height: "120px",
        width: "120px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: props.color2,
    }),
  });

export default function BioPage(){
    const props = { color1: 'black', color2: 'white', color3:'grey', linkBorderRadius:'20px', linkBorderColor:'grey' };
    const classes = useStyles(props);

    const onClick = () => {
        alert("clicked!")
    }
    
    return(
        <div className={classes.root}>
            <Grid
            className={classes.card}
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            >
                <Grid item xs={4}>
                    <Avatar>
                        className={classes.avatar}
                        alt={defaultImg} 
                        src={defaultImg}
                    </Avatar>
                </Grid>
                <Grid item xs={7}>
                    <h3 className={classes.h}>Tushar Raj</h3>
                </Grid>
                <Grid item xs={7}>
                    <p className={classes.bio}>building sociocard!</p>
                </Grid>
                <Grid
                container
                className={classes.link}
                direction="row"
                justify="space-around"
                alignItems="center"
                onClick={onClick} 
                xs={10}
                >
                    <Grid item xs={2}>
                        <IconPickerItem icon="FaInstagram" size={18} containerStyles={{textAlign:'center', justifyContent:'center'}} color={props.color1}/>
                    </Grid>
                    <Grid item xs={10}>
                        <p className={classes.title}>Connect with me!</p>
                    </Grid>
                </Grid>

            </Grid>
        
        </div>

        )
}