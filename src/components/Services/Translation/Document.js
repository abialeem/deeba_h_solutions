import React from 'react'
import ContactUsTranslationForm from '../../Forms/ContactUsTranslationForm'
import { Link } from 'react-router-dom';
import Hero from '../../Hero';

function Document() {
  const contactNumber = '+44 7448 552945';
  return (
    <>
    <Hero 
     heading='Expert translations paving the way for seamless global communication.'
     description="At Zeeba H Solutions,we only use established expert linguists for our document translations.we combine cutting-edge machine translation, workflow automation and natural language speech technologies with the greatest human talent to deliver the new quality benchmark in the translation industry."
     imgSrc='/images/documentTranslationFeatured.jpeg'
     rotate='false'
     btnShow='false'
    />
   
    <div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
            <h1 className="section-title mb-4">Document Translation Services from the Experts.</h1>
            <h4  style={{fontWeight:'600',fontSize:'18px',lineHeight:'30px'}}>
              At Zeeba H Solutions,for each translation project, we review the text for specialties. We then use a professional translator with experience in the subject matter of your document. The way we pair translators to projects guarantees your translations use the best terminology for your field. And because our translators are native speakers, the text will reflect the cultural and linguistic nuances of the language.
            </h4>
          
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
        WHAT IS A CERTIFIED TRANSLATION?
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
        WE TRANSLATE ALL TYPES OF DOCUMENTS
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab3-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab3"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab3"
        aria-selected="false"
      >
        DOCUMENT TRANSLATION IN ALL FILE FORMATS
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab4-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab4"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab4"
        aria-selected="false"
      >
        FAST TURNAROUND TIME, FREE QUOTES
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab5-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab5"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab5"
        aria-selected="false"
      >
       TECHNICAL DOCUMENTS, A REAL SCENARIO
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
      <p>Government agencies and courts often state they will only accept documents that have been furnished by certified translation services. However, there is no official government certification standard for translation agencies in the United States. Instead, certified translation means the document has been translated by a professional, qualified translator with no vested interest in the outcome of the translation. For example, translating your own documents for a court case presents a conflict of interest. You’d also need to provide proof of qualification as a translator.</p>
      <p>Whether you have financial documents or other legal documents for translation, Zeeba H Solutions can help. Zeeba H Solutions can provide certified, notarized translations for legal use. The certification is a free service: there is no additional cost beyond the base cost of the translation. Your translated document will be signed by an Zeeba H Solutions employee, attesting to its accuracy. The same document will also be notarized by a notary public. The certified copies can be emailed or provided in hard copy format.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <p>We translate documents in more than 100 languages and translate thousands of documents every year. For legal documents, Zeeba H Solutions translates contracts, certificates, patents, and more. For business translation, examples of documents we translate include handbooks, business plans, website text, and income statements.</p>
      <p>With each document translation project, we implement a multi-phase quality assurance process. Our quality management system is ISO Certified. This means we use industry best practices to ensure the translated text is error-free and delivered on time. As part of that process, Zeeba H Solutions uses the latest translation memory tools to ensure consistency across all documents. We strive to offer the best, most professional document translation services available.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab3"
      role="tabpanel"
      aria-labelledby="tab3-tab"
    >
      {/* <h3>Tab 3 Content</h3> */}
      <p>When it comes to file format, Zeeba H Solutions can work with any file type you need. For MS office that includes Microsoft Word, PowerPoint, and Excel. If your document is in PDF format, we can provide desktop publishing services. We’ll provide an editable translated version that mirrors the original.</p>
      <p>We can also translate your organization’s website. Zeeba H Solutions has the technical savvy to handle all web-based file formats and popular content management systems. That includes those written in languages such as HTML, XML, JAVA, ASP, or PHP.</p>
      <p>Other types of file formats we accept include: Adobe InDesign, Illustrator, Adobe Photoshop, and Microsoft Publisher. For any file format, we can provide you with turnkey service by providing press-ready documents ready to publish.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab4"
      role="tabpanel"
      aria-labelledby="tab4-tab"
    >
      {/* <h3>Tab 4 Content</h3> */}
      <p>Zeeba H Solutions Language Services can accommodate even the most aggressive turnaround time to meet your critical scheduling needs. Whether you need a documented translated in 24 hours or 24 days, we’ll come with a plan to meet your deadline.</p>
      <p>For an estimate of the cost and turnaround time to translate your document, please don’t hesitate to give us a call. You can also contact us via the quote form on this page. Most quotes are delivered only 2 business hours after we receive your document.</p>
    </div>
    <div
      className="tab-pane fade"
      id="tab5"
      role="tabpanel"
      aria-labelledby="tab5-tab"
    >
      {/* <h3>Tab 5 Content</h3> */}
      <p>You’ve decided to bid on an overseas contract, but there’s just one problem – the proposal needs to be in Japanese. You first turned to an online translation service. But the machine translation provided by Google Translate doesn’t look like it’ll impress your potential customer. The bid is more than 20 pages of text and graphs. On top of that, it was created in Adobe Illustrator. Your designer doesn’t feel comfortable handling the Japanese version because she can’t read it.</p>
      <p>Zeeba H Solutions can split the project among a team of 3 translators to meet your deadline. On top of that, an editor will review the final product to ensure it reads smoothly and consistently. Our typesetting experts will then format the Illustrator file in Japanese. Finally, a reviewer will proofread the print-ready file for accuracy. The result is a polished, professional proposal that is ready-to-print, delivered on time and on budget.</p>
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

export default Document