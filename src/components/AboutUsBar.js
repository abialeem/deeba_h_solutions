import { Link } from "react-router-dom";

function AboutUsBar(){
    return (
        <div className="a" style={{marginTop:'0px',paddingTop:'50px',marginBottom:'0px',paddingBottom:'20px',boxShadow: 'inset 0px 0px 10px black',background: '#3b5d50'}}>
			<div className="container-fluid">
				<div className="row">
                {/* <!-- Start Column 1 --> */}
                <div className="col-md-12 col-lg-12 mb-12 mb-lg-0 " style={{ textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
                  <h2 className="mb-4 section-title" style={{ fontSize: '35px', fontWeight: 'bold',color: 'white',textTransform:'uppercase' }}>Need Help While Choosing Your Desired Services?</h2>
                  <p className="mb-4" style={{color:'white'}}>Reach Out To Us Now</p>
                   <p style={{marginTop:'30px'}}>
                    <Link to="/about" className="btn btn-white-outline" style={{marginRight:'30px'}}>ABOUT US</Link>
                    <Link to="/contact-us" className="btn btn-secondary">CONTACT US</Link>
                    </p>
                 </div>
					{/* <!-- End Column 1 --> */}
                </div>
            </div>
        </div>
    );
}

export default AboutUsBar;