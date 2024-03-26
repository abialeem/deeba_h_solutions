import ContactUsForm from "../../ContactUsForm"
import FieldsFeatured from "../../FieldsFeatured"
import './RemoteSimultaneousInterpreting.css';
function RemoteSimultaneousInterpreting() {
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Real-Time Language Interpreters For Zoom Meetings & Webinars.</h1>
                        <p  className="mb-4">Add remote Simultaneous Interpretation to your Zoom call, video meeting, or webinar to make sure your message comes through loud and clear for your entire audience.</p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://www.unitedlanguagegroup.com/hubfs/remote%20interpretation%20solution.png" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY REMOTE SIMULTANEOUS INTERPRETING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>Reach your audience with Remote Simultaneous Interpretation.</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>Schedule an appointment to add one or more interpreters to Zoom calls, online course, live webinars, conferences, and more!</p>
           <p className="card-text" style={{fontSize:'15px',fontWeight:'600',lineHeight:'25px'}}>
           RSI is perfect for:
    </p>
    <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-12'>
  <li>Group video calls & business meetings</li>
  <li>Webinars & remote learning courses</li>
  <li>Online conferences</li>
  <li>Virtual town hall meetings</li>
  <li>And more....</li>
</ul>

    </p>
            
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

    <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
             
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '29px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>The simple way to make your video calls accessible to everyone</h2>
                
                  <p className="card-text" style={{fontSize:'15px',fontWeight:'600',lineHeight:'25px',color:'white'}}>
                  FIND INTERPRETERS WITH THE EXPERIENCE YOU NEED:
    </p>
                  <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px',color:'white'}}>
<ul className='col-12 custom-list-type1' type='none'>
  <li>Medical Interpreting</li>
  <li>Legal Interpreting</li>
  <li>Business Interpreting</li>
  <li>Educational Interpreting</li>
  <li>And many more....</li>
</ul>

    </p>
                  
                 </div>
				
                </div>
            </div>
        </div>

            <FieldsFeatured />

    <ContactUsForm />
    </>
  )
}

export default RemoteSimultaneousInterpreting