import ContactUsTrainingForm from "../../Forms/ContactUsTrainingForm";
import { Link } from "react-router-dom";
import WhyChooseUs from '../../WhyChooseUs';

function Training() {
  // const contactNumber = '111-111-111';
  return (
    <>
    <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Build Your Career As A Professional Interpreter</h1>
                        <p  className="mb-4">

                        Build Your Career as a Professional Interpreter
Whether you’re just getting started, studying for your national certification, or earning credits to keep your certification, Zeeba H Solutions’s interpreter training courses let you advance your career at your own pace and on your schedule.
                        </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://1.bp.blogspot.com/-FioU47OlaaU/YGf-zYt2W3I/AAAAAAAAAC4/iWb8F2FCbwcIRzT-HrvgnGXDmiib9KaTACLcBGAsYHQ/s2048/desktop%2Bpublishing%2Bservice.jpg" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1"><img src="https://th.bing.com/th/id/R.09e988c00097116f9f2bcf472bd118b5?rik=f4EXF80JOPhadQ&riu=http%3a%2f%2fclevertopics.com%2fwp-content%2fuploads%2f2018%2f04%2ftranlate-tool-768x514.jpg&ehk=QBCEVGYmXPQW0gArwRdTfaZFXhvhYhsWxuBZRYSrdlY%3d&risl=&pid=ImgRaw&r=0" alt="Untree.co" /></div>
              <div className="grid grid-2"><img src="https://th.bing.com/th/id/OIP.NnAcO1u4a7fRkZxOKDeFrQAAAA?rs=1&pid=ImgDetMain" alt="Untree.co" /></div>
              <div className="grid grid-3"><img src="https://th.bing.com/th/id/OIP.NNEpR00yrEkr6Naj_FHSHgHaE8?rs=1&pid=ImgDetMain" alt="Untree.co" /></div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5" style={{ paddingTop: '50px' }}>
            <span>WELCOME TO ZEEBA H SOLUTIONS</span>
            <h2 className="section-title mb-4">
            Turn Your Language Skills Into A Rewarding Career
              </h2>
            <p>

            Interpreters are in demand in the healthcare industry. If you speak 2 or more languages fluently, this could be your chance to turn your skills into a well-paying job in a growing field. Plus, it’s a chance to make a real difference in the lives of other people and to ensure that they get the quality medical treatment they deserve.
            </p>
            {/* <p><Link to="./services" className="btn">Explore Our Services</Link></p> */}
          </div>
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'-150px',marginBottom:'-100px'}}>
      <div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
        <div className="row ">
        <div className="col-lg-12" style={{textAlign:'center'}}>
            <span>OUR SERVICES</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>
            Training For Every Stage Of Your Interpreter Journey
              </h2>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-12" style={{marginBottom:'20px'}}>
          <div  className="widget-container " >

<div  className="cta__content ">
  <div className="row">
  <div className="col-lg-5 col-md-6 col-xs-12">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default ">
<div  className=" icon ">
<img 
decoding="async" 

src="https://i.pinimg.com/originals/43/dc/da/43dcdae374bccd3b7f4bc02524dd765b.jpg"
class="attachment-large size-large wp-image-6702 entered lazyloaded"
style={{maxWidth:'300px'}}
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
</div>

<div className="col-lg-6 col-md-6 col-xs-12">
<h3  className=" cta__title  cta__content-item  content-item ">
Online Medical Interpreter Training
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
<p>
Launch your new career with our interactive 40-hour or 60-hour medical interpreter training! Earn a Certificate of Qualification to help you find work right away, plus meet the requirements to take your national certification exams.

</p>
<p>
Our video-based lessons teach you all that you need to know in a fun, interactive environment. No medical background is required. It’s all online, so you can learn at your own pace and on your own schedule. The 40 hour course is available to speakers of 13 languages. The 60 hour course is available to speakers of 7 languages.
</p>
<p>
  <span style={{fontSize:'14px',textTransform:'capitalize',fontWeight:'600'}}>When you enroll you get:</span>
  <ul>
    <li>
