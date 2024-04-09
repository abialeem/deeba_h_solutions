import { Link } from "react-router-dom";

export default function Footer(){
  const contactNumber = '+44 7448 552945';
    return (
        <footer className="footer-section" style={{marginTop:'200px'}}>
  <div className="container relative">
    <div className="sofa-img">
      <img src="/images/ZEEBA-LOGO-10.PNG" alt="company-name"  className="img-fluid" />
    </div>
    <div className="row">
      <div className="col-lg-8">
        <div className="subscription-form">
          <h3 className="d-flex align-items-center">
            <span className="me-1"><img src="/images/envelope-outline.svg" alt="envelope-outline"  className="img-fluid" /></span>
            <span>Subscribe to Newsletter</span>
          </h3>
          <form action="#" className="row g-3">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-auto">
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">
                <span className="fa fa-paper-plane"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="row g-5 mb-5">
      <div className="col-lg-4">
        <div className="mb-4 footer-logo-wrap">
          <Link to="/" className="footer-logo">ZEEBA H SOLUTIONS<span>.</span></Link>
        </div>
        <p className="mb-4">Whether through translation services, language testing, or any of our client-tailored language solutions projects, ZEEBA H SOLUTIONS develops and employs the latest technology to bridge cultures. It is the combination of our linguistic expertise, tech savviness, understanding of cultures, and quality service that sets us apart.</p>
        <ul className="list-unstyled custom-social">
          <li><Link to="https://facebook.com"><span className="fa fa-brands fa-facebook-f"></span></Link></li>
          <li><Link to="https://twitter.com"><span className="fa fa-brands fa-twitter"></span></Link></li>
          <li><Link to="https://instagram.com"><span className="fa fa-brands fa-instagram"></span></Link></li>
          <li><Link to="https://linkedin.com"><span className="fa fa-brands fa-linkedin"></span></Link></li>
        </ul>
      </div>
      <div className="col-lg-8">
        <div className="row links-wrap">
        <div className="col-6 col-sm-6 col-md-3">
          {/* empty div for margin */    }
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services/interpreting">Services</Link></li>
              <li><Link to="/join-our-team">Join Our Team</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
          </div>
          
          <div className="col-6 col-sm-6 col-md-3">
          <ul className="list-unstyled pl-md-5 mb-5">
<li className="d-flex  mb-2">
<span className="mr-3">
  <span className="icon-map" style={{marginRight:'10px'}}>
  <i class="fa fa-map" aria-hidden="true"></i>
  </span>
</span> SPC FREE ZONE  <br/> E311, Sheikh Mohammad Bin Zayed Rd, <br/>Sharjah, U.A.E
</li>
<li className="d-flex  mb-2">
  <span className="mr-3">
    <span className="icon-phone" style={{marginRight:'10px'}}>
    <i class="fa fa-phone" aria-hidden="true"></i>
    </span>
    </span> {contactNumber}
    </li>
<li className="d-flex ">
  <span className="mr-3">
    <span className="icon-envelope-o" style={{marginRight:'10px'}}>
    <i class="fa fa-envelope" aria-hidden="true"></i>
    </span>
    </span> info@zeebahsolutions.com 
    </li>
</ul>
          </div>
          
        </div>
      </div>
    </div>
    <div className="border-top copyright">
      <div className="row pt-4">
        <div className="col-lg-6">
          <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by Aabid Aleem Sheikh  {/* License information: https://untree.co/license/ */}</p>
        </div>
        <div className="col-lg-6 text-center text-lg-end">
          <ul className="list-unstyled d-inline-flex ms-auto">
            <li className="me-4">
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
              </li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}