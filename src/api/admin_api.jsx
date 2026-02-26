import {api} from "./client"; 


export async function getUsers() {
    const token = localStorage.getItem("token");
    const data = await api.get("/users/",{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    return data 
}