Interactive video lessons</li>
<li>
Optional weekly live sessions with a teacher
</li>
<li>
Certificate of qualification
</li>
<li>
And more…
</li>
  </ul>
</p>
</div>
<div  className=" cta__button-wrapper  cta__content-item  content-item ">
<Link  className="cta" to="/services/training/40-hour-course">
<span  className=" cta__button  btn ">
Learn More About 40 Hour Course <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</Link>
<Link  className="cta" to="/services/training/60-hour-course">
<span  className=" cta__button  btn ">
Learn More About 60 Hour Course <i aria-hidden="true"  className="fas fa-arrow-alt-circle-down"></i> </span>
</Link>
</div>
</div>
</div>
</div>
</div>
          </div>
        <div className="col-4">
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/training/continue-education-for-medical-interpreters">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://ulanguage.com/wp-content/uploads/2020/07/interp2-1024x682.jpg"
class="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Continuing Education for Medical Interpreters
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Earn the credits you need to keep your national certification valid. ALTA’s continuing education courses make it easy for you to earn CEUs from home to maintain your CCHI or NBCMI certification.
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
        <div className="col-4">
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/training/national-oral-exam-test-prep">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon h-100 w-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_227633637-1024x642.jpeg.webp"
class="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
National Oral Exam Test Prep
</h3>
<div  className=" cta__description  cta__content-item  content-item" styl={{height:'400px'}}>
Step up your career and boost your resume to the top of the pile with national certification from CCHI or NBCMI. Our interpreter test prep prepares you to go into your national oral exam with confidence and put you on the path to success.
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
        <div className="col-4">
{/** widget starts */}
<div  className="widget-container w-100 h-100">
<Link  className="cta" to="/services/training/accent-reduction-test">
<div  className="cta__content">
<div  className=" content-item  cta__content-item  icon-wrapper  cta__icon  view-default">
<div  className=" icon w-100 h-100">
<img 
decoding="async" 

src="https://en-us.thebigword.com/wp-content/uploads/2023/08/AdobeStock_486843796-1024x683.jpeg.webp"
class="attachment-large w-100 h-100 size-large wp-image-6702 entered lazyloaded"
alt={Math.random()+'image-not-icon'}/>
 </div>
</div>
<h3  className=" cta__title  cta__content-item  content-item">
Accent Reduction Training
</h3>
<div  className=" cta__description cta__content-item  content-item" styl={{height:'400px'}}>
Boost your confidence and open up new opportunities. ALTA’s accent reduction training helps you reduce your accent to communicate more effectively in American English.
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

<div className="a" style={{marginTop:'150px',paddingTop:'50px',marginBottom:'50px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
                {/* <!-- Start Column 1 --> */}
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '16px',color: 'white',textTransform:'uppercase' }}>
                    ADD YOUR NAME TO OUR GROWING LIST OF NATIONALLY CERTIFIED ALTA GRADUATES!
                  </h2>
                  <p className="mb-4" style={{color:'white',fontSize:'16px',padding:'30px',fontWeight: 'bold'}}>
                  "I highly recommend ALTA for its thorough and groundbreaking medical interpreter training to all who aspires to becoming an excellent and meticulous Medical Interpreter. Hats off to the instructors!"
"I couldn't be happier with this course. Instructors were so professional and helpful, the material was organized and comprehensive, and I learned a lot and developed. I highly recommend ALTA's 40h course."
"Great medical interpretation course delivered by experienced trainers. The online course material is well organized with easy-to-follow presentation styles, relevant examples, demonstrations, and role-play exercises."
                  </p>
                   
                 </div>
					{/* <!-- End Column 1 --> */}
                </div>
            </div>
        </div>

        <WhyChooseUs/>

    <ContactUsTrainingForm />
    </>
  )
}

export default Training