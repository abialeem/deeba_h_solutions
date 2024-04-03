
import ContactUsTestingForm from "../../Forms/ContactUsTestingForm"

function TranslationAssessment() {
  return (
    <>
    <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Translation Assessment</h1>
                        <p  className="mb-4">

                        Translation is the rendering of text from one language into another. It not only requires an expert level of proficiency in reading and writing in both languages, but the ability to capture the nuances, style, tone, and intent of the original message. Translators must be able to select equivalent terms or phrases to best preserve the meaning of the source document as well as to convey cultural undertones.
                        </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://th.bing.com/th/id/OIP.-LyuWa4ttswSxg6XGhnFrgHaE8?w=1254&h=836&rs=1&pid=ImgDetMain" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
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
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>The Translation Assessment</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
             Zeeba H Solutions offers its Translation Assessment in a variety of contexts and languages, or can create a customized translation test for your organization using sample documentation that your candidates will be presented with on the job. Each test consists of a number of passages in a source language to be translated into the target language. 
               </p>
           <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
           Because the exams can be administered as needed by your administrators and on your site, you have the flexibility to screen your candidates’ translation skills whenever you choose. Simply send any completed tests back to Zeeba H Solutions for scoring, and you will receive the results within two business days.
            </p>
           
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://media.istockphoto.com/id/1285449643/photo/an-arab-woman-works-in-a-call-center.jpg?s=612x612&w=0&k=20&c=dtUKCNjPMdSKZ12zASDTehpy9J08NdyOqx2X94sFDiw="
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
            <h1 className="section-title mb-4">Process Of Translation Assessment  Offered By Zeeba H Solutions</h1>
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
The Translation Assessment is scored according to our Zeeba H Solutions scale. The evaluator scores the exam based on how well the candidate has comprehended and maintained the meaning of the original message, as well as how well they have used the mechanics of the target language, such as grammar, vocabulary, and spelling. As fluency in writing in both languages is a prerequisite of translation, you may also choose to use Zeeba H Solutions’s Written Assessment as a screening tool.

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

export default TranslationAssessment