import { Link } from "react-router-dom";

function Welcome(){
        return(
<div className="we-help-section" style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1"><img src="./images/home_grid_1.jpeg" alt="Untree.co" /></div>
              <div className="grid grid-2"><img src="./images/home_grid_2.jpeg" alt="Untree.co" /></div>
              <div className="grid grid-3"><img src="./images/home_grid_3.jpeg" alt="Untree.co" /></div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5" style={{ paddingTop: '50px' }}>
            <span>WELCOME TO ZEEBA H SOLUTIONS</span>
            <h2 className="section-title mb-4">Professional interpretation, translation, language training & testing since democratized.</h2>
            
            <p><Link to="./services" className="btn">Explore Our Services</Link></p>
          </div>
        </div>
      </div>
    </div>
        );
}

export default Welcome;