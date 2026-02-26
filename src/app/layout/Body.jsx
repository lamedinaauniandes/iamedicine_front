import {useState,useRef} from "react";

import {
    CButton, 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCardTitle, 
    CCardText,
    CCardFooter,
    CForm,
    CFormInput,
    
} from "@coreui/react";

import { CVirtualScroller } from '@coreui/react-pro';


export default function Body() {

    const [messages,SetMessages] = useState([
        {id:1,role:"bot","text": "hola ¿En que te ayudo?"}, 
        {id:2,role:"user",text:"Quiero armar un chat dentro de una card."},
        {id:3,role:"bot",text:"Quiero armar un chat dentro de una card."},
        {id:3,role:"user",text:"Quiero armar un chat dentro de una card."},
    ])

    const bottomRef = useRef(null);
    return(  
          <CCard >
            <CCardHeader className="mb-4" style={{ height:"8vh"}}>
                <strong>Chat</strong>
                <span className="ms-auto text-body-secondary" style={{fontSize: 12}}>
                    Online
                </span>
            </CCardHeader>

            <CCardBody className="d-flex flex-column overflow-auto">
                <CVirtualScroller className="border p-3 rounded" visibleItems={8}>
                {messages.map((m) => (
                 <div key={m.id} className={`d-flex mb-2 ${
                        m.role ==="user"? "justify-content-end":"justify-content-start"
                 }`}>

                    <div className={`p-2 rounded-3 ${
                        m.role === "user"? "bg-primary text-white":"bg-body-tertiary"
                    }`}>
                        {m.text}
                    </div>
                    
                 </div>
                ))} 

                </CVirtualScroller>
                <div ref={bottomRef} />

            </CCardBody>

            <CCardFooter>
                <CForm className="d-flex gap-2" >
                    <CFormInput placeholder="Escribe un mensaje..."></CFormInput>
                    <CButton type="submit" color="primary">Enviar</CButton>
                </CForm>
            </CCardFooter>

          </CCard>


            // <CCard className="mb-4 w-100">
            //     <CCardHeader>Chat</CCardHeader>
            //     <CCardBody className="text-center">
            //         <CCardTitle>Special title treatment</CCardTitle>
            //         <CCardText>
            //         With supporting text below as a natural lead-in to additional content.
            //         </CCardText>
            //         <CButton color="primary" href="#">
            //         Go somewhere
            //         </CButton>
            //     </CCardBody>
            // </CCard>
    );
}