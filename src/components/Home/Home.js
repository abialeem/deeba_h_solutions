import Hero from '../Hero';
import AboutUsBar from '../AboutUsBar';
import WhyChooseUs from '../WhyChooseUs';
import Welcome from '../Welcome';
import IndustriesFeatured from '../IndustriesFeatured';
import FieldsFeatured from '../FieldsFeatured';

export default function Home() {
  return (
    <>
     <Hero
      heading='Industry Leading Language Services In 100+ Languages'
      description='Unlock global opportunities with our reliable and professional language services for seamless cross-cultural communication.'
      imgSrc='/images/ZEBA_FEAUTE_IMAGE.png'
      rotate='true'
      btnShow='true'
      />
     <Welcome/>
     <AboutUsBar/>
     <WhyChooseUs/>
     <IndustriesFeatured/>
     <FieldsFeatured/>
     </>
  )
}