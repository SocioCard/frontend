import { Grid, makeStyles } from "@material-ui/core";
import axios from 'axios';
import ThemeShowcase from "./themeShowcase";
import themes from '../data/themesArray.json';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  themeInnerCont:{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    // gridAutoRows: "300px",
    gap:"24px",
  },
  themeCard:{
    display: "flex",
    flexDirection: "column",
    cursor:'pointer',
  },
  themeShowcase:{
    borderRadius: "10px",
  }, 
  label: {
      textAlign: "center",
      lineHeight: "1.57",
      fontSize: "14px",
      paddingTop: "8px",
      cursor:'default',
  },
}));
const ThemeSection = ({user, setUser})=>{
    const classes = useStyles();
    const [newDetails, setNewDetails]=useState(user);
    const id=useHistory().location.pathname.split("/")[1];
    
    useEffect(()=>{
      const request=async()=>(
        axios.post('http://localhost:5000/updateUser', {user:newDetails,id})
        .then(function (response) {
        console.log(response);
        })
        .catch(function(err){
        console.log(err);
        })
      )
      if(newDetails.themes!==""){
        setUser(newDetails);
        request();
      }
    }, [newDetails])
    const handleThemeUpdate=(event,index)=>{
      event.stopPropagation();
      console.log(index);
      setNewDetails({...user, themes:index})
      // setTimeout(handleSubmit,3000);
    }
    return(
        <Grid item container className={classes.themeInnerCont}>
            {themes.map((theme, index)=>(
              <Grid 
                key={index} 
                item 
                container
                className={classes.themeCard}
                onClick={(e)=>handleThemeUpdate(e,index+1)}
              >
                <div
                style={parseInt(index)+1===parseInt(user.themes)?{border:'1px solid yellow', borderRadius:'20px',boxShadow: "-8px 9px 14px -2px rgba(242,216,0,0.75)"}:null}
                >
                  <ThemeShowcase  className={classes.themeShowcase} theme={theme.id}/>
                </div>
                <span className={classes.label}>Classic</span>
              </Grid>
            ))}
          </Grid>
    
    );
};

export default ThemeSection;