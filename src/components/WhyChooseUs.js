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
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_1.jpeg'}
                title='PROFESSIONAL INTERPRETATION SERVICES'
                description='Qualified interpreters with experience in medical and legal settings, business meetings, conferences, and more. Available on-site and over-the-phone. Video remote interpreting and rental equipment also available.'
                linkURL='/services/interpreting'
                />
                <FeatureCard 
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_2.jpeg'}
                title='Mutli-Medium Translation Services'
                description='Professional localization and document translation services are trusted by thousands of organizations doing business globally. ISO-certified to ensure a fast turnaround, high accuracy, and exceptional quality.'
                linkURL='/services/translation/document'
                />
                <FeatureCard 
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_3.jpeg'}
                title='Language Proficiency Testing Services'
                description='Language proficiency tests for business, healthcare organizations, and government agencies. Reliable language proficiency testing is available online and over the phone for any position.'
                linkURL='/services/testing/speaking-listening-assessment'
                />
                <FeatureCard 
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_4.jpeg'}
                title='Language Training'
                description='Live Face-to-Face Online language training for corporate and government clients. Customized, interactive, and guaranteed language instruction from an experienced professional trainer.'
                linkURL='/services/training'
                />
                <FeatureCard 
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_5.jpeg'}
                title='Interpreter Training'
                description='Available in-person and online, Zeeba H Solutions will transform your language skills into a fulfilling career. Register for our 40-hour interpreter training course to earn a certificate for qualification.'
                linkURL='/services/training'
                />
                <FeatureCard 
                imgSrc={process.env.PUBLIC_URL + '/images/home_why_choose_us_6.jpeg'}
                title='Accent Reduction'
                description='Accent Training programs for call-center agents, medical professionals, and anyone ready to break the communication barriers a foreign language accent can create. Live Face-to-Face and Online programs.'
                linkURL='/services/training/accent-reduction-test'
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;