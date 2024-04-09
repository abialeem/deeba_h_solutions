import ContactUsTrainingForm from "./Forms/ContactUsTrainingForm";


export default function ContactUs() {
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1>CONTACT US</h1>
                        <h6  className="mb-4" style={{color:'#eee'}}>Just send us a message and tell us how we can help!</h6>
                        {/* <h4 className="mb-4" style={{color:'white'}}>Striving To Make The World Truely Global Village</h4> */}
                        {/* <p style={{marginTop:'50px'}}>
                            <Link to="/contact-us"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</Link>
                            <Link to="/get-a-quote"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</Link>
                            </p> */}
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap" >
                        <img src={process.env.PUBLIC_URL + "/images/ZEEBA-LOGO.png"} alt="feautred_images_front"  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ContactUsTrainingForm />

                        
    </>
  )
}
