import ContactUsIndustriesForm from "../Forms/ContactUsIndustriesForm";
import { Link } from "react-router-dom";
import Hero from "../Hero";

export default function About() {
  const contactNumber = '+44 7448 552945';
  return (
    <>
    <Hero 
    heading='ABOUT US'
    description="Beyond Words: Innovators in Language Training Programs."
    imgSrc='/images/ZEEBA-LOGO.png'
    rotate='true'
    btnShow='true'
    />
    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-7" >
            <span>OUR SERVICES</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>
              Professional and Ready-To-Go Languages Services
              </h2>
           <p className="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
          Zeebah Solutions Language Services has provided professional translation, training, and testing services 
          for over 40 years. Because every Zeebah Solutions employee is also a part-owner in the company, you can be confident that our 
          team will be dedicated to supporting you throughout your journey. 
          Our purpose is to help you communicate across barriers in language and culture.
</p>

            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-5 " style={{padding:'30px',paddingLeft:'50px'}}>
          <span>OUR PROFESSIONAL LANGUAGE SERVICES THAT CAN HELP YOU:</span>
          <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-12 custom-list-type1' style={{padding:'10px',fontSize:'20px'}} type='none'>
  <li style={{margin:'10px'}}>
  <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>On-Site Interpretation</span>
    </li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Over the phone Interpretation</span></li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Legal Translation</span></li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Govt Translation</span></li>
  <li style={{margin:'10px'}}>
     <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Language Testing</span></li>
    <li style={{margin:'10px'}}>
     <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Accent Reduction</span></li>
    <li  style={{margin:'10px'}}>
     <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Legal Documentation</span></li>
    <li style={{margin:'10px'}}>
     <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Public Software Localization</span></li>
    <li style={{margin:'10px'}}>
    <i aria-hidden="true" className="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
            <span>And much much more...</span>
    </li>
</ul>

    </p>
          </div>
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'-150px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
        <div className="row ">
        <div className="col-lg-12" style={{textAlign:'center'}}>
            <span>OUR SERVICES</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>SELECT A SERVICE TO GET STARTED WITH</h2>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12 col-xs-12" style={{marginBottom:'20px'}}>
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/interpreting/on-site-interpreting">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://ulanguage.com/wp-content/uploads/2020/07/interp2-1024x682.jpg"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
On-Site Interpretation
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Here at Zeebah Solutions, we will find you the perfect interpreter to attend your lecture, meeting, conference, or assembly, as well as arrange any travel and any necessary equipment. </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12" style={{marginBottom:'20px'}}>
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/interpreting/over-phone-interpreting">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon h-100 w-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_227633637-1024x642.jpeg.webp"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Over-The-Phone Interpretation
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Get 24/7 instant access to 200+ languages with a monthly contract, or schedule interpreters as needed.
 </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12" style={{marginBottom:'20px'}}>

{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/interpreting/video-remote-interpreting">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_486843796-1024x683.jpeg.webp"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Video Remote Interpreting Services
</h3>
<div  className=" cta__description cta__content-item  content-item" styl={{height:'400px'}}>
Get affordable access to remote interpreters on-demand in 200+ languages 24/7, or access video interpreters in 30+ languages.
 </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12" style={{marginBottom:'20px'}}>
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/translation/document">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://th.bing.com/th/id/OIP.IJPqESU0P6IWIWhNp7aOJgHaFM?rs=1&pid=ImgDetMain"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Government Document Translation
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Here at Zeebah Solutions, we will find you the perfect professional translator to attend your presentations, meeting, conference, or assembly, as well as arrange any travel and any necessary equipment. </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12" style={{marginBottom:'20px'}}>
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/translation/website">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon h-100 w-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_227633637-1024x642.jpeg.webp"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Professional Website Translation Services
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Make your website easily accessible to all potential customers with accurate translations from Government-Approved fluent translators.
 </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12" style={{marginBottom:'20px'}}>
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/translation/software">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_486843796-1024x683.jpeg.webp"
className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Website Software Localization
</h3>
<div  className=" cta__description cta__content-item  content-item" styl={{height:'400px'}}>
Entering a new bill or schemes for citizens? With over 30 years of experience, Zeebah Solutions is a leader in software localization projects.
 </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Learn More <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
        </div>



        </div>
      </div>
    </div>

    <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
             
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '28px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>Need Language Services?</h2>
                  <p className="mb-4" style={{color:'white'}}>
                  Get A Free Quote by filling the form below or call us at {contactNumber}
                  </p>
                  
                 </div>
				
                </div>
            </div>
        </div>

        <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row ">

        <div className="col-lg-4 col-sm-12 col-md-12">
          {/** widget starts */}
        <div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/interpreting/">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon">
<svg xmlns="http://www.w3.org/2000/svg" id="uuid-2304cbc6-89dd-4d0f-bfd1-dd3da0fde350" viewBox="0 0 40 40"><path d="m28.93,7.87c-3.21,0-5.83,1.91-5.83,4.25,0,.66.21,1.29.62,1.89.18.26.41.6-.04,2.51l1.44-.72c.27-.13.58-.14.85-.02.9.39,1.92.6,2.96.6,3.21,0,5.83-1.91,5.83-4.25s-2.61-4.25-5.83-4.25Z"></path><path d="m14.22,14.17c-2.06,0-3.73,1.67-3.73,3.73s1.67,3.73,3.73,3.73,3.73-1.67,3.73-3.73-1.67-3.73-3.73-3.73Z"></path><path d="m6.77,28.7c-.94.47-1.53,1.38-1.53,2.38v.67c0,.21.19.38.43.38h17.11c.23,0,.43-.17.43-.38v-.67c0-1-.58-1.92-1.53-2.38-1.76-.88-4.49-1.92-7.45-1.92s-5.69,1.04-7.45,1.92Z"></path><path d="m28.93,2.87c-5.3,0-9.59,3.1-10.6,7.33-1.22-.66-2.62-1.03-4.1-1.03-4.81,0-8.73,3.92-8.73,8.73,0,1.94.65,3.73,1.72,5.18-1.01.36-1.92.76-2.67,1.14C1.89,25.53.24,28.16.24,31.08v.67c0,2.97,2.43,5.38,5.43,5.38h17.11c2.99,0,5.43-2.41,5.43-5.38v-.67c0-2.92-1.65-5.54-4.3-6.86-.76-.37-1.66-.77-2.67-1.14.17-.23.32-.46.47-.7.14.01.27.04.41.04.61,0,1.22-.14,1.79-.42l2-1c.99.24,2.01.37,3.04.37,6.07,0,10.83-4.06,10.83-9.25s-4.76-9.25-10.83-9.25Zm-14.71,9.3c3.16,0,5.73,2.57,5.73,5.73s-2.57,5.73-5.73,5.73-5.73-2.57-5.73-5.73,2.57-5.73,5.73-5.73Zm8.34,14.73c1.63.81,2.64,2.41,2.64,4.17v.67c0,1.31-1.09,2.38-2.43,2.38H5.67c-1.34,0-2.43-1.07-2.43-2.38v-.67c0-1.77,1.01-3.37,2.64-4.17,1.95-.97,4.99-2.13,8.34-2.13s6.39,1.16,8.34,2.13Zm6.36-8.53c-1.14,0-2.28-.2-3.32-.59l-3.06,1.53c-.14.07-.29.11-.45.11-.23,0-.46-.08-.65-.24-.31-.26-.43-.68-.31-1.06.37-1.17.75-2.64.79-3.18-.55-.87-.84-1.84-.84-2.82,0-3.45,3.51-6.25,7.83-6.25s7.83,2.8,7.83,6.25-3.51,6.25-7.83,6.25Z"></path></svg> </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Interpretation Services 
</h3>
<div  className=" cta__description  cta__content-item  content-item">
Zeebah Solutions’s language interpreting services for education make it easy for you to communicate effectively with students, parents, and educators. </div>
<div  className=" cta__button-wrapper  w-100 h-100 cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Interpretation <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
              
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12">
          {/** widget starts */}
        <div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/translation/document/">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon">
<svg xmlns="http://www.w3.org/2000/svg" id="uuid-cff343bb-9a3d-4872-97a6-5810dd26f193" viewBox="0 0 40 40"><path d="m23.43,16.07h-14.93c-.28,0-.5.22-.5.5v14.93c0,.28.22.5.5.5h14.93c.28,0,.5-.22.5-.5v-14.93c0-.28-.22-.5-.5-.5Zm-2.09,12.55h-10.76c-.55,0-1-.45-1-1s.45-1,1-1h10.76c.55,0,1,.45,1,1s-.45,1-1,1Zm0-3.59h-10.76c-.55,0-1-.45-1-1s.45-1,1-1h10.76c.55,0,1,.45,1,1s-.45,1-1,1Zm0-3.59h-10.76c-.55,0-1-.45-1-1s.45-1,1-1h10.76c.55,0,1,.45,1,1s-.45,1-1,1Z"></path><path d="m31.66,8h-15.24c-.19,0-.34.15-.34.34v5.72h7.36c.77,0,1.44.35,1.9.9h4.08c.55,0,1,.45,1,1s-.45,1-1,1h-3.48v1.59h3.48c.55,0,1,.45,1,1s-.45,1-1,1h-3.48v3.38h5.72c.19,0,.34-.15.34-.34v-15.24c0-.19-.15-.34-.34-.34Zm-2.24,5.38h-10.76c-.55,0-1-.45-1-1s.45-1,1-1h10.76c.55,0,1,.45,1,1s-.45,1-1,1Z"></path><path d="m37,8.34c0-2.95-2.4-5.34-5.34-5.34h-15.24c-.74,0-1.44.15-2.08.42-.11-.06-.23-.12-.35-.17-.04-.02-.07-.04-.11-.06l-2.24-.9c-2.05-.82-4.38.18-5.2,2.23-.13.32-.2.64-.25.97-1.96,1.73-3.17,4.15-3.18,6.78,0,.72.2,1.38.53,1.96-.33.71-.53,1.5-.53,2.34v14.93c0,3.03,2.47,5.5,5.5,5.5h14.93c.77,0,1.5-.16,2.17-.45.13.08.27.14.41.2.04.02.08.05.12.06l2.24.9c.49.2.99.29,1.48.29,1.59,0,3.09-.95,3.71-2.52.13-.32.2-.64.25-.97,1.96-1.73,3.17-4.15,3.18-6.78,0-.7-.19-1.35-.5-1.92.32-.68.5-1.43.5-2.23v-15.24Zm-27.46-1.56c-.34-.27-.5-.73-.33-1.15.21-.51.79-.76,1.3-.56l2.24.9s.05.04.09.06c.08.04.15.09.22.15.04.04.07.07.1.12.05.07.09.13.13.21.01.03.04.05.05.08,0,.03,0,.06,0,.09,0,.04.03.07.04.11,0,.05,0,.09,0,.13,0,.06,0,.12-.01.17-.02.08-.04.16-.08.23-.02.03-.02.07-.03.1l-1.34,2.24c-.19.31-.52.49-.86.49-.17,0-.35-.05-.51-.14-.44-.26-.58-.8-.39-1.25-1.22.76-2.13,1.98-2.13,3.54,0,.55-.45,1-1,1h0c-.55,0-1-.45-1-1,0-2.29,1.42-4.35,3.54-5.49Zm20.93,26.44c.34.27.5.72.33,1.15-.16.39-.53.63-.93.63-.12,0-.25-.02-.37-.07l-2.24-.9s-.03-.02-.04-.03c-.1-.05-.2-.11-.28-.19-.03-.03-.05-.07-.08-.1-.06-.07-.1-.14-.14-.23,0-.02-.03-.04-.04-.06,0-.03,0-.05,0-.08,0-.04-.03-.07-.04-.11,0-.05,0-.09,0-.13,0-.06,0-.11.01-.17.02-.08.04-.16.08-.23.02-.03.02-.07.03-.1l1.34-2.24c.28-.47.9-.63,1.37-.34.44.26.58.8.39,1.25,1.22-.76,2.13-1.98,2.13-3.54,0-.55.5-1,1-1,.55,0,1,.45,1,1,0,2.29-1.42,4.35-3.54,5.5Zm3.54-9.64c0,1.29-1.05,2.34-2.34,2.34h-5.72v5.57c0,1.38-1.12,2.5-2.5,2.5h-14.93c-1.38,0-2.5-1.12-2.5-2.5v-14.93c0-1.38,1.12-2.5,2.5-2.5h5.57v-5.72c0-1.29,1.05-2.34,2.34-2.34h15.24c1.29,0,2.34,1.05,2.34,2.34v15.24Z"></path></svg>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Translation Services 
</h3>
<div  className=" cta__description  cta__content-item  content-item">
Zeebah Solutions provides certified, notarized translations for important educational documentation. </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Translation <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
              
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12">
          {/** widget starts */}
        <div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/testing/speaking-listening-assessment">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon">
<svg xmlns="http://www.w3.org/2000/svg" id="uuid-fded8967-51e1-410f-9116-37dff87910d8" viewBox="0 0 40 40"><path d="m26,10.5h2.09l-2.59-2.59v2.09c0,.28.22.5.5.5Z"></path><path d="m23.5,10v-3.5h-12.5c-.28,0-.5.22-.5.5v26c0,.28.22.5.5.5h18c.28,0,.5-.22.5-.5V12.5h-3.5c-1.38,0-2.5-1.12-2.5-2.5Zm-11.71,2.11c.39-.39,1.02-.39,1.41,0l1.02,1.02,3.62-3.62c.39-.39,1.02-.39,1.41,0,.39.39.39,1.02,0,1.41l-4.33,4.33c-.19.19-.44.29-.71.29s-.52-.11-.71-.29l-1.73-1.73c-.39-.39-.39-1.02,0-1.41Zm15.71,18.39h-15c-.55,0-1-.45-1-1s.45-1,1-1h15c.55,0,1,.45,1,1s-.45,1-1,1Zm0-4h-15c-.55,0-1-.45-1-1s.45-1,1-1h15c.55,0,1,.45,1,1s-.45,1-1,1Zm0-4h-15c-.55,0-1-.45-1-1s.45-1,1-1h15c.55,0,1,.45,1,1s-.45,1-1,1Zm1-5c0,.55-.45,1-1,1h-9c-.55,0-1-.45-1-1s.45-1,1-1h9c.55,0,1,.45,1,1Z"></path><path d="m34.42,10.71c-.03-.17-.09-.33-.15-.49-.03-.08-.05-.17-.08-.26-.07-.18-.17-.34-.27-.5-.04-.06-.06-.13-.1-.19-.15-.22-.31-.42-.49-.6t0,0l-6-6s0,0,0,0c-.18-.18-.38-.34-.59-.49-.06-.04-.14-.07-.2-.11-.16-.09-.31-.19-.48-.26-.09-.04-.18-.05-.27-.08-.16-.05-.31-.11-.48-.15-.26-.05-.52-.08-.79-.08h-13.5c-3.03,0-5.5,2.47-5.5,5.5v26c0,3.03,2.47,5.5,5.5,5.5h18c3.03,0,5.5-2.47,5.5-5.5V11.5c0-.27-.03-.53-.08-.79Zm-2.92,22.29c0,1.38-1.12,2.5-2.5,2.5H11c-1.38,0-2.5-1.12-2.5-2.5V7c0-1.38,1.12-2.5,2.5-2.5h13.5c.13,0,.26.03.39.08.12.05.23.12.32.22l6,6c.09.09.17.2.22.32.05.12.08.25.08.38v21.5Z"></path></svg>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Testing Services 
</h3>
<div  className=" cta__description  cta__content-item  content-item">
Zeebah Solutions partners with hundreds of school districts across the country to verify language skills of students seeking the Seal of Biliteracy. </div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<span  className=" cta__button  btn ">
Testing <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</div>
</div>
</Link>
</div>
              {/** widget ends */}
              
        </div>
        </div>
      </div>
    </div>

    <ContactUsIndustriesForm />
    </>
  )
}
