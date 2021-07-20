import React, { useState,useEffect } from "react";
import Appbar from "../components/appbar";
import Links from "../pages/link";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Appearance from "./appearance";
import Settings from "./settings";
import Loader from './loader';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)',
        //backgroundColor: '#EEEEEE',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment:'fixed',
        minHeight: '100vh',
        padding: '0 0 20px 0'
        },
}));

const Admin = ()=>{
    const classes = useStyles();

    var url = window.location.href;
    var id = url.split("/")[3];
    var page = url.split("/")[5];
    

    const [user,setUser] = useState({
        email:'',
        username:'',
        name:'',
        bio:'',
        themes:'',
        links:[],
        visible:'',
        social:{
            instagram:'',
            facebook:'',
            youtube:'',
            reddit:'',
            linkedin:'',
            twitter:'',
            pinterest:'',
        },
        videoTitle:'',
        videoLink:'',
        image:'',
        buymeacoffee:'',
    })
    const handleChange = (event) => {
        //console.log(event.target.name+" "+event.target.value)
        // console.log(user)
        // console.log(setUser)
        setUser({ ...(user), [event.target.name]: event.target.value});
    };


    const handleSubmit = () => {
        console.log(user)
        axios.post('http://3.108.100.131:5000/updateUser', {user,id})
        .then(function (response) {
        console.log(response);
        })
        .catch(function(err){
        console.log(err);
        })
    }

    useEffect(()=>{
        const request = async () => {
          axios.post("http://3.108.100.131:5000/userDetails",{id})
            .then(
              (result) => {
                if(result.data.length!=0){
                  setUser(result.data[0])
                  //console.log(user)
                }
              }
            )
            .catch(e=>console.log(e))
        }
        request();
    },[])
    

    return (
        <>
        {user.email===''?<Loader/>:
        <div className={classes.root}>
            <Appbar user={id}/>
                {page==="links" && <Links user={user} id={id} setUser={setUser} handleChange={handleChange} handleSubmit={handleSubmit} />}
                {page==="appearance" && <Appearance user={user} setUser={setUser} handleSubmit={handleSubmit}/>}
                {page==="profile" && <Settings user={user} setUser={setUser} handleSubmit={handleSubmit}/>}
                
            {/* <Links user={user} handleChange={handleChange} handleSubmit={handleSubmit} />,
            <Appearance/> */}
        </div>
        }

        </>
    );
};

export default Admin;