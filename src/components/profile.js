import { Avatar, Button, Grid, InputBase, makeStyles } from "@material-ui/core";
import defaultImg from '../static/images/a.png';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
  imgCont: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  img: {
    height: theme.spacing(14),
    width: theme.spacing(14)
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
  deleteAccountCont: {
    padding: "0",
    margin: "16px 0 1vh 0"
  },
  deleteAccountButton: {
    backgroundColor: '#e61c4b',
    color: '#fff',
    lineHeight: "1.8",
    '& > *': {
      fontSize: "17px",
    },
    '&:hover':{
      backgroundColor: '#ff7091',
    },
  },
}));

const Profile=()=>{
  const classes = useStyles();
  return(
        <>
          <Grid item xs={5} className={classes.imgCont}>
            <Avatar
              alt="Default Img"
              src={defaultImg}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={7} container className={classes.imgButtons}>
            <Grid item xs={7} className={classes.pickImg}>
              <Button variant="contained" className={classes.uploadButton} startIcon={<CloudUploadIcon />} fullWidth>
                Upload
              </Button>
            </Grid>
            <Grid item xs={7} className={classes.removeImg}>
              <Button variant="contained" className={classes.deleteButton} startIcon={<DeleteIcon />} fullWidth >
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InputBase
              placeholder="Name"
              fullWidth
              className= {classes.nameText}
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
            <Grid item xs={12}>
            <InputBase
              placeholder="Username"
              fullWidth
              className= {classes.nameText}
              InputProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={5} className={classes.deleteAccountCont}>
              <Button variant="contained" className={classes.deleteAccountButton} startIcon={<DeleteIcon />} fullWidth>
                Delete Account
              </Button>
          </Grid>
          </Grid>
          
         </>
  );
};

export default Profile;