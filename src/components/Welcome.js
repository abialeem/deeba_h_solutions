import { Link } from "react-router-dom";

function Welcome(){
        return(
<div className="we-help-section" style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1"><img src="https://th.bing.com/th/id/R.09e988c00097116f9f2bcf472bd118b5?rik=f4EXF80JOPhadQ&riu=http%3a%2f%2fclevertopics.com%2fwp-content%2fuploads%2f2018%2f04%2ftranlate-tool-768x514.jpg&ehk=QBCEVGYmXPQW0gArwRdTfaZFXhvhYhsWxuBZRYSrdlY%3d&risl=&pid=ImgRaw&r=0" alt="Untree.co" /></div>
              <div className="grid grid-2"><img src="https://th.bing.com/th/id/OIP.NnAcO1u4a7fRkZxOKDeFrQAAAA?rs=1&pid=ImgDetMain" alt="Untree.co" /></div>
              <div className="grid grid-3"><img src="https://th.bing.com/th/id/OIP.NNEpR00yrEkr6Naj_FHSHgHaE8?rs=1&pid=ImgDetMain" alt="Untree.co" /></div>
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