import {api} from "./client"; 

export async function sendMessage(message) {
    const token = localStorage.getItem("token");
    const {data} = await api.post(
        "/chat",
        {message},
        {
        headers:{
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
        }
        }
    );
    return data; 
}

export async function getHistory() {
    const {data} = await api.get("chat/history"); 
    return data;
}


