import React, { useState,useEffect } from "react";
import Appbar from "../components/appbar";
import Links from "../pages/link";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Appearance from "./appearance";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url('https://images.hdqwalls.com/download/road-grayscale-photography-an-1125x2436.jpg')`,
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
    //console.log(id);
    

    const [user,setUser] = useState({
        email:'',
        username:'',
        name:'',
        bio:'',
        themes:'',
        links:[],
        avatar:'',
    })

    const handleChange = (event) => {
        //console.log(event.target.name+" "+event.target.value)
        // console.log(user)
        // console.log(setUser)
        setUser({ ...(user), [event.target.name]: event.target.value});
    };


    const handleSubmit = () => {
        console.log(user);
        
        axios.post('http://localhost:5000/updateUser', {user,id})
        .then(function (response) {
        console.log(response);
        })
        .catch(function(err){
        console.log(err);
        })
    }

    useEffect(()=>{
        const request = async () => {
          axios.post("http://localhost:5000/userDetails",{id})
            .then(
              (result) => {
                if(result.data.length!=0){
                  setUser(result.data[0])
                }
              }
            )
            .catch(e=>console.log(e))
        }
        request();
    },[])
    

    return (
        <div className={classes.root}>
            <Appbar/>
            {/* {
                page="profile"&&<Links user={user} handleChange={handleChange} handleSubmit={handleSubmit} />,
                page="links"&&<Appearance/>
                
            } */}
            {/* <Links user={user} handleChange={handleChange} handleSubmit={handleSubmit} />, */}
            <Appearance/>
        </div>
    );
};

export default Admin;