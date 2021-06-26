import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button,  InputBase, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Typography, TextField } from '@material-ui/core';
import '../App.css';
import { IconPicker } from 'react-fa-icon-picker'
import {Edit, DeleteOutline} from '@material-ui/icons';
import axios from 'axios';
import Appbar from "../components/appbar";
import NavigationAppbar from "../components/navigationAppbar";
import SocialLink from "./socialLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPager, faLink, faUserFriends, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import LinkList from "../components/linkList";
//green: #03D084
//blue: #1641db

const textColor = '#000';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        padding: '30px 0 20px 0',
        maxWidth: '600px',
        margin: 'auto',
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
    tile : {
        padding: '7px',
        maxWidth: '400px',
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
        backgroundColor: '#1bd1a6',
        cursor: 'pointer',
    },
    tileItemEx : {
        margin:'7px',
        padding: '30px 20px',
        width: '45%',
        borderRadius: '20px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
        color:'	#404040',
        backgroundColor: '#E1E8F2',
        cursor: 'pointer',
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
        backgroundColor: '#1bd1a6',
        //backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',

    },
    listCardRow: {
        margin: '10px 5px',
        color:textColor,
        //borderBottom: '1px solid white'
    },
    buyMeACoffee: {
        margin:'10px 0',
        width: '90%',
        padding: '20px',
        // border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor:'#fff',
        // background: 'rgba(242,232,232,0.12)',
        // backdropFilter: 'blur(10px)',
        color:textColor,
    },
}));

