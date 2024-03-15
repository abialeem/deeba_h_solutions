import FeatureCard from "./FeatureCard";

function WhyChooseUs(){
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12" style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', marginTop: '50px', marginBottom: '100px' }}>Discover our comprehensive suite of language solutions designed to elevate your global communication.</h2>
  
              <div className="row my-12">
                {/* Individual feature cards */}
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/04/service-tile_interpretation-1024x480.jpg'
                title='PROFESSIONAL INTERPRETATION SERVICES'
                description='Qualified interpreters with experience in medical and legal settings, business meetings, conferences, and more. Available on-site and over-the-phone. Video remote interpreting and rental equipment also available.'
                linkURL='#'
                />
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/04/service-tile_translation-1024x480.jpg'
                title='Mutli-Medium Translation Services'
                description='Professional localization and document translation services are trusted by thousands of organizations doing business globally. ISO-certified to ensure a fast turnaround, high accuracy, and exceptional quality.'
                linkURL='#'
                />
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/06/service-tile2_language-testing-1024x480.jpg'
                title='Language Proficiency Testing Services'
                description='Language proficiency tests for business, healthcare organizations, and government agencies. Reliable language proficiency testing is available online and over the phone for any position.'
                linkURL='#'
                />
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/05/service-tiles_language-training-1024x480.jpg'
                title='Language Training'
                description='Live Face-to-Face Online language training for corporate and government clients. Customized, interactive, and guaranteed language instruction from an experienced professional trainer.'
                linkURL='#'
                />
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/05/service-tile_accent-reduction-1024x480.jpg'
                title='Interpreter Training'
                description='Available in-person and online, Zeeba H Solutions will transform your language skills into a fulfilling career. Register for our 40-hour interpreter training course to earn a certificate for qualification.'
                linkURL='#'
                />
                <FeatureCard 
                imgSrc='https://altalang.com/wp-content/uploads/2023/06/service-tile2_accent-reduction-1024x480.jpg'
                title='Accent Reduction'
                description='Accent Training programs for call-center agents, medical professionals, and anyone ready to break the communication barriers a foreign language accent can create. Live Face-to-Face and Online programs.'
                linkURL='#'
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;