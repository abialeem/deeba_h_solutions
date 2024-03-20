import {Link} from  'react-router-dom'

function OnSiteInterpretation() {
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1>Whatever you need to say, our expert linguists will say for you</h1>
                        <p  className="mb-4">In complex or sensitive situations, face to face interpreting is the perfect solution, enabling you to communicate with a clear and accurate mutual understanding.</p>
                        <p>
                          {/* <Link to="/contact-us"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</Link> */}
                            <Link to="/services/interpreting/on-site-interpreting"  className="btn btn-white-outline shadow" id="quote-hero-btn">Find Out More</Link>
                            </p>
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://ulanguage.com/wp-content/uploads/2020/07/interp2-1024x682.jpg" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
          <div className="row justify-content-between" style={{marginTop:'100px'}}>
            <div className="col-lg-12" style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', marginTop: '50px', marginBottom: '100px' }}>
              Our interpreters are available day or night, 365 days a year, making thebigword the ideal provider for all your onsite interpretation needs.
                </h2>
            </div>
          </div>
          

          {/* on-site interpretation starts here */}
          <div className="we-help-section" style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className="container">
        <div className="row justify-content-between">
          
          <div className="col-lg-4 ps-lg-" style={{ paddingTop: '0px' }}>
            <span>WHY FACE TO FACE INTERPRETING?</span>
            <h2 className="section-title mb-4">Keep your conversation natural and engaging with face-to-face interpreting</h2>
            

            
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>With a wealth of experience on large-scale global contracts, we have a thorough implementation programme, proven and structured to ensure optimum performance from day one.</p>
            
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>Our team will work with you to analyze and determine your language needs, appointment types, and frequency of use, meaning we can tailor a solution and our system interface to best suit your requirements.</p>




            <p><Link to="./services" className="btn">Explore Our Services</Link></p>
          </div>
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="imgs-grid" style={{marginLeft:'200px'}}>
              <div className="grid grid-1"><img src="https://en-us.thebigword.com/wp-content/uploads/2021/04/Face-to-face-interpreter-01-300x200.jpg.webp" alt="Untree.co" /></div>
              <div className="grid grid-2"><img src="https://en-us.thebigword.com/wp-content/uploads/2021/04/Telephone-Interpreter-01-300x200.jpg.webp" alt="Untree.co" /></div>
              <div className="grid grid-3"><img src="https://th.bing.com/th/id/OIP.3eBPrNlTgaxk3H2zoJrCKQHaGN?w=940&h=788&rs=1&pid=ImgDetMain" alt="Untree.co" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OnSiteInterpretation