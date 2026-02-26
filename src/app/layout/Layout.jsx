import { useState } from "react";
import {Outlet} from 'react-router-dom';
import AppSidebar from "./AppSidebar.jsx";
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";

import {
  CContainer,
  CRow,
  CCol,
} from "@coreui/react";


import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/app/css/app.css';





export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="d-flex min-vh-100">
      <AppSidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
      <div className="wrapper d-flex flex-column min-vh-100 flex-grow-1 bg-body-tertiary">
        
        <Header />

        <div className="body flex-grow-1">
          <CContainer className="px-4">
            <CRow className="justify-content-center">
                <CCol xs={12} md={12} xl={12} className="mx-auto">
                  <Outlet />
                </CCol>
            </CRow>
          </CContainer>
        </div>

        <Footer />
      </div>
    </div>
  );
}
