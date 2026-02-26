import {
    CFooter,
    CLink
} from "@coreui/react";


export default function Footer() {

    return (
        <CFooter className="footer px-4">
          <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2025 creativeLabs.</span>
          </div>
          <div className="ms-auto">
            <span>Powered by </span>
            <CLink href="https://coreui.io">CoreUI</CLink>
          </div>
        </CFooter>
    );
}