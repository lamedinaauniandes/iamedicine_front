import {api} from "./client"; 

export async function sendMessage(message) {
    const {data} = await api.post("/chat",{message});
    return data; 
}

export async function getHistory() {
    const {data} = await api.get("chat/history"); 
    return data;
}


