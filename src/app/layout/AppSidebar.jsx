import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilChatBubble, cilSettings, cilSpeedometer } from "@coreui/icons";

export default function AppSidebar({ visible, setVisible }) {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    user = null;
  }

  const isAdmin = [1, "1"].includes(user?.role);

  return (
    <CSidebar
      position="fixed"
      visible={visible}
      onVisibleChange={setVisible}
      className="border-end"
      colorScheme="dark"
    >
      <CSidebarBrand className="d-flex justify-content-center fw-bold">
        RAG
      </CSidebarBrand>

      <CSidebarNav>
        <CNavTitle>Principal</CNavTitle>

        <CNavItem href="/app/chat">
          <CIcon icon={cilChatBubble} className="nav-icon" />
          Chat
        </CNavItem>

        {isAdmin && (
          <CNavItem href="/app/users">
            <CIcon icon={cilSettings} className="nav-icon" />
            Users
          </CNavItem>
        )}

        <CNavItem href="/app/settings">
          <CIcon icon={cilSettings} className="nav-icon" />
          Settings
        </CNavItem>

        <CNavTitle>Otros</CNavTitle>

        <CNavItem href="#">
          <CIcon icon={cilSpeedometer} className="nav-icon" />
          Dashboard (placeholder)
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
}