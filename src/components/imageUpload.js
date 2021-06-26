import React from 'react'
import axios, { post } from 'axios';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Button} from '@material-ui/core';
import { SettingsInputComponent } from '@material-ui/icons';
class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.props.setUploaded(this.props.uploaded+1);
    this.fileUpload(this.state.file).then((response)=>{
      //console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:5000/uploadImage';
    const formData = new FormData();
    formData.append('file',file)
    formData.append('id',this.props.id)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="file" accept="image/*" onChange={this.onChange} />
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
            onClick={()=>{this.props.setOpen(false); this.props.handleUpload()}}
        >
            Upload
        </Button> 
        <h5>If you do not see your new profile image after uploading, refresh the page once!</h5>
      </form>
      
   )
  }
}



export default ImageUpload