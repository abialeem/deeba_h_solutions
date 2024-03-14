import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* Start Hero Section */}
			<div  className="hero">
				<div  className="container">
					<div  className="row justify-content-between">
						<div  className="col-lg-6">
							<div  className="intro-excerpt">
								<h1>Industry Leading Language Services<span clsas="d-block"> In 100+ Languages</span></h1>
								<p  className="mb-4">Unlock global opportunities with our reliable and professional language services for seamless cross-cultural communication.</p>
								<p><a href="contact.html"  className="btn btn-secondary me-2">CONTACT US</a>
									<a href="quote.html"  className="btn btn-white-outline">GET A FREE QUOTE</a></p>
							</div>
						</div>
						<div  className="col-lg-6">
							<div  className="hero-img-wrap">
								<img src="./images/ZEBA_FEAUTE_IMAGE.png"  className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		{/*End Hero Section*/} 

   

    </div>
  );
}

export default App;