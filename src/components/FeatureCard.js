import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ imgSrc, title, description, linkURL }) => {
    return (
      <div className="col-8 col-md-4">
        <div className="feature card card-success shadow" style={{ height: '520px' }}>
          <div className="icon">
            <img src={imgSrc} alt={title}  className="img-fluid card-img-top" />
          </div>
          <div className="card-body" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '0px' }}>
            <h3 className="card-title" style={{ fontWeight: 'bold', fontSize: '20px',minHeight:'50px',textTransform: 'uppercase' }}>{title}</h3>
            <p className="card-text" style={{ fontSize: '15px',marginTop: '10px' }}>{description}</p>
            <Link to={linkURL} style={{ position:'absolute',bottom: '20px', left : 'center' }} className="btn btn-primary card-link learn-more-btn">LEARN MORE</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;