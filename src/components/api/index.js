import axios from "axios"

export const requestUpdate=(user, id)=>{
    console.log(user);
    axios.post("http://3.108.100.131:5000/updateUser", {user, id})
    .then(res=>{
        console.log("Successfully updated");
    })
    .catch()
}