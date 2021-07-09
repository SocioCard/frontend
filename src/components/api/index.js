import axios from "axios"

export const requestUpdate=(user, id)=>{
    console.log(user);
    axios.post("http://localhost:5000/updateUser", {user, id})
    .then(res=>{
        console.log("Successfully updated");
    })
    .catch()
}