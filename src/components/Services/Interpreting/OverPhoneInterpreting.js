import ContactUsForm from '../../Forms/ContactUsForm'
import Hero from '../../Hero';
import './OverPhoneInterpreting.css'
import { Link } from 'react-router-dom';

function OverPhoneInterpreting() {
  return (
    <>
    <Hero 
    heading='Overcome any language barrier in a matter of seconds'
    description='In some situations, we appreciate that geographical limitations and time constraints do not allow for onsite interpreting support, which is where Over-Phone Interpreting can be utilised as an efficient and affordable solution for effective multilingual communication.'
    imgSrc='/images/overPhoneInterpretingFeatured.webp'
    rotate='false'
    btnShow='false'
    />
    
    {/* second section starts here */}
    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY OVER-PHONE INTERPRETING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>Technology to break down boarders and geographical limitations</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>With over-phone interpreting, you can connect and collaborate within a matter of seconds, with no pre-booking or travel arrangement complications.</p>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>Sourcing face-to-face interpreters for emergencies, rural areas and rare languages can present logistical challenges, where over-phone interpreting is a valuable solution.</p>
             <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
            Available 24/7 for emergencies and with the option to pre-book for scheduled appointments, telephone interpreting is an effective alternative to traditional interpreting appointments.
            </p>
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

    <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
             
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '35px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>How Does it Work?</h2>
                  <p className="mb-4" style={{color:'white'}}>
                  After creating an account with us, you’ll have around-the-clock access to our phone interpreters. We’ll connect you to experienced interpreters with the highest ratings in client satisfaction. If you do not wish to establish your own Zeeba H Solutions account, we can still assist with your telephonic interpretation needs by providing you with interpreters over the phone, as needed 
                  </p>
                  
                 </div>
				
                </div>
            </div>
        </div>


        <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'250px',paddingRight:'250px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
            <span>Over-the-Phone Interpretation Varieties</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'24px'}}>
              Zeeba H Solutions over-phone interpreters can benefit a variety of client requirements, as we offer three unique over-the-phone interpreting packages:
            </h2>
          
            <div className="mt-5">
  <ul className="nav nav-pills" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active tab-active"
        id="tab1-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab1"
        type="button"
        role="tab"
        aria-controls="tab1"
        aria-selected="true"
      >
        Monthly Subscriptions
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab2-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab2"
        type="button"
        role="tab"
        aria-controls="tab2"
        aria-selected="false"
      >
        Pre-Scheduled Phone Call
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab3-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab3"
        type="button"
        role="tab"
        aria-controls="tab3"
        aria-selected="false"
      >
        On-Demand Request
      </button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div
      className="tab-pane fade show active"
      id="tab1"
      role="tabpanel"
      aria-labelledby="tab1-tab"
    >
      {/* <h3>Tab 1 Content</h3> */}
      <p>This choice offers over-the-phone interpreting at a rate based solely on the minutes utilized, with a nominal monthly minimum. Unlike our rivals who commence charging upon phone connection, we initiate the timing only after you specify your required language and connect you with the suitable interpreter. Our OPI service is exceptionally user-friendly. For commonly requested languages such as Spanish and Chinese, our average connection time is under 20 seconds. We assure that all calls, on average, will be connected within one minute.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>If opening a monthly charge account is not practical for your company, Zeeba H Solutions can still fulfill your requirements. This alternative option provides clients with the chance to engage with the same highly skilled interpreters during our regular business hours, Monday to Friday from 9:00 AM to 6:00 PM ET. Simply provide a twenty-four-hour notice, along with the language, date, and time of service.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab3"
      role="tabpanel"
      aria-labelledby="tab3-tab"
    >
      {/* <h3>Tab 3 Content</h3> */}
      <p>Once you've established an account with Zeeba H Solutions, you'll gain immediate access to interpreters proficient in hundreds of languages. To establish an account or discover more about our on-demand interpreting services, email us at interpretation@zeebahsolutions.com. This option is advantageous for individuals who may encounter unexpected language barriers and/or require prompt communication with limited English speakers. Please be aware: rush fees may be applicable.</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
        </div>

        <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
             
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '25px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>Create Your OPI Account with Zeeba H Solutions</h2>
                  <p className="mb-4" style={{color:'white'}}>
                  Starting an OPI account or prescheduling telephonic interpretation services is fast and easy. If you would like to test our service, please ask us to set up a free demo. You can email us at interpretation@zeebahsolutions.com, or complete the form on this page to learn more. Once your account is established, it only takes about a minute to be connected with an interpreter.
                  </p>
                   <p> 
                    <Link to="mailto:interpretation@zeebahsolutions.com"  className="btn btn-white-outline shadow" id="quote-hero-btn">EMAIL US</Link>
                    </p>
                  
                 </div>
				
                </div>
            </div>
        </div>

        <ContactUsForm />


    </>
  )
}

export default OverPhoneInterpreting