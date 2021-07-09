import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Embed from 'react-embed';
import { Grid } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

const useStyles=makeStyles(theme=>({
    card: {
        borderRadius: '20px',
        width:'90%',
        backgroundColor:'white',
        margin:'20px'
    },
    vdoPlayer:{
        marginTop:'20px',
    },
    title:{
        margin:'10px auto',
        textAlign:'center'
    },
    deleteIcon: {
        margin: 'auto',
        cursor:'pointer'
    }
}))


export default function EmbedList  ({link, index, handleDelete})  {
    const classes = useStyles();
    return(
        <div className={classes.card}>
            <div className={classes.vdoPlayer} >
                <Embed style={{borderRadius:'20px'}} url={link.link}/>
            </div>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <Grid item xs={10}>
                    <h3 className={classes.title}>{link.title}</h3>
                </Grid>
                <Grid item xs={1}>
                    <DeleteOutline onClick={ (e) => handleDelete(e,index)} className={classes.deleteIcon}/>
                </Grid>
            
            
            </Grid>
        </div>
    )
}