import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Switch, InputBase, FormControlLabel, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Typography } from '@material-ui/core';
import '../App.css';
import { IconPicker } from 'react-fa-icon-picker'
import {Edit, DeleteOutline} from '@material-ui/icons';
import axios from 'axios';
import Appbar from "../components/appbar";
import NavigationAppbar from "../components/navigationAppbar";
import SocialLink from "./socialLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPager, faLink, faUserFriends } from '@fortawesome/free-solid-svg-icons'
//green: #03D084

const textColor = '#000';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        padding: '30px 0 20px 0'
    },
    addLink: {
        margin:'20px 0px 10px 0',
        width: '80%',
        maxWidth: '500px',
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
        margin:'10px 0 10px 0',
        width: '90%',
        // border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'white',
        backgroundColor: '#1641db',
        //backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',

    },
    tile : {
        padding: '7px',
        margin:'10px',
        width: '90%',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color:'white',
        backgroundColor: '#fff',
    },
    tileItem : {
        margin:'7px',
        padding: '30px 20px',
        width: '45%',
        borderRadius: '20px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
        color:'white',
        backgroundColor: '#1641db',
    },
    tileItemEx : {
        margin:'7px',
        padding: '30px 20px',
        width: '45%',
        borderRadius: '20px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
        color:'	#404040',
        backgroundColor: '#E1E8F2',
    },
    tileIcon: {
        height: '30px !important',
        margin: '5px'
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

export default function Links({user, handleChange, handleSubmit, setUser}){
    const classes = useStyles();
    const [value, setValue] = useState('FaImages');
    const [newLink, setNewLink] = useState({
        title:'',
        link:'',
        icon:'FaImages',
        visible:true,
    })
    const [submit, setSubmit] = useState(0);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDone = () => {
        setOpen(false);
        handleSubmit();
    };

    useEffect(() => {
        // console.log("rerendered")
    },[submit])

    const handleDelete = (e,index) =>{
        e.stopPropagation();
        //console.log(index);
        user.links.splice(index,1);
        setSubmit(submit+1);
        handleSubmit();
    }

    const links = user.links.map((link, index) =>
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
                <DeleteOutline 
                    onClick={ (e) => handleDelete(e,index)}
                    style={{height:'40px'}}
                />
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
        setSubmit(submit+1);
        handleSubmit();
        setNewLink({
            title:'',
            link:'',
            icon:'FaImages',
            visible:true,
        });
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
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Social Links</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in only the usernames of your social handles.
                        </DialogContentText>
                        <SocialLink user={user} handleChange={handleChange} setUser={setUser}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleDone} color="secondary">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>

                <Grid
                    className={classes.tile}
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <h4 style={{color:'#707070',margin: '10px 0 20px 0'}}>What do you want to add?</h4>
                    <Grid onClick={handleClickOpen} container direction="column" alignItems="center" className={classes.tileItemEx} item>
                        <FontAwesomeIcon id="tileIcon" className={classes.tileIcon} icon={faUserFriends} />
                        <Typography style={{fontSize:'13px'}}>Social Link</Typography>
                    </Grid>
                    <Grid container direction="column" alignItems="center" className={classes.tileItem} item>
                        <FontAwesomeIcon id="tileIcon" className={classes.tileIcon} icon={faLink} />
                        <Typography>Link</Typography>
                    </Grid>
                    <Grid container direction="column" alignItems="center" className={classes.tileItemEx} item>
                        <FontAwesomeIcon id="tileIcon" className={classes.tileIcon} icon={faAddressCard} />
                        <Typography>Card</Typography>
                    </Grid>
                    <Grid container direction="column" alignItems="center" className={classes.tileItemEx} item>
                        <FontAwesomeIcon id="tileIcon" className={classes.tileIcon} icon={faPager} />
                        <Typography>Banner</Typography>
                    </Grid>
                </Grid>

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

