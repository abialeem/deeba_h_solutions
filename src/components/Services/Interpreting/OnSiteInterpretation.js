// import {Link} from  'react-router-dom'
import ContactUsForm from '../../Forms/ContactUsForm'
import Hero from '../../Hero'
import IndustriesFeatured from '../../IndustriesFeatured'

function OnSiteInterpretation() {
  return (
    <>
    <Hero 
    heading='Whatever you need to say, our expert linguists will say for you'
    description='In complex or sensitive situations, face to face interpreting is the perfect solution, enabling you to communicate with a clear and accurate mutual understanding.'
    imgSrc='/images/onsite_interpretation_feature_1.webp'
    rotate='false'
    btnShow='false'
    />
     
    
          <div className="row justify-content-between" style={{marginTop:'100px'}}>
            <div className="col-lg-12" style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', marginTop: '50px', marginBottom: '100px' }}>
              Our interpreters are available day or night, 365 days a year, making thebigword the ideal provider for all your onsite interpretation needs.
                </h2>
            </div>
          </div>
          

          {/* on-site interpretation starts here */}
          <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
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
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="imgs-grid" style={{marginLeft:'200px'}}>
              <div className="grid grid-1">
                <img 
                src="https://en-us.thebigword.com/wp-content/uploads/2021/04/Face-to-face-interpreter-01-300x200.jpg.webp"
                 alt="Untree.co"
                  />
              </div>
              <div className="grid grid-2">
                <img 
                src="https://en-us.thebigword.com/wp-content/uploads/2021/04/Telephone-Interpreter-01-300x200.jpg.webp" 
                alt="Untree.co" 
                />
                </div>
              <div className="grid grid-3">
                <img
                 src="https://th.bing.com/th/id/OIP.3eBPrNlTgaxk3H2zoJrCKQHaGN?w=940&h=788&rs=1&pid=ImgDetMain"
                  alt="Untree.co"
                   />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   {      /*  more components or sections starts here  */       }

   <div className="we-help-section" style={{marginTop:'0px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row ">
          
        <div className="col-lg-12" style={{textAlign:'center',padding:'30px'}} >
            <span style={{fontWeight:'500'}}>ON-SITE INTERPRETATION SERVICES</span>
            <h2 className="section-title mb-4 " style={{fontSize:'29px',fontWeight:'500'}}>Choose the On-Site Interpretation Service that Best Fits Your Needs.</h2>
            
          </div>

          <div className='col-lg-6'>
          <div className="card d-flex h-100" style={{padding:'10px'}}>
  <img src={process.env.PUBLIC_URL + "/images/onsite_interpretation_feature_1.webp" }
   className="card-img-top"
    alt={'onsite-interpretation-image'+Math.random()} 
    style={{padding:'15px',borderRadius:'20px',width:'100%',height:'350px'}}
    />
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'20px',fontWeight:'600',lineHeight:'32px',fontFamily:'Rubik,sans-serif'}}>
    On-Site Consecutive Interpretation
    </h5>
    <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
    Consecutive interpretation is our most popular face-to-face interpretation service. In consecutive interpretation, a person speaks in one language and then pauses for the interpreter to convey what was said in the listener’s language.
            </p>
            <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
It often requires only one interpreter, so it is generally the most cost-effective on-site interpretation solution. Speakers must remember to pause from time to time to allow the interpreter to speak so it can create delays in communication.
</p>
<p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
On-site interpretation is ideal for 1-on-1 or small-group interpretation scenarios where most attendees speak a common language, such as:
    </p>
    <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-6'>
  <li>Small business meetings</li>
  <li>HR meetings</li>
  <li>Client-attorney meetings</li>
  <li>Court dispositions</li>
</ul>
<ul className='col-6'>
  <li>Parent-teacher meetings</li>
  <li>Interviews</li>
  <li>Medical consultations</li>
  <li>And more…</li>
</ul>
    </p>
  </div>
</div>

          </div>

          <div className='col-lg-6'>
          <div className="card d-flex h-100" style={{padding:'10px'}}>
  <img src={process.env.PUBLIC_URL + "/images/onsite_interpretation_feature_2.jpeg" }
   className="card-img-top"
    alt={'onsite-interpretation-image'+Math.random()} 
    style={{padding:'15px',borderRadius:'20px',width:'100%',height:'350px'}}
    />
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'20px',fontWeight:'600',lineHeight:'32px',fontFamily:'Rubik,sans-serif'}}>
    On-Site Simultaneous Interpretation
    </h5>
    <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
    Simultaneous interpretation takes place in real-time, using specially-trained, two-person teams working together and broadcasting their voice to an audience wearing wireless headsets. You may hear it referred to as real-time interpretation or UN-style interpretation.
            </p>
            <p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
            Simultaneous interpretation assignments require specialized equipment and it is not uncommon to have multiple booths and teams to cover several languages at large events.
</p>
<p className="card-text" style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px'}}>
Simultaneous on-site interpretation services are ideal for large groups and multiple-language scenarios, such as:
    </p>
    <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-6'>
  <li>Conference interpretation</li>
  <li>International conventions</li>
  <li>Business/board meetings</li>
  <li>Lectures</li>
</ul>
<ul className='col-6'>
  <li>Courtrooms</li>
  <li>Facility tours</li>
  <li>Training sessions</li>
  <li>And more…</li>
</ul>
    </p>
  </div>
</div>

          </div>
          
        </div>
      </div>
    </div>

            <IndustriesFeatured/>
            <ContactUsForm />
    </>
  )
}

export default OnSiteInterpretation