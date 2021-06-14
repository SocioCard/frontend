import React, { useEffect } from "react";
import Appbar from "./appbar";
import Links from "./link";
import Appearance from "./appearance";
import axios from 'axios';
import { useState, useEffect } from "react";

const Admin = ()=>{

    const [user,setUser] = useState({
        email:'',
        username:'',
        name:'',
        bio:'',
        themes:'',
        links:[{
            title:'',
            link:'',
            icon:'FaImages',
            visible:true,
        }],
        avatar:'',
    })

    const handleChange = (event) => {
        //console.log(event.target.name+" "+event.target.value)
        console.log(user)
        console.log(setUser)
        setUser({ ...(user), [event.target.name]: event.target.value});
    };

    const handleSubmit = () => {
        console.log(user);
        axios.post('http://localhost:5000/addLink', user)
        .then(function (response) {
        console.log(response);
        })
        .catch(function(err){
        console.log(err);
        })
    }

    return (
        <>
            <Links user={user} handleChange={handleChange} />
            {/* <Appearance/> */}
        </>
    );
};

export default Admin;