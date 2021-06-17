import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Switch, InputBase, FormControlLabel } from '@material-ui/core';

import { IconPicker } from 'react-fa-icon-picker'
import {Edit, DeleteOutline} from '@material-ui/icons';
import axios from 'axios';
import Appbar from "./appbar";
import NavigationAppbar from "./navigationAppbar";
//green: #03D084

const textColor = '#000';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        padding: '0 0 20px 0'
    },
    addLink: {
        margin:'20px 0px 10px 0',
        width: '80%',
        color:'white',
    },
    titleInput: {
        fontWeight: 700,
        color:'white',
    },
    linkInput: {
        
        color:'white',
    },
    listTitleInput: {
        fontWeight: 700,
        color:textColor,
    },
    listLinkInput: {
        
        color:textColor,
    },
    linkList: {
        margin:'10px 0',
        width: '90%',
        // border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor:'#fff',
        // background: 'rgba(242,232,232,0.12)',
        // backdropFilter: 'blur(10px)',
        color:textColor,
    },
    addLinkList: {
        margin:'30px 0 10px 0',
        width: '90%',
        // border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'white',
        backgroundColor: '#1641db',
        //backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',

    },
    cardRow: {
        margin: '10px 5px',
        color:'white',
        //borderBottom: '1px solid white'
    },
    listCardRow: {
        margin: '10px 5px',
        color:textColor,
        //borderBottom: '1px solid white'
    },
}));

export default function Links({user, handleChange, handleSubmit}){
    const classes = useStyles();
    const [value, setValue] = useState('FaImages');
    const [newLink, setNewLink] = useState({
        title:'',
        link:'',
        icon:'FaImages',
        visible:true,
    })

    const links = user.links.map((link) =>
        <div className={classes.linkList}>
            <Grid className={classes.listCardRow} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Edit />
                        </Grid>
                        <Grid item>
                            <InputBase
                                required 
                                id="title" 
                                value={link.title}
                                name="title"
                                onChange={handleChange}
                                placeholder="Add Title"
                                inputProps={{
                                    'aria-label': 'naked',
                                    className: classes.listTitleInput,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Edit />
                        </Grid>
                        <Grid item>
                            <InputBase
                                required 
                                id="link" 
                                value={link.link}
                                name="link"
                                onChange={handleChange}
                                placeholder="Add Link"
                                inputProps={{
                                    'aria-label': 'naked',
                                    className: classes.listLinkInput,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid justify="flex-end" className={classes.listCardRow} container spacing={1} style={{paddingRight:'30px'}}>
                <DeleteOutline style={{height:'40px'}}/>
                <IconPicker
                    searchInputStyles={{color:'white', backgroundColor:'#16192A', border: 'none', height:'30px'}}
                    pickerIconStyles={{color:'white'}}
                    containerStyles={{backgroundColor:'#404040', border:'none', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}
                    buttonStyles={{padding:'0', height:'20px', margin: '0 10px', border:'none'}}
                    buttonIconStyles={{color:textColor}}
                    value={link.icon}
                    onChange={(v) => setValue(v)}
                />
                <FormControlLabel
                    control={
                    <Switch
                        name="visible"
                        color="secondary"
                    />
                    }
                    label="Visible"
                    labelPlacement="start"
                />
            </Grid>
        </div>

    );

    const handleNewLinkChange = (event) => {
        //console.log(event.target.name+" "+event.target.value)
        // console.log(user)
        // console.log(setUser)
        setNewLink({ ...(newLink), [event.target.name]: event.target.value});
    };

    const handleAddLink = () => {
        user.links.push(newLink);
        handleSubmit();
    }

    return(
        <React.Fragment>
            
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <div className={classes.addLinkList}>
                    <Grid className={classes.cardRow} container spacing={1}>
                        <Grid item xs={12}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Edit />
                                </Grid>
                                <Grid item>
                                    <InputBase
                                        required 
                                        id="title"
                                        value={newLink.title}                                   
                                        name="title"
                                        onChange={handleNewLinkChange}
                                        placeholder="Add Title"
                                        inputProps={{
                                            'aria-label': 'naked',
                                            className: classes.titleInput,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Edit />
                                </Grid>
                                <Grid item>
                                    <InputBase
                                        required 
                                        id="link"
                                        value={newLink.link}
                                        name="link"
                                        onChange={handleNewLinkChange}
                                        placeholder="Add Link"
                                        inputProps={{
                                            'aria-label': 'naked',
                                            className: classes.linkInput,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid justify="flex-end" className={classes.cardRow} container spacing={1} style={{paddingRight:'30px'}}>
                        <DeleteOutline style={{height:'40px'}}/>
                        <IconPicker
                            searchInputStyles={{color:'white', backgroundColor:'#16192A', border: 'none', height:'30px'}}
                            pickerIconStyles={{color:'white'}}
                            containerStyles={{backgroundColor:'#404040', border:'none', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}
                            buttonStyles={{padding:'0', height:'20px', margin: '0 10px', border:'none'}}
                            buttonIconStyles={{color:'#fff'}}
                            value={newLink.icon}
                            //onChange={(v) => setValue(v)}
                            onChange={(v) => setNewLink({ ...(newLink), icon: v})}
                        />
                        <Button onClick={handleAddLink} size="small" variant="contained" color="primary" style={{padding:'0px', height:'35px', borderRadius:'10px'}}>
                            Add
                        </Button>
                    </Grid>
                </div>

                {links}
            
                
            </Grid>
            
        </React.Fragment>
    )
}

