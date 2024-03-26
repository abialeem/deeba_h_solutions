import ContactUsForm from '../../Forms/ContactUsForm'


function VideoRemoteInterpreting() {
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Visual and verbal interpreting, whenever and wherever it suits you</h1>
                        <p  className="mb-4">Sometimes just verbal communication is not enough. Our high-speed video interpreting service gives you instant access to trained interpreting professionals, specialising in spoken or sign language services via digital face-to-face media.</p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_486843796-1024x683.jpeg.webp" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'0px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row ">
          
        <div className="col-lg-12" style={{textAlign:'center',padding:'30px'}} >
            <span style={{fontWeight:'500'}}>VIDEO REMOTE INTERPRETING SERVICES</span>
            <h2 className="section-title mb-4 " style={{fontSize:'29px',fontWeight:'500'}}>Choose from flexible billing and scheduling options to fit your needs.</h2>
            
          </div>

          <div className='col-lg-6'>
          <div className="card d-flex h-100" style={{padding:'10px'}}>
  <img src="https://th.bing.com/th/id/OIP.5F8eU96coaEnkKjzwnHlngHaE8?rs=1&pid=ImgDetMain"
   className="card-img-top"
    alt={'onsite-interpretation-image'+Math.random()} 
    style={{padding:'15px',borderRadius:'20px',width:'100%',height:'350px'}}
    />
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'20px',fontWeight:'600',lineHeight:'32px',fontFamily:'Rubik,sans-serif'}}>
    On-Demand Monthly Plans
    </h5>
    <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
    Use our app to get 24/7 access to interpreters in 200+ languages, including ASL. Ideal for businesses with ongoing interpretation needs on a daily or weekly basis.
            </p>
           
<p className="card-text" style={{fontSize:'15px',fontWeight:'600',lineHeight:'25px'}}>
On-demand is perfect for:
    </p>
    <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-12'>
  <li>Hospitals or health care facilities</li>
  <li>Schools and universities</li>
  <li>Multi-national corporations</li>
  <li>Customer support centers</li>
  <li>And more....</li>
</ul>

    </p>
  </div>
</div>

          </div>

          <div className='col-lg-6'>
          <div className="card d-flex h-100" style={{padding:'10px'}}>
  <img src="https://th.bing.com/th/id/OIP.uZS-Rk6S4k8Y28kgU-QWMAHaDv?rs=1&pid=ImgDetMain"
   className="card-img-top"
    alt={'onsite-interpretation-image'+Math.random()} 
    style={{padding:'15px',borderRadius:'20px',width:'100%',height:'350px'}}
    />
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'20px',fontWeight:'600',lineHeight:'32px',fontFamily:'Rubik,sans-serif'}}>
    VRI By Appointment
    </h5>
    <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
    Book interpreters as needed for video calls on any platform. We can’t promise on-demand without a monthly plan, but short turnarounds are common due to our large network.
            </p>
          
<p className="card-text" style={{fontSize:'15px',fontWeight:'600',lineHeight:'25px'}}>
By-appointment is perfect for:
    </p>
    <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-12'>
  <li>Law firms and legal depositions</li>
  <li>Small doctors offices or medical practices</li>
  <li>Business meetings and negotiations</li>
  <li>Small service providers</li>
  <li>And more....</li>
</ul>

    </p>
  </div>
</div>

          </div>
          
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY VIDEO REMOTE INTERPRETING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>Body language and facial expressions speak volumes</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>Video Remote Interpreting (VRI) operates similarly to Skype™ or FaceTime™, allowing you to converse with our interpreters while seeing them in real-time.</p>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>We believe that body language and facial expressions can further facilitate empathy and understanding – a key component our team focuses on in emergency or sensitive situations.</p>
            
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://www.secondnature.com.au/wp-content/uploads/2020/12/online-meeting-zoom-call.jpg"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>



    <ContactUsForm />
    </>
  )
}

export default VideoRemoteInterpreting