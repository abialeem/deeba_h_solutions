import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import AboutUsBar from './components/AboutUsBar';
import WhyChooseUs from './components/WhyChooseUs';
import Welcome from './components/Welcome';
import IndustriesFeatured from './components/IndustriesFeatured';
import FieldsFeatured from './components/FieldsFeatured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Welcome/>
     <AboutUsBar/>
     <WhyChooseUs/>
     <IndustriesFeatured/>
     <FieldsFeatured/>
     <Footer/>
    </div>
  );
}

export default App;