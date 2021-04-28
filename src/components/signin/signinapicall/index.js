import {API} from "../../../backend"
import axios from "axios"



export const signin=user=>{
    console.log(user);
    return axios.post(`${API}/auth/login`,user)
    .then(response =>{
        return response

    }
        )
}