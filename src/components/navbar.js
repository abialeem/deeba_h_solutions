
function Navbar(){

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Furni navigation bar">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Zeeba H Solutions<span>.</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown hover-dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">SERVICES</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="level_1_drop">
                    <li className="nav-item dropdown hover-dropdown2" style={{ marginLeft: '150px', marginRight: '10px' }}>
                      <a className="nav-link dropdown-toggle" id="navbarDropdown2" href="#" role="button" aria-haspopup="true" aria-expanded="false">INTERPRETING</a>
                      
                      <ul className="dropdown-menu2" aria-labelledby="navbarDropdown2" id="level_2_drop">
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">ON-SITE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">OVER-THE-PHONE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">VIDEO REMOTE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">REMOTE SIMULTANEOUS INTERPRETING (RSI)</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">CONFERENCE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">INTERPRETATION EQUIPMENT RENTALS</a></li>
                      </ul>
                      
                    </li>
                    <li><a className="dropdown-item" style={{ color: 'black' }} href="#">TESTING</a></li>
                    <li><a className="dropdown-item" style={{ color: 'black' }} href="#">TRAINING</a></li>
                    <li><a className="dropdown-item" style={{ color: 'black' }} href="#">TRANSLATION</a></li>
                  </ul>
                </li>
                <li style={{ marginLeft: '10px', marginRight: '10px' }}><a className="nav-link" href="industries.html">INDUSTRIES</a></li>
                <li style={{ marginLeft: '10px', marginRight: '10px' }}><a className="nav-link" href="languages.html">LANGUAGES</a></li>
                <li style={{ marginLeft: '10px', marginRight: '10px' }}><a className="nav-link" href="about.html">ABOUT</a></li>
                <li style={{ marginLeft: '10px', marginRight: '10px' }}><a className="nav-link" href="resources.html">RESOURCES</a></li>
                <li style={{ marginLeft: '10px', marginRight: '10px' }}><a className="nav-link" href="contact.html">CONTACT US</a></li>

 {/* New nav-link with dropdown */}
 <li className="nav-item dropdown" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                INTERPRETING
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><a className="dropdown-item" style={{ color: 'black' }} href="#">ON-SITE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">OVER-THE-PHONE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">VIDEO REMOTE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">REMOTE SIMULTANEOUS INTERPRETING (RSI)</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">CONFERENCE INTERPRETING</a></li>
                        <li><a className="dropdown-item" style={{ color: 'black' }} href="#">INTERPRETATION EQUIPMENT RENTALS</a></li>
                </ul>
                    </li>
                  <li><a className="dropdown-item" href="#">TESTING</a></li>
                  <li><a className="dropdown-item" href="#">TRAINING</a></li>
                  <li><a className="dropdown-item" href="#">TRANSLATION</a></li>
                </ul>
              </li>

              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li>
                  <a className="nav-link  me-2" style={{ border: '1px solid #ffff', borderRadius: '20px' }} href="quote.html">
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