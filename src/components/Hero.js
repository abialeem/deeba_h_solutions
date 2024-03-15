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
                        <p><a href="contact.html"  className="btn btn-secondary me-2 shadow" id="contact-hero-btn">CONTACT US</a>
                            <a href="quote.html"  className="btn btn-white-outline shadow" id="quote-hero-btn">GET A FREE QUOTE</a></p>
                    </div>
                </div>
                <div  className="col-lg-6">
                    <div  className="hero-img-wrap">
                        <img src="./images/ZEBA_FEAUTE_IMAGE.png"  className="img-fluid feature-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Hero;