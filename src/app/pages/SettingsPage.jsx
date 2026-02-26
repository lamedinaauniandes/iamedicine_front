import {useState,useRef} from "react";

import {
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCardFooter,
} from "@coreui/react";

import { CVirtualScroller } from '@coreui/react-pro';


export default function Settings() {

    return(  
          <CCard >
            <CCardHeader className="mb-4" style={{ height:"8vh"}}>
                <strong>Settings</strong>
                <span className="ms-auto text-body-secondary" style={{fontSize: 12}}>
                    Online
                </span>
            </CCardHeader>

            <CCardBody className="d-flex flex-column overflow-auto">
               soy el settings
            </CCardBody>

            <CCardFooter>
    
            </CCardFooter>

          </CCard>
    );
}