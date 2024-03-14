import './navbar.css'
function Navbar(){

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Furni navigation bar">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Zeeba H Solutions<span>.</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                 {/* New nav-link with dropdown */}
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
                </a>
                <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown3">
                    <li className="nav-item dropdown hover-dropdown2 dropend">
                        <a className="dropdown-item dropdown-toggle"  href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                         INTERPRETING
                        </a>
                        <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown4">
                        <li><a className="dropdown-item"  href="#">ON-SITE INTERPRETING</a></li>
                        <li><a className="dropdown-item"  href="#">OVER-THE-PHONE INTERPRETING</a></li>
                        <li><a className="dropdown-item"  href="#">VIDEO REMOTE INTERPRETING</a></li>
                        <li><a className="dropdown-item"  href="#">REMOTE SIMULTANEOUS INTERPRETING (RSI)</a></li>
                        <li><a className="dropdown-item"  href="#">CONFERENCE INTERPRETING</a></li>
                        <li><a className="dropdown-item"  href="#">INTERPRETATION EQUIPMENT RENTALS</a></li>
                        </ul>
                    </li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                  <a className="dropdown-item dropdown-toggle"  href="#" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">TESTING</a>
                  <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown5">
                        <li><a className="dropdown-item"  href="#">Speaking and Listening Assessment</a></li>
                        <li><a className="dropdown-item"  href="#">Reading Assessment</a></li>
                        <li><a className="dropdown-item"  href="#">Writing Assessment</a></li>
                        <li><a className="dropdown-item"  href="#">Interpretation Assessment</a></li>
                        <li><a className="dropdown-item"  href="#">Translation Assessment</a></li>
                        <li><a className="dropdown-item"  href="#">Preparing for your Test</a></li>
                        </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">TRAINING</a></li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                    <a className="dropdown-item dropdown-toggle"  href="#" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">TRANSLATION</a>
                    <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown6">
                        <li><a className="dropdown-item"  href="#">Document Translation</a></li>
                        <li><a className="dropdown-item"  href="#">Website Translation</a></li>
                        <li><a className="dropdown-item"  href="#">Software Localization</a></li>
                        <li><a className="dropdown-item"  href="#">Voiceover &#038; Dubbing</a></li>
                        <li><a className="dropdown-item"  href="#">Desktop Publishing</a></li>
                        </ul>
                    </li>
                </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown7" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" href="industries.html">
                        INDUSTRIES
                        </a>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown7">
                        <li><a className="dropdown-item" href="#">Education</a></li>
                        <li><a className="dropdown-item" href="#">Finance</a></li>
                        <li><a className="dropdown-item" href="#">Government</a></li>
                        <li><a className="dropdown-item" href="#">Healthcare</a></li>
                        <li><a className="dropdown-item" href="#">Human Resources</a></li>
                        <li><a className="dropdown-item" href="#">Legal</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown8" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" href="languages.html">
                        LANGUAGES
                        </a>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown8">
                        <li><a className="dropdown-item" href="#">Interpretation Languages</a></li>
                        <li><a className="dropdown-item" href="#">Testing Languages</a></li>
                        <li><a className="dropdown-item" href="#">Translation Languages</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown9" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" href="about.html">
                        ABOUT
                        </a>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown9">
                        <li><a className="dropdown-item" href="#">About us</a></li>
                        <li><a className="dropdown-item" href="#">esop</a></li>
                        <li><a className="dropdown-item" href="#">ISO Certification</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown10" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" href="resources.html">
                        RESOURCES
                        </a>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown10">
                        <li><a className="dropdown-item" href="#">Beyond Words Blog</a></li>
                        <li className="nav-item dropdown hover-dropdown3 dropend">
                         <a className="dropdown-item dropdown-toggle"  href="#" id="navbarDropdown11" role="button" data-bs-toggle="dropdown" aria-expanded="false">Frequently Asked Questions</a>
                            <ul className="dropdown-menu dropdown-menu-hover3" aria-labelledby="navbarDropdown11">
                                <li><a className="dropdown-item"  href="#">Translation FAQ</a></li>
                                  <li><a className="dropdown-item"  href="#">Testing FAQ</a></li>
                                 <li><a className="dropdown-item"  href="#">Interpreter Training FAQ</a></li>
                             </ul>
                        </li>
                        </ul>
                </li>
                
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li >
                    <a className="nav-link btn btn-secondary " id="contact-nav-btn" href="contact.html">CONTACT US</a>
                </li>
                <li>
                  <a className="nav-link btn btn-white-outline " id="quote-nav-btn"  href="quote.html">
                    GET A FREE QUOTE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );

}

export default Navbar;