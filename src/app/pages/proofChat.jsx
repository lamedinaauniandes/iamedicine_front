import {useState} from "react";
import {sendMessage} from "../../api/chat"; 

export default function ChatPage() { 
    const [text,setText] = useState(""); 
    const [message,setMessages] = useState([]); 

    async function onSend() {
        const userMsg = {role:"user",content:text};
        setMessages((m) => [...m,userMsg]); 
        setText(""); 

        try { 
            console.log("llamando api")
            const res = await sendMessage(userMsg.content); 
            setMessages((m) => [...m, {role:"assistant",content:res.reply }])
        } catch (e) {
            setMessages((m) => [...m,{role:"system",content: `error llamando el backend ${e}` }]); 
        }

    }

    return ( 
        <div>
            <input value={text} onChange={(e) =>setText(e.target.value)}></input>
            <button onClick={onSend}>Enviar</button>
            <pre> {JSON.stringify(message,null,2)}</pre>
        </div>
    )

}