import ContactUsTranslationForm from "../../Forms/ContactUsTranslationForm"
import { Link } from 'react-router-dom';

function Website() {
  const contactNumber = '111-111-111';
  return (
    <>
    <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'44px'}}>Website Translation Services</h1>
                        <p  className="mb-4">In the modern digital age, bridging language barriers online to connect organizations with global audiences has never been more valuable. At Zeeba H Solutions, we’ve taken it one step further and made sure that organizations have maintained their integrity and authenticity by translating their digital content with cultural, contextual and linguistic accuracy of the target language. </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://acutrans.com/wp-content/uploads/2021/02/website-translation-1024x694.jpg" alt="feautred_images_front" style={{borderRadius:'30px',width:'700px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" style={{alignContent:'center',textAlign:'center'}} >
          <h2 className="section-title mb-4">Professional Website Translation Services</h2>
          <h4  style={{fontWeight:'600',fontSize:'16px',lineHeight:'30px'}}>
          We’ve connected organizations and their customers in all types of industries including business, education, healthcare, legal and entertainment. Users around the world are more likely to engage with your content and services in their native languages – why not meet your audience on their own turf?
            </h4>
          </div>
          <div className="col-lg-6">
          <div className="aaa">
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
        OVER 100 LANGUAGES
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab2-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab2"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab2"
        aria-selected="false"
      >
       CUSTOMIZED SOLUTIONS
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
      <p>Zeeba H Solutions is known for its highly accurate website translation services in over 100 language pairs including Chinese-to-English and English-to-Chinese, Spanish, Korean, Arabic, and German. Our team of hand-picked professional website translators are native language experts, having significant website translation and location experience in e-commerce websites, online retailers, and global businesses.</p>
     
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>Whether you need to translate only a few pages, or build a multi-language website from scratch, Zeeba H Solutions offers you customizable solutions based on your target languages, project goals and budget. We translate all forms of digital content, including video, mobile apps, illustrations, graphics, eBooks, and other multimedia formats. Fill out the form below for a free quote or call us at {contactNumber} today to discuss your website translation project.</p>
     
    </div>
   
  </div>
</div>

          </div>
        </div>
      </div>
    </div>


    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'100px',paddingRight:'100px'}}>
        <div className="row justify-content-between">

    <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
          <h1 className="section-title mb-4">Why translate your website?</h1>
          <h4  style={{fontWeight:'600',fontSize:'16px',lineHeight:'30px'}}>
          As globalization continues at an unprecedented rate, businesses are quickly realizing that to increase sales and deliver excellent customer experiences, they need to communicate in the language of their international clientele. Here’s why website localization is important for businesses:
            </h4>

            <div className="aaa" >
  <ul className="nav nav-pills" id="myTab2" role="tablist" >
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active tab-active"
        id="tab11-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab11"
        type="button"
        role="tab"
        style={{margin:'10px'}}
        aria-controls="tab11"
        aria-selected="true"
      >
        EXPANDING MARKETS
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab12-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab12"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab12"
        aria-selected="false"
      >
       PERFECTED USER EXPERIENCE
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab13-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab13"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab13"
        aria-selected="false"
      >
       E-COMMERCE SALES GROWTH
      </button>
    </li>
  
    
  </ul>
  <div className="tab-content" id="myTab2Content" style={{background:'#ddd',padding:'10px',margin:'10px',borderRadius:'30px'}}>
    <div
      className="tab-pane fade show active"
      id="tab11"
      role="tabpanel"
      aria-labelledby="tab11-tab"
    >
      {/* <h3>Tab 1 Content</h3> */}
      <p>85% of web users speak one of these 10 languages: English, Chinese, Spanish, Arabic, Portuguese, Japanese, Russian, German, French or Malay. Web content is increasing at 5 times the rate in languages like Spanish and Chinese than in English. English is the primary language for only 27% of web users. This allows for your business to tap into the remaining 73% of web users in languages like Korean and Arabic.</p>
     
    </div>
    <div
      className="tab-pane fade"
      id="tab12"
      role="tabpanel"
      aria-labelledby="tab12-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>According to a European Commission study, 9 out of 10 users prefer to navigate websites in their own native languages. Having your website translated allows for immediate preference from global audiences.</p>
     
    </div>
    <div
      className="tab-pane fade"
      id="tab13"
      role="tabpanel"
      aria-labelledby="tab13-tab"
    >
      {/* <h3>Tab 3 Content</h3> */}
      <p>72% of online consumers in Europe, Asia and Latin America report that they almost never shop on foreign language websites. Having your product catalogs in foreign languages would undoubtedly increase your sales revenue significantly.</p>
     
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
                  <h2 className="mb-4 section-title" style={{ fontSize: '29px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>Contact Us Today for a Free Estimate</h2>
                
                  <p className="card-text" style={{fontSize:'15px',fontWeight:'600',lineHeight:'25px',color:'white'}}>
                  At Zeeba H Solutions, our website translators come with years of experience in translating businesses across countries and languages. Contact us today to inquire about our services and discuss the specific requirements for your project. Complete the form below to receive a free quote, or call us at {contactNumber}.
    </p> <p> 
                    <Link to="mailto:interpretation@zeebahsolutions.com"  className="btn btn-white-outline shadow" id="quote-hero-btn">EMAIL US</Link>
                    </p>
                 </div>
                </div>
            </div>
        </div>

    <ContactUsTranslationForm />
    </>
  )
}

export default Website