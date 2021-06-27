import { Grid, InputBase, FormControlLabel, Switch, Button } from "@material-ui/core";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { IconPicker } from "react-fa-icon-picker";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

const textColor = '#000';

const useStyles=makeStyles(theme=>({
    listTitleInput: {
        fontWeight: 700,
        color:textColor,
        width:'290px',
    },
    listLinkInput: {
        fontSize:'1.1rem',
        color:textColor,
        width:'290px',
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
    showText:{
        fontSize:'1.1rem',
        fontWeight:'550',
    }
}))

export default function LinkList({link, index, handleDelete, setValue, setUser, user, handleSubmit, handleVisibleChange}){
    const classes=useStyles();
    const [edit, setEdit]=useState(false);
    const [cardDetails, setCardDetails]=useState(link);

    const handleChange=(event)=>{
        setEdit(true);
        setCardDetails({...cardDetails, [event.target.name]:event.target.value});
    }
    const handleUpdate=()=>{
        setEdit(false);
        var temp=user.links;
        temp[index]=cardDetails;
        setUser({...user, links:temp});
        setTimeout(handleSubmit, 2000)
    }
    const handleCancel=()=>{
        setEdit(false);
        setCardDetails(link);
    }
    return(
        <div className={classes.linkList}>
            <Grid className={classes.listCardRow} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="flex-end" >
                        <Grid item >
                            <Edit style={{cursor:'pointer'}} onClick={()=>setEdit(true)}/>
                        </Grid>
                        <Grid item>
                            <InputBase
                                required 
                                id="title" 
                                value={cardDetails.title}
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
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item >
                            <Edit style={{cursor:'pointer'}} onClick={()=>setEdit(true)}/>
                        </Grid>
                        <Grid item>
                            <InputBase
                                required 
                                id="link" 
                                value={cardDetails.link}
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
            <Grid justify={edit?"space-between":'flex-end'} className={classes.listCardRow} container spacing={1} style={{paddingRight:'30px'}}>
                {edit?
                    <div style={{display:'flex'}}>
                        <Button variant="contained" color="secondary" style={{margin:'0 0 0 10px'}} onClick={handleUpdate}>Update</Button>
                        <Button variant="outlined" color="secondary" style={{margin:'0 0 0 10px'}} onClick={handleCancel}>Cancel</Button>
                    </div>
                    : null
                }
                <div style={{display:'flex'}}>
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
                            checked={link.visible}
                            onChange={(e) => handleVisibleChange(e,index)}
                            color="secondary"
                        />
                        }
                        label="Visible"
                        labelPlacement="start"
                    />
                </div>
            </Grid>
        </div>
    )
}