export default function Links({user, handleChange, handleSubmit, setUser}){
    console.log(user);
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

    // const handleVisibleChange = (e,index) =>{
    //     e.stopPropagation();
    //     //console.log(index);
    //     //user.links[index].visible=false; 
    //     let temp = user.links;
    //     //console.log(temp);
    //     temp[index].visible=!(temp[index].visible);
    //     setUser({...user, [links]:temp});
    //     setSubmit(submit+1);
    //     handleSubmit();
    // }

    const handleDelete = (e,index) =>{
        e.stopPropagation();
        //console.log(index);
        user.links.splice(index,1);
        setSubmit(submit+1);
        handleSubmit();
    }


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
    };

    function handleScrollToAddLink  () {
        window.scrollTo({
            top: 480,
            behavior: 'smooth' 
        })
    };

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
                    <DialogTitle id="form-dialog-title">Add Quick Links</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in only the usernames for social medias.
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
                        <FontAwesomeIcon id="tileIcon" className={classes.tileIcon} icon={faCodeBranch} />
                        <Typography style={{fontSize:'13px'}}>Quick Link</Typography>
                    </Grid>
                    <Grid onClick={handleScrollToAddLink} container direction="column" alignItems="center" className={classes.tileItem} item>
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

                <Grid item xs={11} container direction='column' alignItems='flex-start'>
                <h3 style={{"color":"white", "margin":"30px 0 10px 10px"}}>Add Link</h3>
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

                
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.buyMeACoffee}
                    
                    >
                        <Grid item xs={3}>
                            <img height="50px" margin="10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX///8NDCL/3QAAAAD/2wAAAB0AABkAABcAABsAABQAABEAAA0AAA4AAAkAABMAABC8vMA1NUMAAAXi4uTFxcjz8/TOztHy8vNqanL5+fqhoaYAAB+ysrasrLDl5efc3N5/f4Z1dXyIiI7//vaenqJDQk5MTFdXV2D//O5jY2yRkZfU1Nb/+uH/8a7/6HJdXGYZGCpHR1IqKjr/4Tf/6n7/76X/9sr/+NX/7ZT/6oj/3yj/5mP/+NoTEiclJDUWFij/5FX/87n/4kT/5Vn/52nRp3DOAAANkklEQVR4nO2de3+aPhvGa1MUPKLiAUQU66HiWg/d1nZbXdft/b+mH0kkATwmasjzfPh+9sesgtwSkivXfRNublJSUlJSUlJSUlJSUlJSUlJSUlL+N2g5Tq+p63a3ayFsu2vrzWbdcVpJH9o5mE5TtwbupPqeKwFMrVZC1Gq1zV9KuffVxB1YxqyR9PGy0Gp2+5M1CqCoZRUlcwhFyWoV+BMoI3doOEkf+3Gcrvvun6x89nBcu1A1P1B12u0lHcMBZoMVqGnssYXxm3SmbZtJh7ILx8uCynnRkSgBmBtJxxOn5YLSRaIjQa70pGOKYIHyJeODKGAiUf/qgkvHB9E69aQDCxgcD1DxUbO5AFWFfzi2kVqURBH09gWo5PJ4sM9n1uvqaDxub5iPx9Xq+ncnj94tlHN7gtXGSceGmea2QssW/SMvVtv9oa3PnNaeC8pstJyZbnvudAXlQXk7TiBFl2qq8fjAeuLpPbYxzWla/WoR1Mqd8K5ykysdNBOteCNdc/eB5szur0ExfBJl6E+3Iswwnr74/rwSba5SNFMzu3X1lKrtocEUZ2OmW0Zwvpx3EmLBu8YhszLVtnoIBapokB21Xc+fCfb8vmY73EbL72cMu+u58xWaWwEw2LxVJ80iNxcby27qe4dDJVcu4KlgXs0s/BEjYL1eZLQinjQWNTJYAHezS9I9K+tEQwuwTpI0SpSdnwEzvEeb7BHIMc3wwGUmFZl8H+/QoRHOEo2MYHQuEyO57EjvBexEAwsxzICtPpWd4BzezIMLsTI49K1i0ScAbOk3Rsjw5xU2f8lKoWoCWt15DpTOsDEKJBwjuBCVRZIR7cCcWe7CHwMq+6YL+1DUcgmMSMdJhRKQZAYVoTGzB/NqCdmJ/szoQKzESwTrsTtshvaxIGOkJJ3pLlpNw/L689ECK5wtanl1UR27A0tvbvukbiCU5OlMD+JPBOv1WdPQEUazOYOW/qHBvBsYW6R7/X9jFlyI6jLpQ7kSpmy67fIsA+ugmPgEyrxOdz7Ik5OYpDfsDEeoWxz3u80LB9qns04w1hMyMxptUMJtSc3708DFsm+xzez3YvascJIgC2qTJOwMA+QzYRQV2aNlf2Y/tI36wcFgJ2arbthWf1otgK0sSBaMhIsbfb8RXEYjvLpYLad9b2j7A+Cstyuj3Wr1es2m3h16g/ZytciirGp+j+DL5QVnFmenWPlqrlws1UI6plgolDKdUqFQKIbETamYz6lHXX5FFXsWOxea1jMg1uT3asIDFOyevos/hX6XPRIXoHGVjOFRgLiMYp8OFLgjKZxrYOxiM+2iBpBAC3xNUkSlrtNo9Izh1O/rKxxFJrtRUZnRyvUlRF0fkwYjrpk2dvmZjj5AhUJ7R7QTULJlf7gHnWV7qNMW2SfjPxAVIRkMtXbsHbNuWIP5qgOPs1bI547VREE6ak4r4va4nvQ9fVviroinIWrUJ6oRNPd8ouHMfK3Sn06q76Gx3T/BiIiboa7GU3dgQaG37/u6wdgkzNNoExflpI+bTm/W9OWZbduoOHHo/wdqueZOLbcDYr0J8zSCViPsyg86NlGeRkP4TzoJRoySGE+jGURY6wr5vlBCUVBXQy98UQYDjVDMNw4qwfeJksJz0kqHQr6PaLaSqFZKanaKYrJtJEJRhQTUTxAU4ZCqKCEjsBFkE/1WY4n4wvDcCUzs2XU7cNOYhqZqgq58M/SVOV93vftC2Z45F47Ul7jdwbwazSyLSie2Y0VCqgaVtj8lcD3b6O0oD2LBn4vZnjvuoARcbJqSFWXV7DPaVFwGlK2O21BK9/Zr6Tites/oDgfTZbWDPDktXvG4OYXCHP5pfucBBChqrhJMIBajSdvtD4ZdX2yj3KEvwSG2DX1S121PVp3AVYSm4qH9qlVRAd6Yp5uJsPpZy1citinxSStl7UhQEYRND29gMVsCZpvYLFSvUzx+SBdFFZ3SN9sgL/A8ZkFV/B1R9X4G2ojXD1PJAzBJKE9a170p8tc0hv6CFbDq6wnXDfX0oTv6faaRuD9AMVL0BFo9HaY3saVW1LJq5/jRh+mo2Y2p6Ksj+udyP+nAtnFmujVoT5arzmYMLBWKeU3L+qi0SDjrD5PlfCWICXRWy4nrWfqsbprGmkoakWMgM6bZ6jUN3ba8Qd91Jz5LUuo9mkymrq91PAv6ivWWGRGzDXoSpSzduwCWeCNfMMTOU96TPhRMy2q7F52bkkm2Ksf9ax6oaWVwyWMhtYm5eO4nETz8g9cueDBeoHrzMpSyk7sjLtixkwpaQdbTYcgdLhdMQo+DATHRur0AEmFuerF9rklOdF+GUiT01oHLmQxE0wAZ1soI3erMvvH999d/z7e3d3e3P/6+/fmy+WuLDPglGSQNvTmiyOgjPjx+3N7dUvw4v/6Cbzjn/GiXx+RsUn8+78LhbYL8Ct8idmVndZ1jZmTNUSrx5evtdniQb/BdW7JS/RFz1/7yc3d4/jn8A98nkkZzj+1KCCRDe2LW+/HHvvj8CL/DT5AcbPKV+gim49nbPDcRou60HfxmUkiaUD5xq0QqzsPj86HwIA/wc1TSyHBDfihFezgn/OXbrs4zzj386CqY40ty6xqdrqK+/cvt0+PLQ+QTDy+PTwcbJ+EH+jytDJRB0kRWCIAvH/xQ/H/PT2+vPm9vT5+3p0UHeYZ7CNU+JhtZQOw2rPtTo9nFX7hDqgOVhEMLIHloXKb844wIkaShzV5gZfdBqtG5zucZEb7CHdindV0CmUeLsn6eESESbcOgvEQSSROqXMBFWW/8AW4kTZBEL4gp8joO8Y3wEgivZ0T4AncwZ5SB14cUK2If4/HksWE7QiTa6HUth6QJiRpcNPz9jAjR/hbCK9ePQcYvvGLOL/4Ib+H2Jh195JA0YdNBhUP+A3+ESLRRW6Qiy43cJqnLwLkw/gg/4OZnWVtXghwRvnC4A7z9BzfXr2BPnkus83vmjhCJtmtYzOdCK81RVQ+/qEGShqy/I9GiGFSEIB/jiTfAu0e4OUnLyLEgHcKLCkluUYNFW6xFSEHsyuEWNbJKmq3kzB/u4QKZH3TAl0XShEewPHzJL2qQD0UtAxkW98SYUWOFX9TArZ3ozyUJUSXJ7dQg0SZbWgaziq7NxRvhB9xYtkoTTCzvzutFIUlD6qEkkjRbiYYPzgiRDxVzDCSBHBVOznzljBCJNrkqTQKsaA0TpxeFk4e0xcsjacI+BkrafuOMEIm2qpQrCsZ6eE6nBok2852MPNI8OuAmPEp3oPHwwhkhlDShtIwMlSYBscP6wilq4K4c2RJPG4rRpsUXIZI0NC0j1+qsZD0XPOPhO4UfcFNdSkkTTs6gLp5P1PyEm1qSVZoE9IMnzeBkCp+oQaKNOCJSSZot9+gfV4RRSSNNWgYT8zG4RA32oZZSFc9SYj4Gl6jBkobcTCJF8SyF+hg1+JLLi7pDlZeyVZoExApEuGTbHfShWtHCDnkwtchPzydqoGirSzrghwu1oAX4wBMgEm3yVZoELKPFdjwBItFGOmW5HhpwE7Li8cycJ8IPuOFQUkkTKjLF6RSeBFtU0khTaRIQ++15RM0b3FC+SpMAOzol4PGikGhbSlY8S5lFRQ1Hgg37UDyF/2IIPfYJjtQc6Sck2ky6FrtckmaryJRD1CAfqiWphwGJ6kkOLwr5UHRxn0rSAW2xiBSZ3nPINriXa9wIdynI6o14XsceIJY0pAhQihuAI7jRIlP2CD/hZvQG4H6i0ewidnPyJ3OEqIg95vdIRTfavv4yR4hE21zwKpcsxIpM2auGUPIw5rtKBe3nO/Alu6hBoi3mnUtFbKxm9qKQaDPlTMtgGlG9xSzbkA8Vy2FJRlQzM1cNIdEmZ6VJwChSjsbsRSHRFuuuJCM6d2WXbXAfllxrmsSI+Q+sAaIISfpDsrQMhtytVEY+BmuCDYk2N5A0ghZ9ZoMmZ5APyJpge4IbyVg8S2lGJz6sogb5ULSWRqZKkwCanNHgS0ZRg1NrtJZGPkmzVY/BOMvHBdA0tSbhgB/2MTiMfXSLsymxSwMhPgYeLr6xnERsJdJbxGSUNDc3k6Cb2NSJMJ/C0NoFMpWWUugy37gEnUWa4tWFiGgQtH4+K8THCHIOp5umv/AeZJ7/QsiQT/K3vw6s00K5e96sD9WUeXYICRn7ZOHYb0cXjLj78RjsgCzlI2x1eVZCT9SjeZWX16enfx+fz89IqN7dbdY3+fH8/Pz58+nr6y+yuUdPoYyaDdKvkAg7yo7Eyv39/QPi/n7H1rSR4xVEZCTUTDNKibGzGOxo4/IxiTyLos3QXdhr+lRM6epMQoRPoi/AwdQ4QV6adbtdCK/TL1m5VxQvEmImB4qjQXff89XM+kz33GoOgMgTQYCco33AOP7kC/S8Z0rBJ7fwQQ8Q9F9r8TXOC7LV0cQwq+XMUeB63vveK8ixyt4BzGr8idNMAMnPIMLlf7qHAuS5e/sQRocvRgX8lrkXjWBlwO6H/RyMryPvQL8DfQxA+fQzqRbBWrYqr6O09P4IPhGoqB18oKyShcPJyJOtAupE0JPF3En1PVeOPkCWPFtWXUx8SSClscaI2XIcp17vkSda6c1mr+7Ic8N9SkpKSkpKSkpKSkpKSkpKSkpKyjH+A2odG+JeqH8KAAAAAElFTkSuQmCC"/>
                        </Grid>
                        <Grid item xs={9}>
                            <span style={{width:'100%'}}>Buy me a coffee (Get support from your followers) <a href="https://www.buymeacoffee.com/" target="_blank">Learn more!</a></span>
                            <TextField id="standard-basic" label="Your buymeacoffee link" fullWidth />
                        </Grid>
                    </Grid>

                <Grid item xs={11} container direction='column' alignItems='flex-start'>
                <h3 style={{"color":"white", "margin":"30px 0 10px 10px"}}>Added Links</h3>
                </Grid>

                {
                    user.links.map((link, index) =>
                        <LinkList
                        key={index}
                        link={link}
                        index={index}
                        handleDelete={handleDelete}
                        setValue={setValue}
                        setUser={setUser}
                        user={user}
                        handleSubmit={handleSubmit}
                        />
                    )
                }
            
                
            </Grid>
            
        </React.Fragment>
    )
}

