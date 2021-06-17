import React from "react";
import LinkShareAppbar from './linkShareAppbar';
import NavigationAppbar from './navigationAppbar';

export default function Appbar(){

    return(
        <React.Fragment>
        <LinkShareAppbar/>
        <NavigationAppbar/>
        </React.Fragment>
    )
}