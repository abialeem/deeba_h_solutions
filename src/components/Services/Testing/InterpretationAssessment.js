
import ContactUsTestingForm from "../../Forms/ContactUsTestingForm"

function InterpretationAssessment() {
  return (
    <>
    <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Interpretation Assessment</h1>
                        <p  className="mb-4">

                        Interpretation—or orally conveying information from one language to another—requires much more than just being able to speak two languages. It is a complex method of communication requiring a high degree of accuracy and skill. Interpreters are charged with communicating information to and from the source and target languages without errors, omissions, or additions, while preserving the style and cultural elements of the original message.
                        </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://www.cta.org/wp-content/uploads/2024/01/tpa-story-1160X700.jpg" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

                {/** more content here */}

                <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>WHY TESTING?</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>The Interpretation Assessment</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
             Zeeba H Solutions offers an Interpretation Assessment in several contexts and language combinations. It requires the candidate to perform a consecutive interpretation between two speakers, and is scored on linguistic components as well as overall accuracy according to our protocol.
               </p>
           <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
           As total fluency in the language pair is a basic requirement for interpretation, Zeeba H Solutions recommends first screening candidates in their non-native language using the Speaking and Listening Assessment.
            </p>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://th.bing.com/th/id/OIP.m9udJgGQ-N-3312t_avzuAHaE8?rs=1&pid=ImgDetMain"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="we-help-section" style={{marginTop:'5px',marginBottom:'0px'}}>
      <div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
            <h1 className="section-title mb-4">Process Of Interpretation Assessment  Offered By Zeeba H Solutions</h1>
            {/* <h4  style={{fontWeight:'600',fontSize:'18px',lineHeight:'30px'}}>
              
            </h4> */}
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
        style={{margin:'10px'}}
        aria-controls="tab1"
        aria-selected="true"
      >
       HOW IT WORKS
      </button>
    </li>
   
  </ul>
  <div className="tab-content" id="myTabContent" style={{background:'transparent',padding:'50px'}}>
  <div
      className="tab-pane fade show active"
      id="tab1"
      role="tabpanel"
      aria-labelledby="tab1-tab"
    >
<p style={{lineHeight:'32px',fontSize:'19px',color:'grey'}}>
Zeeba H Solutions’s Interpretation Assessment is conducted over the phone in a live format. Your candidate will be connected with two evaluators who will be the playing the roles of the speakers in the interpretation script, and who will score the candidate’s performance. To schedule an interpretation test, just contact Zeeba H Solutions’s Scheduling Department once your account has been set up, and you will be given a confirmation of the testing date and time along with the phone number for your candidate to call to be connected with his or her evaluators.

</p>
        </div>
       
  </div>
            </div>
          </div>
        </div>
      </div>
        </div>

                {/** more content ends here */}

    <ContactUsTestingForm/>
        </>
  )
}

export default InterpretationAssessment