import ContactUsTrainingForm from "./Forms/ContactUsTrainingForm";
import Hero from "./Hero";


export default function ContactUs() {
  return (
    <>
    <Hero 
     heading='CONTACT US'
     description="Just send us a message and tell us how we can help!"
     imgSrc='/images/ZEEBA-LOGO.png'
     rotate='true'
     btnShow='false'
    />

    <ContactUsTrainingForm />

                        
    </>
  )
}
