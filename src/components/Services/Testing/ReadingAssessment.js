import ContactUsTestingForm from "../../Forms/ContactUsTestingForm"
import Hero from "../../Hero"
function ReadingAssessment() {
  return (
   <>
   <Hero 
   heading='Reading Skills Assessment'
   description="If your organization receives documents in different languages, you need to verify that the employees handling those documents are proficient in reading. Zeeba H Solutions offers a wide range of Reading Skills Assessments in various content areas (e.g., general, customer service, government, legal, etc.) and at different levels of our 12-point scale. Zeeba H Solutions’s reading exams are offered in most of the 90+ languages that we test. Since they are completed online and are automatically scored, you receive results immediately. This makes it easy and efficient for you to screen your candidates on the spot, whether you are hiring to fill a bilingual position or recruiting personnel for an overseas operation."
   imgSrc='/images/readingSkillsAssessmentFeatured.jpeg'
   rotate='false'
   btnShow='false'
   />

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY TESTING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>The Reading Assessment</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>The Reading Assessment is an online test designed to verify whether or not a candidate can read and comprehend the target language at a pre-determined level of skill based on our scale. It consists of a variety of passages written in the language being tested, with each passage being followed by a series of multiple-choice questions about the information contained within it.</p>
           <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
Scoring is done on a percentage basis, making it easy for you to determine which of your candidates can read and comprehend the language at the level needed.
            </p>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://th.bing.com/th/id/OIP.1Sd44qQ9I6WaMSJCSsDyqwHaE8?rs=1&pid=ImgDetMain"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>


    <ContactUsTestingForm/>
   </>
  )
}

export default ReadingAssessment