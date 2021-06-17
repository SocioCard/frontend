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
    color: "#000",
    border: "1px solid #a8adbf",
    borderRadius: '10px',
    // height: "8vh",
    padding: "10px",
    margin: '0 auto',
    marginBottom: '4px',
  },
  bioText: {
    color: "#000",
    border: "1px solid #a8adbf",
    borderRadius: '10px',
    // height: "20vh",
    padding: "10px",
    margin: '0 auto',
    marginTop: '4px',
  },
  uploadButton: {
    backgroundColor: '#1940DD',
    color: '#fff',
    borderRadius: '10px'
  },
  deleteButton:{
    backgroundColor: '#AAB1BB',
    borderRadius: '10px'
  }
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
            <Grid item xs={10} className={classes.pickImg}>
              <Button variant="contained" className={classes.uploadButton} startIcon={<CloudUploadIcon />} fullWidth>
                Upload
              </Button>
            </Grid>
            <Grid item xs={10} className={classes.removeImg}>
              <Button variant="contained" className={classes.deleteButton} startIcon={<DeleteIcon />} fullWidth >
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
         </>
  );
};

export default Profile;