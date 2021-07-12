import React, {useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [access, setAccess]=useState(-1);
    //console.log(rest);
    var username="";
    let i=1;
    while(rest.location.pathname[i]!='/'){
        username+=rest.location.pathname[i];
        i++;
    }
    useEffect(()=>{
        const request=async()=>{
            axios.get("https://unibio.herokuapp.com/verify", {
                headers:{
                    "x-access-token":localStorage.getItem(`token${username}`),
                }
            }).then(res=>{
                //make user request to backend
                setAccess(1);
            }).catch(err=>{
                setAccess(0);
            })
        }
        request();
    }, [])

  return(
  <>
    {access==1&& <Route {...rest} render={
        props => <Component {...rest} {...props} />
      } />}
    {access==0 && <Redirect from={`${rest.location.pathname}`} to="/"/>}
    {access==-1&&(
    <div
     style={{display:'flex', minHeight:'100vh', minWidth:'100vw', justifyContent:'center', alignItems:'center'}}
     >
         <CircularProgress />
     </div>)}
    </>
    )
}

export default ProtectedRoute;