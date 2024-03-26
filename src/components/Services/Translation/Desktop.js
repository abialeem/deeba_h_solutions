import ContactUsTranslationForm from "../../Forms/ContactUsTranslationForm"
import { Link } from 'react-router-dom';

function Desktop() {
  const contactNumber = '111-111-111';
  return (
    <>
     <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1 style={{fontSize:'34px'}}>Professional Multilingual Desktop Publishing Translation Services</h1>
                        <p  className="mb-4">At Zeeba H Solutions, our multilingual desktop publishing solutions eliminate the need to hire freelance designers for the documents you have translated. Whether you are preparing product inserts or instruction manuals for international products, our professional page layout service ensures that your final product will make a positive impression on your target audience, across different languages. </p>
                        
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="https://th.bing.com/th/id/OIP.XJUVtdX7KGcSRSacuCx72wHaE8?rs=1&pid=ImgDetMain" alt="feautred_images_front" style={{borderRadius:'30px',width:'700px'}}  className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" >
            <span>Desktop Publishing Services : Overview</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'44px'}}>What is Desktop Publishing Services?</h2>
           <p class="has-xl-font-size" style={{
              fontSize:'20px',
              lineHeight:'30px',
            }}>
           Desktop Publishing Services (DTP) allow for documents to be optimized for print and digital media using page layout design, typesetting, formatting and graphic editing. The designer who created your files may not feel comfortable handling the layout in other languages due to language-specific requirements such as word growth, left-to-right layout, and Unicode font selection – and that’s where our experts come in. DTP services ensure that text documents like brochures, books, or banner ads are consistent across all publishing mediums and relay the same message whether on a printed pamphlet or your website.
            </p>
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-6 ">
            <div className="hero-img-wrap" style={{marginLeft:'40px'}}>
              
                <img 
                src="https://1.bp.blogspot.com/-FioU47OlaaU/YGf-zYt2W3I/AAAAAAAAAC4/iWb8F2FCbwcIRzT-HrvgnGXDmiib9KaTACLcBGAsYHQ/s2048/desktop%2Bpublishing%2Bservice.jpg"
                 alt="Untree.co"
                 style={{width:'600px',borderRadius:'20px'}}
                  />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" style={{alignContent:'center',textAlign:'center'}} >
          <h2 className="section-title mb-4">Professional Desktop Publishing Services</h2>
          <h4  style={{fontWeight:'600',fontSize:'16px',lineHeight:'30px'}}>
          Our team of DTP specialists work closely with you to develop document templates for your publications while remaining true to your brand’s image and messaging to foreign language target audiences.
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
       DOCUMENT TRANSLATION SERVICES
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
       TYPESETTING SERVICES
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
      <p>Our DTP specialists maintain consistency across all your visual communication collateral- we offer layout design, layout formatting and file conversion that allows for you to translate text into different target languages while maintaining a consistent brand message.</p>
     
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>When text is translated into a foreign language, your document may require substantial adjustments. If the translated language is read from right to left, or it uses a different alphabet, it will most likely change the layout, length or font of a document. We ensure that your text uses the correct fonts and is translated accurately across all languages.</p>
     
    </div>
   
  </div>
</div>

          </div>
        </div>
      </div>
    </div>

    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-6" style={{alignContent:'center',textAlign:'center'}} >
          <h2 className="section-title mb-4">DTP Platforms and Software</h2>
          <h4  style={{fontWeight:'600',fontSize:'16px',lineHeight:'30px'}}>
          We work with a variety of file formats and software packages, including but not limited to:
            </h4>
          </div>
          <div className="col-lg-6">
          {/* <i aria-hidden="true" class="fas fa-check-circle"></i> */}
          <p className='card-text row' style={{fontSize:'15px',fontWeight:'400',lineHeight:'25px',margin:'10px'}}>
<ul className='col-12 custom-list-type1' style={{padding:'10px',fontSize:'20px'}} type='none'>
  <li style={{margin:'10px'}}>
  <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Adobe InDesign, Illustrator, and Photoshop</span>
    </li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>QuarkXPress</span></li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>CorelDRAW</span></li>
  <li style={{margin:'10px'}}> 
    <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>FrameMaker and PageMaker</span></li>
  <li style={{margin:'10px'}}>
     <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Flash</span></li>
    <li style={{margin:'10px'}}>
     <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Articulate Studio and Storyline</span></li>
    <li  style={{margin:'10px'}}>
     <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>PowerPoint and Keynote</span></li>
    <li style={{margin:'10px'}}>
     <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Microsoft Publisher</span></li>
    <li style={{margin:'10px'}}>
     <i aria-hidden="true" class="fas fa-check-circle" style={{marginRight:'10px'}}></i> 
    <span>Autocad</span></li>
</ul>

    </p>

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

export default Desktop