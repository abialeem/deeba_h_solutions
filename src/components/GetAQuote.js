import ContactUsIndustriesForm from "./Forms/ContactUsIndustriesForm"
import { Link } from "react-router-dom";
import Hero from "./Hero";

export default function GetAQuote() {
  const contactNumber = '+44 7448 552945';
  return (
    <>
    <Hero 
    heading='GET A FREE QUOTE NOW'
    description="Fill out our form for a fast and free project estimate today."
    imgSrc='/images/ZEEBA-LOGO.png'
    rotate='true'
    btnShow='true'
    />
    
    <ContactUsIndustriesForm />
    </>
  )
}
