import React from 'react'
import axios, { post } from 'axios';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Button} from '@material-ui/core';
import { SettingsInputComponent } from '@material-ui/icons';
import ReactDOM from 'react-dom'; 
import FileBase64 from 'react-file-base64';

const ImageUpload = ({user,setUser,handleUpload,setOpen,handleUpdateProfile}) => {

  

  const getFiles = (file) => {
    console.log(file.base64)
    setUser({ ...user, 'image': file.base64 })
    console.log(user)
  }

    return (
      <form onSubmit={handleUpdateProfile}>
        <FileBase64
        multiple={ false }
        onDone={ getFiles.bind(this) } />
        <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} fullWidth
            style={{
                backgroundColor: '#1940DD',
                margin: '20px auto',
                color: '#fff',
                borderRadius: '10px',
                lineHeight: "1.8",
                maxWidth:'200px',
                '& > *': {
                fontSize: "17px",
                },
            }}
            onClick={()=>{setOpen(false);  handleUpload()}}
        >
            Upload
        </Button> 
        <h5>If you do not see your new profile image after uploading, refresh the page once!</h5>
      </form>
      
   )
  
}



export default ImageUpload