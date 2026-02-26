import {Outlet} from 'react-router-dom'; 
import Header_front from './header_front'; 
import Footer_front from './footer_front';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import '../../styles/front/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../styles/front/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../styles/front/assets/vendor/aos/aos.css';
import '../../styles/front/assets/vendor/glightbox/css/glightbox.min.css';
import '../../styles/front/assets/vendor/swiper/swiper-bundle.min.css';

import '../../styles/front/assets/css/variables.css';
import '../../styles/front/assets/css/main.css';


import '../../styles/front/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import '../../styles/front/assets/vendor/aos/aos.js';
import '../../styles/front/assets/vendor/glightbox/js/glightbox.min.js';
// // import '../../styles/front/assets/vendor/isotope-layout/isotope.pkgd.min.js';
import '../../styles/front/assets/vendor/swiper/swiper-bundle.min.js';
import '../../styles/front/assets/vendor/php-email-form/validate.js';
// import '../../styles/front/assets/js/main.js';

export default function Layout_front() {
    return (
        <div>
           <Header_front />
             <Outlet />
           <Footer_front />
        </div>
    )

}; 