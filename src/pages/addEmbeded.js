import React, { useEffect, useState } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button,  InputBase, Typography, TextField } from '@material-ui/core';
import {Title, Link, DeleteOutline} from '@material-ui/icons';

const textColor = '#000';

const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%'
    },
    cardRow: {
        margin: '10px 0px',
        color:'white',
        width:'100%',
    },
    titleInput: {
        fontWeight: 700,
        width:'100%',
        color:'black',
    },
    linkInput: {
        width:'100%',
        color:'black',
    },
    addLinkList: {
        margin:'10px 0 10px 0',
        width: '90%',
        // border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'white',
        backgroundColor: '#3ee577',
        backgroundImage: 'linear-gradient(315deg, #3ee577 0%, #1bd1a6 74%)',

    },
    listCardRow: {
        margin: '10px 5px',
        color:textColor,
        //borderBottom: '1px solid white'
    },
}))

export default function AddEmbeded({newLink, handleNewLinkChange}){
    //console.log(user);
    const classes = useStyles();
    return(
        <Grid
                className={classes.root}
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >

                            <Grid container style={{width:'100%'}} spacing={1} alignItems="center">
                                <Grid item>
                                    <Title />
                                </Grid>
                                <Grid item style={{width:'80%'}}> 
                                    <InputBase
                                        required 
                                        id="title"
                                        value={newLink.title}                                   
                                        name="title"
                                        onChange={handleNewLinkChange}
                                        multiline
                                        placeholder="Add Title"
                                        style={{width:'100%'}}
                                        inputProps={{
                                            'aria-label': 'naked',
                                            className: classes.titleInput,
                                        }}
                                        
                                    />
                                </Grid>
                            </Grid>
                            <Grid container container style={{width:'100%'}} spacing={1} alignItems="center">
                                <Grid item>
                                    <Link />
                                </Grid>
                                <Grid item style={{width:'80%'}}> 
                                    <InputBase
                                        required 
                                        id="link"
                                        value={newLink.link}
                                        multiline
                                        name="link"
                                        onChange={handleNewLinkChange}
                                        placeholder="Add Link"
                                        style={{width:'100%'}}
                                        inputProps={{
                                            'aria-label': 'naked',
                                            className: classes.linkInput,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                

        </Grid>
    )

};