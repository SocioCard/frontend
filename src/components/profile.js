import { Avatar, Button, Grid, InputBase, makeStyles, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, } from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React,{ useEffect, useState } from "react";
import axios from 'axios';
import ImageUpload from "./imageUpload";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  form:{
    display:'flex',
    flexWrap:'wrap',
    maxWidth: "500px",
    
  },
  imgCont: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: '16px',
  },
  img: {
    height: theme.spacing(14),
    width: theme.spacing(14)
  },
  imgButtons: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom: '16px',

  },
  pickImg: {
    width: '45vw',
    minWidth: '175px',
    padding: "0",
    margin: "16px 0 1vh 0"
  },
  removeImg: {
    width: '45vw',
    minWidth: '175px',
    padding: "0",
    margin: "1vh 0 16px 0"
  },
  uploadButton: {
    backgroundColor: '#1940DD',
    color: '#fff',
    borderRadius: '10px',
    lineHeight: "1.8",
    // '&:hover':{
    //   backgroundColor: '#597aff',
    // },
    '& > *': {
      fontSize: "17px",
    },
  },
  deleteButton:{
    backgroundColor: '#AAB1BB',
    borderRadius: '10px',
    lineHeight: "1.8",
    '& > *': {
      fontSize: "17px",
    },
  },
  nameText: {
    color: "#000",
    border: "1px solid #a8adbf",
    borderRadius: '8px',
    padding: "10px",
    margin: '0 auto',
    marginBottom: '4px',
  },
  bioText: {
    color: "#000",
    border: "1px solid #a8adbf",
    borderRadius: '8px',
    // height: "20vh",
    padding: "10px",
    margin: '0 auto',
    marginTop: '4px',
    marginBottom: '14px',
  },
 
}));


const Profile=({details, setDetails})=>{
  var url = window.location.href;
  var id = url.split("/")[3];
  const classes = useStyles();
  const handleDetails = (event) => {
    console.log(event.target.name+" "+event.target.value)
    setDetails({ ...details, [event.target.name]: event.target.value });
  };
  const handleUpdateProfile=(event) =>{
          event.preventDefault();
          axios.post("http://localhost:5000/updateProfile", details)
          .then((result) => {
            console.log(result);
            // setDetails(result.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  const [profileImg, setProfileImg] = useState('http://localhost:5000/image');

  const [open, setOpen] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(0);
  const history = useHistory();

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleUpload=()=>{
      console.log('handleUploaded')
      //history.push(history.location.pathname)
      window.location.reload();
  };

  return (
    <Grid container>
    <form onSubmit={handleUpdateProfile} className={classes.form}>
      <Grid item xs={4} className={classes.imgCont}>
        <Avatar
              alt="Default Img"
              src={profileImg}
              
              className={classes.img}
        />
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Upload Profile Image</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let's give your profile an avatar.
                        </DialogContentText>
                        <ImageUpload id={id} uploaded={uploaded} setUploaded={setUploaded} setOpen={setOpen} handleUpload={handleUpload}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleClose} color="secondary">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>
          
      <Grid item xs={8} container className={classes.imgButtons}>
        <Grid item xs={8} className={classes.pickImg}>
          <Button
            variant="contained"
            className={classes.uploadButton}
            startIcon={<CloudUploadIcon />}
            fullWidth
            onClick={handleClickOpen}
          >
            Change
          </Button>
        </Grid>
        <Grid item xs={8} className={classes.removeImg}>
          <Button
            variant="contained"
            className={classes.deleteButton}
            startIcon={<DeleteIcon />}
            fullWidth
          >
            Remove
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <InputBase
          placeholder="Name"
          name="name"
          value={details.name}
          fullWidth
          className={classes.nameText}
          InputProps={{
            shrink: true,
          }}
          onChange={handleDetails}
        />
      </Grid>
      <Grid item xs={12}>
        <InputBase
          placeholder="Bio"
          name="bio"
          value={details.bio}
          multiline
          rows={5}
          fullWidth
          className={classes.bioText}
          InputProps={{
            shrink: true,
          }}
          onChange={handleDetails}
        />
      </Grid>
      <Button
          type="submit"
          variant="contained"
          className={classes.updateProfile}
          startIcon={<EditIcon />}
          justify="flex-end"
      >
        Update
      </Button>
    </form>
    </Grid>
  );
};

export default Profile;

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     const request = async () => {
  //       const data = await axios
  //         .post("http://localhost:5000/updateProfile", details)
  //         .then((result) => {
  //           console.log(result);
  //           setDetails(result.data[0]);
  //         })
  //         .catch((err) => {
  //           console.log("!!");
  //           console.log(err);
  //         });
  //     };
  //     request();
  //   }, 3000);
  //   return () => {
  //     clearTimeout(id);
  //   }
  // }, [details])