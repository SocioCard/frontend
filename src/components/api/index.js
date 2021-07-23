import axios from "axios"

export const requestUpdate=(user, id)=>{
    console.log(user);
    axios.post("https://unibio.herokuapp.com/updateUser", {user, id})
    .then(res=>{
        console.log("Successfully updated");
    })
    .catch()
}