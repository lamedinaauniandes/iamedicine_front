
export default function Header_front(){

    return( 

           <header id="header" className="header fixed-top" data-scrollto-offset="0">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1>Medicine <span>RAG</span></h1>
                    </a>
                        
                    <nav id="navbar" className="navbar">
                    <ul>
                        
                            <li className="dropdown"><a href="#"><span>Home</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="index.html">Home 1 - index.html</a></li>
                                    <li><a href="index-2.html" className="active">Home 2 - index-2.html</a></li>
                                    <li><a href="index-3.html">Home 3 - index-3.html</a></li>
                                    <li><a href="index-4.html">Home 4 - index-4.html</a></li>
                                </ul>
                            </li>
                        
                            <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
                            <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
                            <li><a className="nav-link scrollto" href="index.html#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle d-none"></i>
                    </nav>
                    <a className="btn-getstarted scrollto" href="login">Log in</a>

                </div>
            </header>
       
    )

};