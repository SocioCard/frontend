import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Switch, InputBase, FormControlLabel } from '@material-ui/core';

import { IconPicker } from 'react-fa-icon-picker'
import {Edit, DeleteOutline} from '@material-ui/icons';
import axios from 'axios';
//green: #03D084

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#151A2B',
        minHeight: '100vh'
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
    linkList: {
        margin:'10px 0',
        width: '80%',
        // border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor:'#1F263C',
        color:'white',
    },
    cardRow: {
        margin: '10px 5px',
        color:'white',
        //borderBottom: '1px solid white'
    },
}));

export default function Links(){
    const classes = useStyles();
    const [value, setValue] = useState("FaImages")
    const [items, setItems] = useState({
        link:"",
        title:"",
        icon:"FaImages",
    })

    const handleChange = (event) => {
        //console.log(event.target.name+" "+event.target.value)
        console.log(items)
        console.log(setItems)
        setItems({ ...(items), [event.target.name]: event.target.value});
    };

    const handleSubmit = () => {
        console.log(items);
        axios.post('http://localhost:5000/addLink', items)
        .then(function (response) {
        console.log(response);
        })
        .catch(function(err){
        console.log(err);
        })
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
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.addLink}
                >
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary">Add New Link</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="secondary">Save changes</Button>
                    </Grid>
                </Grid>
                  
                <div className={classes.linkList}>
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
                                        name="title"
                                        onChange={handleChange}
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
                                        name="link"
                                        onChange={handleChange}
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
                            containerStyles={{backgroundColor:'#1F263C', border:'none', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}
                            buttonStyles={{padding:'0', height:'20px', margin: '0 10px', border:'none'}}
                            buttonIconStyles={{color:'#fff'}}
                            value={items.icon}
                            //onChange={(v) => setValue(v)}
                            onChange={(v) => setItems({ ...(items), icon: v})}
                        />
                        <Button onClick={handleSubmit} size="small" variant="contained" color="primary" style={{padding:'2px', height:'40px'}}>
                            Add
                        </Button>
                    </Grid>
                </div>
            
                <div className={classes.linkList}>
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
                                        id="title" 
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
                            containerStyles={{backgroundColor:'#1F263C', border:'none', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}
                            buttonStyles={{padding:'0', height:'20px', margin: '0 10px', border:'none'}}
                            buttonIconStyles={{color:'#fff'}}
                            value={value}
                            onChange={(v) => setValue(v)}
                        />
                        <FormControlLabel
                            control={
                            <Switch
                                name="visible"
                                color="primary"
                            />
                            }
                            label="Visible"
                            labelPlacement="start"
                        />
                    </Grid>
                </div>
            
            </Grid>
            
        </React.Fragment>
    )
}

