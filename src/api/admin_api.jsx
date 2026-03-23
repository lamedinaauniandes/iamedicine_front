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

export async function crearUser(form) {
    console.log("debug 1 api")
    const token = localStorage.getItem("token");
    console.log("debug 1.1 api")
    const response = await api.post("/users/",form,{
        headers:{
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
        }
    })

    console.log("debug 2 api")

    return response.data


}