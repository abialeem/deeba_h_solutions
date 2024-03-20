import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar(){

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Furni navigation bar">
          <div className="container-fluid">
            <Link className="navbar-brand company-nav-title" to="/">Zeeba H Solutions<span>.</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                 {/* New nav-link with dropdown */}
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <Link className="nav-link dropdown-toggle navbar-link-title" to="/services" id="navbarDropdown3" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
                </Link>
                <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown3">
                    <li className="nav-item dropdown hover-dropdown2 dropend">
                        <Link className="dropdown-item dropdown-toggle"  to="/services/interpreting" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                         INTERPRETING
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown4">
                        <li><Link className="dropdown-item"  to="/services/interpreting/on-site-interpreting">ON-SITE INTERPRETING</Link></li>
                        <li><Link className="dropdown-item"  to="/services/interpreting/over-phone-interpreting">OVER-THE-PHONE INTERPRETING</Link></li>
                        <li><Link className="dropdown-item"  to="/services/interpreting/video-remote-interpreting">VIDEO REMOTE INTERPRETING</Link></li>
                        <li><Link className="dropdown-item"  to="/services/interpreting/remote-simultaneous-interpreting">REMOTE SIMULTANEOUS INTERPRETING (RSI)</Link></li>
                        <li><Link className="dropdown-item"  to="/services/interpreting/conference-interpreting">CONFERENCE INTERPRETING</Link></li>
                        <li><Link className="dropdown-item"  to="/services/interpreting/equipment-rentals-interpreting">INTERPRETATION EQUIPMENT RENTALS</Link></li>
                        </ul>
                    </li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                  <Link className="dropdown-item dropdown-toggle"  to="/services/testing" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">TESTING</Link>
                  <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown5">
                        <li><Link className="dropdown-item"  to="/services/testing/speaking-listening-assessment">Speaking and Listening Assessment</Link></li>
                        <li><Link className="dropdown-item"  to="/services/testing/reading-assessment">Reading Assessment</Link></li>
                        <li><Link className="dropdown-item"  to="/services/testing/writing-assessment">Writing Assessment</Link></li>
                        <li><Link className="dropdown-item"  to="/services/testing/interpretation-assessment">Interpretation Assessment</Link></li>
                        <li><Link className="dropdown-item"  to="/services/testing/translation-assessment">Translation Assessment</Link></li>
                        <li><Link className="dropdown-item"  to="/services/testing/preparing-for-your-test">Preparing for your Test</Link></li>
                        </ul>
                  </li>
                  <li><Link className="dropdown-item" to="/services/training">TRAINING</Link></li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                    <Link className="dropdown-item dropdown-toggle"  to="/services/translation" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">TRANSLATION</Link>
                    <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown6">
                        <li><Link className="dropdown-item"  to="/services/translation/document">Document Translation</Link></li>
                        <li><Link className="dropdown-item"  to="/services/translation/website">Website Translation</Link></li>
                        <li><Link className="dropdown-item"  to="/services/translation/software">Software Localization</Link></li>
                        <li><Link className="dropdown-item"  to="/services/translation/voiceover-dubbing">Voiceover &#038; Dubbing</Link></li>
                        <li><Link className="dropdown-item"  to="/services/translation/desktop">Desktop Publishing</Link></li>
                        </ul>
                    </li>
                </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Link className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown7" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/industries">
                        INDUSTRIES
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown7">
                        <li><Link className="dropdown-item" to="/industries/education">Education</Link></li>
                        <li><Link className="dropdown-item" to="/industries/finance">Finance</Link></li>
                        <li><Link className="dropdown-item" to="/industries/government">Government</Link></li>
                        <li><Link className="dropdown-item" to="/industries/healthcare">Healthcare</Link></li>
                        <li><Link className="dropdown-item" to="/industries/hr">Human Resources</Link></li>
                        <li><Link className="dropdown-item" to="/industries/legal">Legal</Link></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Link className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown8" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/languages">
                        LANGUAGES
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown8">
                        <li><Link className="dropdown-item" to="/languages/interpretation">Interpretation Languages</Link></li>
                        <li><Link className="dropdown-item" to="/languages/testing">Testing Languages</Link></li>
                        <li><Link className="dropdown-item" to="/languages/translation">Translation Languages</Link></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Link className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown9" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/about">
                        ABOUT
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown9">
                        <li><Link className="dropdown-item" to="/aboutus/about">About us</Link></li>
                        <li><Link className="dropdown-item" to="/aboutus/esop">esop</Link></li>
                        <li><Link className="dropdown-item" to="/aboutus/iso-certification">ISO Certification</Link></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <Link className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown10" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/resources">
                        RESOURCES
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown10">
                        <li><Link className="dropdown-item" to="/resources/blog">Beyond Words Blog</Link></li>
                        <li className="nav-item dropdown hover-dropdown3 dropend">
                         <Link className="dropdown-item dropdown-toggle"  to="/resources/faqs" id="navbarDropdown11" role="button" data-bs-toggle="dropdown" aria-expanded="false">Frequently Asked Questions</Link>
                            <ul className="dropdown-menu dropdown-menu-hover3" aria-labelledby="navbarDropdown11">
                                <li><Link className="dropdown-item"  to="/resources/translation-faq">Translation FAQ</Link></li>
                                  <li><Link className="dropdown-item"  to="/resources/testing-faq">Testing FAQ</Link></li>
                                 <li><Link className="dropdown-item"  to="/resources/interpreter-training-faq">Interpreter Training FAQ</Link></li>
                             </ul>
                        </li>
                        </ul>
                </li>
                
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li >
                    <Link className="nav-link btn btn-secondary shadow" id="contact-nav-btn" to="/contact-us">CONTACT US</Link>
                </li>
                <li>
                  <Link className="nav-link btn btn-white-outline shadow" id="quote-nav-btn"  to="/get-a-quote">
                    GET A FREE QUOTE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );

}

export default Navbar;