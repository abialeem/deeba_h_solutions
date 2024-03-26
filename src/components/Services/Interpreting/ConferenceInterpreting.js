import ContactUsForm from "../../ContactUsForm"
import FieldsFeatured from "../../FieldsFeatured"
import './OverPhoneInterpreting.css'
function ConferenceInterpreting() {
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Conference Interpreting For Education, Medical, Government & More.</h1>
                        <p  className="mb-4">Zeeba H Solutions improves multilingual conference and meeting communication for government, healthcare, legal and insurance organizations every day. </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://new.translators-usa.com/wp-content/uploads/2022/01/Conference-Interpreting2-Translators-USA-LLC-1.jpeg" alt="feautred_images_front" style={{borderRadius:'30px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'100px',paddingRight:'100px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
            <h1 className="section-title mb-4" style={{fontWeight:'600',fontSize:'34px'}}>
              What your conference interpretation experience will look like.
              </h1>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'18px'}}>
              At Zeeba H Solutions,we understand that setting up interpretation for a conference isn’t your area of expertise. So we’ll assign you a dedicated Project Manager to help you plan and execute a successful interpretation strategy.
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
        1. CONSULTATION
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
        2. PRE-EVENT PLANNING
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
        3. AT THE CONFERENCE
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab4-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab4"
        type="button"
        role="tab"
        aria-controls="tab4"
        aria-selected="false"
      >
        4. POST EVENT WRAP-UP
      </button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent" style={{marginTop:'50px'}}>
    <div
      className="tab-pane fade show active"
      id="tab1"
      role="tabpanel"
      aria-labelledby="tab1-tab"
    >
      {/* <h3>Tab 1 Content</h3> */}
      <p>Our experienced sales and project management teams will review your event details to help you determine your interpretation equipment needs and plan an effective implementation strategy. We guide you smoothly through the entire process because we know the right questions to ask from the start.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>From getting your equipment to the site to choosing the right interpreters for your conference, our team gets to work well in advance to make your event a success. We will find highly trained professional interpreters with specific, in-depth knowledge of your subject matter. And we’ll use our extensive network to find local interpreters, when possible, to save you money on travel and lodging expenses.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab3"
      role="tabpanel"
      aria-labelledby="tab3-tab"
    >
      {/* <h3>Tab 3 Content</h3> */}
      <p>Your Project Manager will arrive in plenty of time to get all of your conference interpretation equipment set up and tested before your first speaker takes the stage. Attendees will be issued language-appropriate headsets on arrival. And of course, your Project Manager is standing by to resolve any technical issues quickly. For multi-day assignments, your Project Manager can make day-to-day adjustments, if necessary.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab4"
      role="tabpanel"
      aria-labelledby="tab4-tab"
    >
      {/* <h3>Tab 4 Content</h3> */}
      <p>Your Project Manager will listen to and respond to your feedback during the event. After the conference, we’ll ask for your detailed input on our interpretation services in a feedback survey. Let us know what you loved and any areas we can improve. We’re constantly incorporating your feedback to help us improve our conference interpreting procedures and make sure we are 110% prepared for your next event!</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
        </div>

<FieldsFeatured />

    <ContactUsForm />
    </>
  )
}

export default ConferenceInterpreting