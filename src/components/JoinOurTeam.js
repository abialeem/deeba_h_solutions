import { Link } from "react-router-dom"
export default function JoinOurTeam(){
    return (
        <>
         <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1>CAREERS</h1>
                        <h4  className="mb-4" style={{color:'white'}}>We're on a mission to help people communicate when it matters most.</h4>
                        <h4 className="mb-4" style={{color:'white'}}>Want to join us?</h4>
                        {/* <p style={{marginTop:'50px'}}>
                            <Link to="/contact-us"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</Link>
                            <Link to="/get-a-quote"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</Link>
                            </p> */}
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap" >
                        <img src={process.env.PUBLIC_URL + "/images/careers.jpeg"} alt="feautred_images_front"  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row" style={{marginTop:'100px',padding:'150px'}}>
        <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12" >
        <div className="widget-container w-100 h-100">
            <a className="cta" href="mailto:resume@zeebahsolutions.com">
                <div className="cta__content">
                    <div className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
                        <div className=" icon w-100 h-100" style={{height:'200px'}}>
                            <img decoding="async"
                             src="https://th.bing.com/th/id/OIP.atQCnN0fHqe6SMinbRG8JAHaDt?rs=1&pid=ImgDetMain"
                             className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
                              alt="0.7078361497245007image-not-icon"
                              
                              />
                                </div>
                                </div>
            <h2 className=" cta__title  cta__content-item  content-item" style={{textTransform:'capitalize'}}>Join Zeeba H Solutions as a Translator</h2>
            <div className=" cta__description  cta__content-item  content-item" >
            If you are a professional translator who wishes to work with us, please click here to submit your resume:
               </div>
               <div className=" cta__button-wrapper  cta__content-item  content-item ">
                <span className=" cta__button  btn ">RESUME@ZEEBAHSOLUTIONS.COM <i aria-hidden="true" className="fas fa-arrow-alt-circle-down"></i> </span>
                </div></div>
                </a>
                </div>
        </div>
                                 
        <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12" >
        <div className="widget-container w-100 h-100">
            <a className="cta" href="mailto:jobs@zeebahsolutions.com">
                <div className="cta__content">
                    <div className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
                        <div className=" icon w-100 h-100" style={{height:'200px'}}>
                            <img decoding="async"
                             src="https://th.bing.com/th/id/OIP.fRR3qIHzzIQ194QF1HyXHQHaDt?pid=ImgDet&w=474&h=237&rs=1"
                             className="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
                              alt="0.7078361497245007image-not-icon"
                              
                              />
                                </div>
                                </div>
            <h2 className=" cta__title  cta__content-item  content-item" style={{textTransform:'capitalize'}}>Join Zeeba H Solutions as an Interpreter</h2>
            <div className=" cta__description  cta__content-item  content-item" >
            If you are a certified interpreter who wishes to work with Zeeba H Solutions, please check our current openings:
               </div>
               <div className=" cta__button-wrapper  cta__content-item  content-item ">
                <span className=" cta__button  btn ">JOBS@ZEEBAHSOLUTIONS.COM <i aria-hidden="true" className="fas fa-arrow-alt-circle-down"></i> </span>
                </div></div>
                </a>
                </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-11" >
            <span>Work Wonders, Work With US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>“ZEEBA H SOLUTIONS is an Equal Employment Opportunity Employee”</h2>
           <p class="has-xl-font-size" style={{
              fontSize:'16px',
              lineHeight:'24px',
            }}>
          It is the policy of Zeeba H Solutions not to discriminate against any employee or applicant for employment because of race, 
          color, religion, sex, sexual orientation, gender identity, national origin, age, marital status, 
          genetic information, disability or because he or she is a protected veteran.
           It is also the policy of Zeeba H Solutions to take affirmative action to employ and to advance in employment, 
           all persons regardless of race, color, religion, sex, sexual orientation, gender identity, 
           national origin, age, marital status, genetic information, disability or protected veteran status, and to base 
           all employment decisions only on valid job requirements. This policy shall apply to all employment actions, 
           including but not limited to recruitment, hiring, upgrading, promotion, transfer, demotion,layoff, recall, termination, 
           rates of pay or other forms of compensation and selection for training, including apprenticeship, at all levels of employment.
</p>
<p class="has-xl-font-size" style={{
              fontSize:'16px',
              lineHeight:'24px',
            }}>
Employees and applicants of Zeeba H Solutions will not be subject to harassment on the basis of race, color, religion, sex, 
sexual orientation, gender identity, national origin, age, marital status, genetic information, disability or
 because he or she is a protected veteran. Additionally, retaliation, including intimidation, threats, or coercion,
  because an employee or applicant has objected to discrimination, engaged or may engage in filing a complaint,
   assisted in a review, investigation, or 
hearing or have otherwise sought to obtain their legal rights under any Federal, State, or local EEO law is prohibited.
</p>

            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          
        </div>
      </div>
    </div>
        </>
    )
}