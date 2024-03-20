import Hero from '../Hero';
import AboutUsBar from '../AboutUsBar';
import WhyChooseUs from '../WhyChooseUs';
import Welcome from '../Welcome';
import IndustriesFeatured from '../IndustriesFeatured';
import FieldsFeatured from '../FieldsFeatured';

export default function Home() {
  return (
    <>
     <Hero/>
     <Welcome/>
     <AboutUsBar/>
     <WhyChooseUs/>
     <IndustriesFeatured/>
     <FieldsFeatured/>
     </>
  )
}