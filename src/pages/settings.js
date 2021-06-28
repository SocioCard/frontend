import React from "react";
import { Grid, makeStyles, InputBase, Button, Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import { useEffect, useState } from "react";
import Profile from "../components/profile";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "30px 0 20px 0",
    maxWidth: "600px",
    margin: "auto",
  },
  cont: {
    display: "flex",
    "& > *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    minHeight: "100vh",
    //backgroundColor: "rgb(22,26,43)",
    // [theme.breakpoints.only("md")]:{
    //   display:'none',
    // },
  },
  profileCont: {
    borderRadius: "15px",
    backgroundColor: "#fff",
    padding: "16px 24px",
  },
  nameText: {
    color: "#000",
    borderBottom: "1px solid #a8adbf",
    // borderRadius: '8px',
    padding: "5px",
    margin: "5px auto 15px auto",
  },
  deleteAccountCont: {
    minWidth: "250px",
    padding: "0",
    margin: "0px 0 2vh 0",
  },
  deleteAccountButton: {
    backgroundColor: "#e61c4b",
    color: "#fff",
    lineHeight: "1.8",
    margin: "20px",
    "& > *": {
      fontSize: "17px",
    },
    '&:hover':{
      backgroundColor:'#ed2654'
    },
  },
}));

const Settings = ({user,setUser,handleSubmit}) => {
  const history = useHistory();
  const classes = useStyles();
  var url = window.location.href;
  var id = url.split("/")[3];
  const [username, setUsername] = useState({
    prevUsername:id,
    newUsername:id,
  })
  const [details, setDetails] = useState({
    username: id,
    name: user.name,
    bio: user.bio,
  });
  const [deleteCheck, setdeleteCheck] = useState(false);
  const handleUsername = (event) => {
    console.log(event.target.name+" "+event.target.value)
    setUsername({ ...username, newUsername: event.target.value });
  };
  const handleChangeUsername=(event)=>{
      console.log(username)
      event.preventDefault();
      axios.post("http://localhost:5000/admin/updateUsername", username)
        .then((result) => {
            if(result.data.message!=='Username is not avaiable'){
            console.log(result);
            history.push('/'); 
            }
            else{
              alert('Username is not avaiable')
            }
        })
        .catch((err) => {
            console.log(err);
        });
  }


  const handleDeleteAccount=(event)=>{
    console.log(id);
    axios.post("http://localhost:5000/admin/deleteAccount",{id:id})
    .then((result)=>{
      history.push('/');
      alert(result.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.cont}
        direction="column"
        justify="flex-center"
        alignItems="center"
      >
        <Grid item xs={11} container direction="column" alignItems="flex-start">
          <h3 style={{ color: "white", margin: "10px 0 0 10px" }}>Profile</h3>
        </Grid>
        <Grid
          item
          xs={11}
          container
          className={classes.profileCont}
          spacing={1}
        >
          <Profile user={user} setUser={setUser} />
        </Grid>
        <Grid item xs={11} container direction="column" alignItems="flex-start">
          <h3 style={{ color: "white", margin: "10px 0 0 10px" }}>
            Change username
          </h3>
        </Grid>
        <Grid
          item
          xs={11}
          container
          className={classes.profileCont}
          spacing={1}
        >
          <form onSubmit={handleChangeUsername}>
            <InputBase
                placeholder="Username"
                fullWidth
                className={classes.nameText}
                InputProps={{
                  shrink: true,
                }}
                value={username.newUsername}
                onChange={handleUsername}
            />
            <Button
                type="submit"
                variant="contained"
                className={classes.saveUsername}
                startIcon={<EditIcon />}
                justify="flex-end"
            >
              Change
            </Button>
          </form>
        </Grid>

        <Grid item container>
          <Grid item xs={1} style={{ marginLeft: "10px" }}>
            <Checkbox 
              name="deleteCheck"
              style={{color:'#fff'}}
              checked={deleteCheck}
              onChange={()=>{
                setdeleteCheck(!deleteCheck);
                setTimeout(function(){ console.log(deleteCheck); }, 3000);
              }}
              />
          </Grid>
          <Grid item xs={10} style={{ margin: "10px 0 0 10px" }}>
            <Typography variant="body" style={{ color: "#fff" }}>
              I understand that deleting my account will permanently remove my
              profile details, personal setings and all other associated
              informations.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          xs={11}
          className={classes.deleteAccountCont}
        >
          {
            !deleteCheck
            ?<Button
                disabled
                variant="contained"
                className={classes.deleteAccountButton}
                style={{backgroundColor: '#ff7091', color: "#fff"}}
                startIcon={<DeleteIcon />}
              >
                Delete Account
             </Button>
            :<Button
                variant="contained"
                className={classes.deleteAccountButton}
                startIcon={<DeleteIcon />}
                onClick={handleDeleteAccount}
             >
            Delete Account
          </Button>
          }
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Settings;
