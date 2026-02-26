import {
    CHeader,
    CHeaderBrand,
    CContainer, 
    CButton, 
    CAvatar,
    CHeaderNav,
    CNavItem,
} from "@coreui/react"

import { CIcon } from "@coreui/icons-react";
import { cilHamburgerMenu } from "@coreui/icons";
import {useNavigate} from "react-router-dom"; 

export default function Header() {
    // const [sidebarVisible, setSidebarVisible] = useState(true);
    // const [visible, setVisible] = useState(false);
    const vars = {
        'marginInlineStart': '-14px',
    }

    const navigate = useNavigate();

    function logout() { 
        console.log("activando log out"); 
        localStorage.removeItem("token"); 
        localStorage.removeItem("email"); 
        navigate("/login")
    }

    return (

        <CHeader position="sticky" className="header-sticky mb-4 p-0"> 
            <CContainer fluid className="d-flex align-items-center gap-2"> 
                <CButton className="header-toggler" style={vars}> 
                    <CIcon icon={cilHamburgerMenu} size="lg" /> 
                </CButton> 
                <CHeaderBrand className="header-sticky mb-4 p-0">
                    <CHeaderNav >
                        <CNavItem>
                            <CButton color="" onClick={logout}>Log Out</CButton>
                        </CNavItem>
                        <CNavItem className="py-1">
                            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
                        </CNavItem>   
                        <CNavItem>
                          <CAvatar color="primary" textColor="white" > 
                                <strong>RAG</strong>
                          </CAvatar>    
                        </CNavItem>  
                            
                    </CHeaderNav>
                </CHeaderBrand> 
            </CContainer> 
        </CHeader>
    );


}