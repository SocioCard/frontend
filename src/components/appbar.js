import React from "react";
import LinkShareAppbar from './linkShareAppbar';
import NavigationAppbar from './navigationAppbar';

export default function Appbar({user}){

    return(
        <React.Fragment>
        <LinkShareAppbar/>
        <NavigationAppbar user={user}/>
        </React.Fragment>
    )
}