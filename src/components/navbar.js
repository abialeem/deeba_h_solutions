import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
function Navbar(){

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Furni navigation bar">
          <div className="container-fluid">
            <NavLink className="navbar-brand company-nav-title" to="/">Zeebah Solutions<span>.</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                 {/* New nav-link with dropdown */}
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <NavLink 
                className="nav-link dropdown-toggle navbar-link-title" 
                 to="/services" id="navbarDropdown3" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown3">
                    <li className="nav-item dropdown hover-dropdown2 dropend">
                        <NavLink className="dropdown-item dropdown-toggle"  to="/services/interpreting" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                         INTERPRETING
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown4">
                        <li><NavLink className="dropdown-item"  to="/services/interpreting/on-site-interpreting">ON-SITE INTERPRETING</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/interpreting/over-phone-interpreting">OVER-THE-PHONE INTERPRETING</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/interpreting/video-remote-interpreting">VIDEO REMOTE INTERPRETING</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/interpreting/remote-simultaneous-interpreting">REMOTE SIMULTANEOUS INTERPRETING (RSI)</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/interpreting/conference-interpreting">CONFERENCE INTERPRETING</NavLink></li>
                        </ul>
                    </li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                  <NavLink className="dropdown-item dropdown-toggle"  to="/services/testing" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">TESTING</NavLink>
                  <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown5">
                        <li><NavLink className="dropdown-item"  to="/services/testing/speaking-listening-assessment">Speaking and Listening Assessment</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/testing/reading-assessment">Reading Assessment</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/testing/writing-assessment">Writing Assessment</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/testing/interpretation-assessment">Interpretation Assessment</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/testing/translation-assessment">Translation Assessment</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/testing/preparing-for-your-test">Preparing for your Test</NavLink></li>
                        </ul>
                  </li>
                  <li><NavLink className="dropdown-item" to="/services/training">TRAINING</NavLink></li>
                  <li className="nav-item dropdown hover-dropdown2 dropend">
                    <NavLink className="dropdown-item dropdown-toggle"  to="/services/translation" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">TRANSLATION</NavLink>
                    <ul className="dropdown-menu dropdown-menu-hover2" aria-labelledby="navbarDropdown6">
                        <li><NavLink className="dropdown-item"  to="/services/translation/document">Document Translation</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/translation/website">Website Translation</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/translation/software">Software Localization</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/translation/voiceover-dubbing">Voiceover &#038; Dubbing</NavLink></li>
                        <li><NavLink className="dropdown-item"  to="/services/translation/desktop">Desktop Publishing</NavLink></li>
                        </ul>
                    </li>
                </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <NavLink className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown7" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/industries">
                        INDUSTRIES
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown7">
                        <li><NavLink className="dropdown-item" to="/industries/education">Education</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/industries/finance">Finance</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/industries/government">Government</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/industries/healthcare">Healthcare</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/industries/hr">Human Resources</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/industries/legal">Legal</NavLink></li>
                        </ul>
                </li>
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <NavLink className="nav-link dropdown-toggle navbar-link-title"  id="navbarDropdown8" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" to="/languages">
                        LANGUAGES
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown8">
                        <li><NavLink className="dropdown-item" to="/languages/interpretation">Interpretation Languages</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/languages/testing">Testing Languages</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/languages/translation">Translation Languages</NavLink></li>
                        </ul>
                </li>
                <li className="nav-item " style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <NavLink className="nav-link navbar-link-title" 
                     to="/about">
                        ABOUT US
                        </NavLink>
                        {/* <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown9">
                        <li><NavLink className="dropdown-item" to="/about">About us</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/about/esop">esop</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/about/iso-certification">ISO Certification</NavLink></li>
                        </ul> */}
                </li>
                <li className="nav-item " style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <NavLink className="nav-link  navbar-link-title"  id="navbarDropdown10"  to="/join-our-team">
                        JOIN OUR TEAM
                        </NavLink>
                        {/* <ul className="dropdown-menu dropdown-menu-hover nav_dropdowns_lvl_1" aria-labelledby="navbarDropdown10">
                        <li><NavLink className="dropdown-item" to="/resources/blog">Beyond Words Blog</NavLink></li>
                        <li className="nav-item dropdown hover-dropdown3 dropend">
                         <NavLink className="dropdown-item dropdown-toggle"  to="/resources/faqs" id="navbarDropdown11" role="button" data-bs-toggle="dropdown" aria-expanded="false">Frequently Asked Questions</NavLink>
                            <ul className="dropdown-menu dropdown-menu-hover3" aria-labelledby="navbarDropdown11">
                                <li><NavLink className="dropdown-item"  to="/resources/translation-faq">Translation FAQ</NavLink></li>
                                  <li><NavLink className="dropdown-item"  to="/resources/testing-faq">Testing FAQ</NavLink></li>
                                 <li><NavLink className="dropdown-item"  to="/resources/interpreter-training-faq">Interpreter Training FAQ</NavLink></li>
                             </ul>
                        </li>
                        </ul> */}
                </li>
                
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li >
                    <NavLink className="nav-link btn btn-secondary shadow" id="contact-nav-btn" to="/contact-us">CONTACT US</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link btn btn-white-outline shadow" id="quote-nav-btn"  to="/get-a-quote">
                    GET A FREE QUOTE
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );

}

export default Navbar;