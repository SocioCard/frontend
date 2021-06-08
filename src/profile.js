import React from "react";
import { Avatar, Button, Grid, InputBase, makeStyles} from "@material-ui/core";
import defaultImg from './static/images/avatarDefault1.jpg';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  cont: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    minHeight:'100vh',
    backgroundColor: "rgb(22,26,43)",
    // [theme.breakpoints.only("md")]:{
    //   display:'none',
    // },
  },
  profileCont: {
    borderRadius: "5px",
    backgroundColor: "rgb(31,38,60)",
    padding: "10px 15px",
  },
  imgCont: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  img: {
    height: theme.spacing(12),
    width: theme.spacing(12)
  },
  imgButtons: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
  },
  pickImg: {
    padding: "0",
    margin: "16px 0 1vh 0"
  },
  removeImg: {
    padding: "0",
    margin: "1vh 0 16px 0"
  },
  profText: {
    color: "white",
    border: "1px solid #a8adbf",
    borderRadius: '5px',
    // height: "8vh",
    padding: "10px",
    margin: '0 auto',
    marginBottom: '4px',
  },
  bioText: {
    color: "white",
    border: "1px solid #a8adbf",
    borderRadius: '5px',
    // height: "20vh",
    padding: "10px",
    margin: '0 auto',
    marginTop: '4px',
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} direction='column' justify='flex-center' alignItems='center'>
        <Grid item xs={11} container direction='column' alignItems='flex-start'>
          <h3 style={{"color":"white", "margin":"10px 0 0 10px"}}>Profile</h3>
        </Grid>
        <Grid
          item
          xs={11}
          container
          className={classes.profileCont}
          spacing={1}
        >
          <Grid item xs={5} className={classes.imgCont}>
            <Avatar
              alt="Default Img"
              src={defaultImg}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={7} container className={classes.imgButtons}>
            <Grid item xs={10} className={classes.pickImg}>
              <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} fullWidth>
                Upload
              </Button>
            </Grid>
            <Grid item xs={10} className={classes.removeImg}>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} fullWidth >
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InputBase
              placeholder="Profile Title"
              fullWidth
              className= {classes.profText}
              InputProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputBase
              placeholder="Bio"
              multiline
              rows={5}
              fullWidth
              className= {classes.bioText}
              InputProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
