import { Link } from 'react-router-dom';
import './Hero.css'

function Hero(){
    return (
        <div  className="hero">
        <div  className="container">
            <div  className="row justify-content-between">
                <div  className="col-lg-6">
                    <div  className="intro-excerpt">
                        <h1>Industry Leading Language Services<span clsas="d-block"> In 100+ Languages</span></h1>
                        <p  className="mb-4">Unlock global opportunities with our reliable and professional language services for seamless cross-cultural communication.</p>
                        <p><Link to="/contact-us"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</Link>
                            <Link to="/get-a-quote"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</Link></p>
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="./images/ZEBA_FEAUTE_IMAGE.png" alt="feautred_images_front"  className="img-fluid feature-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Hero;