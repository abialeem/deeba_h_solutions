function AboutUsBar(){
    return (
        <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
                {/* <!-- Start Column 1 --> */}
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '35px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>Preparing For Your Test?</h2>
                  <p className="mb-4" style={{color:'white'}}>View our test prep materials or FAQ’s for common questions about taking a test.</p>
                   <p style={{marginTop:'30px'}}>
                    <a href="about.html" className="btn btn-white-outline" style={{marginRight:'30px'}}>VIEW TEST PREP</a>
                    <a href="about.html" className="btn btn-secondary">VIEW FAQS</a>
                    </p>
                 </div>
					{/* <!-- End Column 1 --> */}
                </div>
            </div>
        </div>
    );
}

export default AboutUsBar;