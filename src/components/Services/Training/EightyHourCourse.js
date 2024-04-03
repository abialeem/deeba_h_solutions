import ContactUsTrainingForm from "../../Forms/ContactUsTrainingForm";

export default function EightyHourCourse(){

    return(
        <>
  <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <span style={{color:'white'}}>80-HOUR MEDICAL INTERPRETER TRAINING</span>
                        <h1 style={{fontSize:'44px'}}>
                        Launch your Interpreting Career with Twice the Confidence!
                            </h1>
                        <p  className="mb-4">
                        Get the extra practice and professional training you need to excel as a medical interpreter from your very first day. (Currently available for Arabic, Cantonese, Korean, Mandarin, Russian, Spanish and Vietnamese students only)
                        </p>
                        <div>
                        <ul className='col-lg-12 custom-list-type1' style={{padding:'10px',fontSize:'16px',textAlign:'left'}} type='none'>
  <li style={{margin:'10px'}}>
  <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px',color:'#ffff'}}></i> 
            <span style={{color:'white'}}>
            Interpretation Roles & Techniques
            </span>
    </li> 
    <li style={{margin:'10px'}}>
  <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px',color:'#ffff'}}></i> 
            <span  style={{color:'white'}}>
            More Live Coaching
            </span>
    </li> 
    <li style={{margin:'10px'}}>
  <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px',color:'#ffff'}}></i> 
            <span  style={{color:'white'}}>
            Free Exam Prep Course
            </span>
    </li> 
    </ul>
                        </div>
                        <p>
                            <a href='#contactform' className="btn btn-secondary">GET STARTED</a>
                        </p>
                        
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://th.bing.com/th/id/OIP.OWGBtjqXTUPRc-WJaKOJkwHaE8?rs=1&pid=ImgDetMain" alt="feautred_images_front" style={{borderRadius:'30px',width:'700px'}}  className="img-fluid " />
                    </div> 
                </div>
            </div>
        </div>
    </div>


    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY TESTING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'34px'}}>Get the skills and coaching you need to hit the ground running in your new career</h2>
            <h5 style={{lineHeight:'30px'}}>
            Our 40-Hour Medical Interpreter Training has helped prepare thousands of students for successful careers. But when we talk to our graduates after some time on the job, many of them tell us they wish they’d had even even more training to help prepare them for real-world situations. And it makes a lot of sense. Because when you start your job as a medical interpreter, the pressure is on from the first moment. The pressure to impress your boss, remember obscure medical terms you’ve only heard a few times, and do the best possible job for your patients, who rely on you to provide the critical care they need.
            </h5>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://en-us.thebigword.com/wp-content/uploads/2022/01/shutterstock_1755781619-1024x683.jpg.webp"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
        <div className="col-lg-4 ">
            <div className="hero-img-wrap" >
              
                <img 
                src="https://www.marketing91.com/wp-content/uploads/2020/11/coaching.jpg"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
          <div className="col-lg-6" >
            <span>WHY TESTING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'34px'}}>Our 80-hour program gives you double the advantage, preparing you for excellence</h2>
            <h5 style={{lineHeight:'30px'}}>
            40-hour courses are still the minimum requirement in many places. But if you want to excel as a medical interpreter, 40 hours isn’t much time to learn a career that can take years to perfect. That’s why we’ve launched our expanded 80-Hour Medical Interpreter Training– to help driven students like you get 2x more experience and prepare to excel at your new job from the moment you step through those hospital doors…
            </h5>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          
        </div>
      </div>
    </div>

    <div className="a" style={{marginTop:'30px',paddingTop:'50px',marginBottom:'30px',paddingBottom:'50px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
                {/* <!-- Start Column 1 --> */}
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '24px',color: 'white',textTransform:'uppercase' }}>
                  Start Your Medical Interpreter Training Today!
                  </h2>
                  {/* <p className="mb-4" style={{color:'white',fontSize:'16px',padding:'30px',fontWeight: 'bold'}}>
                  Consistent and effective communication helps your company present a professional face to the world. Contact us to get a free enterprise price quote for teams of any size!
                    </p> */}
                    <p>
                        <a href='#contactform' className="btn btn-secondary">GET STARTED NOW</a>
                    </p>
                   
                 </div>
					{/* <!-- End Column 1 --> */}
                </div>
            </div>
        </div>


    <div id='contactform'>
    <ContactUsTrainingForm />
    </div>
        </>
    )


}