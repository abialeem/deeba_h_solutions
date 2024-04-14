import { Link } from 'react-router-dom';
import './Hero.css'

function Hero({heading,description,imgSrc,rotate,btnShow}){
    return (
        <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1>{heading}</h1>
                        <p  className="mb-4">{description}</p>
                        {
                            btnShow==='true'
                            ?
                             <p>
                            <Link to="/contact-us"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</Link>
                            <Link to="/get-a-quote"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</Link>
                             </p>
                             :
                             <p>
                             <Link to="/get-a-quote"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</Link>
                              </p>
                        }
                       
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img
                         src={process.env.PUBLIC_URL + imgSrc} 
                         alt="feautred_images_front"  
                         className={rotate==='true'?'img-fluid feature-image':'img-fluid'}
                         style={{borderRadius:'30px'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Hero;