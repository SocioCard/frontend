import React from "react";
import SignIn from "./signIn";
import Footer from "../components/footer";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}))

export default function Homepage(){

    return(
        <Grid>
        <SignIn/>
        <Footer/>
        </Grid>
    )
}