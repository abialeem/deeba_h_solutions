import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Interpreting from './components/Services/Interpreting/Interpreting';
import OnSiteInterpretation from './components/Services/Interpreting/OnSiteInterpretation';
import OverPhoneInterpreting from './components/Services/Interpreting/OverPhoneInterpreting';
import VideoRemoteInterpreting from './components/Services/Interpreting/VideoRemoteInterpreting';
import ConferenceInterpreting from './components/Services/Interpreting/ConferenceInterpreting';
import RemoteSimultaneousInterpreting from './components/Services/Interpreting/RemoteSimultaneousInterpreting';
import Testing from './components/Services/Testing/Testing';
import SpeakingListeningAssessment from './components/Services/Testing/SpeakingListeningAssessment';
import ReadingAssessment from './components/Services/Testing/ReadingAssessment';
import WritingAssessment from './components/Services/Testing/WritingAssessment';
import InterpretationAssessment from './components/Services/Testing/InterpretationAssessment';
import TranslationAssessment from './components/Services/Testing/TranslationAssessment';
import PreparingForYourTest from './components/Services/Testing/PreparingForYourTest';
import Training from './components/Services/Training/Training';
import Translation from './components/Services/Translation/Translation';
import Document from './components/Services/Translation/Document';
import Desktop from './components/Services/Translation/Desktop';
import Software from './components/Services/Translation/Software';
import VoiceOverDubbing from './components/Services/Translation/VoiceOverDubbing';
import Website from './components/Services/Translation/Website';
import Industries from './components/Industries/Industries';
import Education from './components/Industries/Education';
import Finance from './components/Industries/Finance';
import Government from './components/Industries/Government';
import Healthcare from './components/Industries/Healthcare';
import HumanResources from './components/Industries/HumanResources';
import Legal from './components/Industries/Legal';
import Languages  from './components/Languages/Languages';
import TranslationLanguages  from './components/Languages/TranslationLanguage';
import InterpretationLanguages  from './components/Languages/InterpretationLanguage';
import TestingLanguages from './components/Languages/Testing';
import About from './components/About/About';
import Esop from './components/About/Esop';
import IsoCertification from './components/About/IsoCertification';
import ContactUs from './components/ContactUs';
import GetAQuote from './components/GetAQuote';
import ViewTestPrep from './components/About/ViewTestPrep';
import Faqs from './components/About/Faqs';
import AccentReductionTest from './components/Services/Training/AccentReductionTest';
import NationalOralExamTestPrep from './components/Services/Training/NationalOralExamTestPrep';
import ContinueEducationForMedicalInterpreters from './components/Services/Training/ContinueEducationForMedicalInterpreters';
import FortyHourCourse from './components/Services/Training/FortyHourCourse';
import EightyHourCourse from './components/Services/Training/EightyHourCourse';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/services' element={<Services />} />
        <Route path='/services/interpreting' element={<Interpreting />} />
        <Route path='/services/interpreting/on-site-interpreting' element={<OnSiteInterpretation />} />
        <Route path='/services/interpreting/over-phone-interpreting' element={<OverPhoneInterpreting />} />
        <Route path='/services/interpreting/video-remote-interpreting' element={<VideoRemoteInterpreting />} />
        <Route path='/services/interpreting/remote-simultaneous-interpreting' element={<RemoteSimultaneousInterpreting />} />
        <Route path='/services/interpreting/conference-interpreting' element={<ConferenceInterpreting />} />
      <Route path='/services/testing' element={<Testing />} />   
        <Route path='/services/testing/speaking-listening-assessment' element={<SpeakingListeningAssessment />} />    
        <Route path='/services/testing/reading-assessment' element={<ReadingAssessment/>} />  
        <Route path='/services/testing/writing-assessment' element={<WritingAssessment />} />  
        <Route path='/services/testing/interpretation-assessment' element={<InterpretationAssessment />} />  
        <Route path='/services/testing/translation-assessment' element={<TranslationAssessment />} />  
        <Route path='/services/testing/preparing-for-your-test' element={<PreparingForYourTest />} />  
       <Route path='/services/training' element={<Training />} /> 
       <Route path='/services/translation' element={<Translation/>} />
        <Route path='/services/translation/document' element={<Document/>} />  
        <Route path='/services/translation/website' element={<Website/>} />
        <Route path='/services/translation/software' element={<Software/>} />
        <Route path='/services/translation/voiceover-dubbing' element={<VoiceOverDubbing/>} />
        <Route path='/services/translation/desktop' element={<Desktop/>} />
      <Route path='/industries' element={<Industries />} />
        <Route path='/industries/education' element={<Education />} />
        <Route path='/industries/finance' element={<Finance />} />
        <Route path='/industries/government' element={<Government />} />
        <Route path='/industries/healthcare' element={<Healthcare />} />
        <Route path='/industries/hr' element={<HumanResources />} />
        <Route path='/industries/legal' element={<Legal />} />
      <Route path='/languages' element={<Languages />} />
      <Route path='/languages/interpretation' element={<InterpretationLanguages />} />
      <Route path='/languages/testing' element={<TestingLanguages />} />
      <Route path='/languages/translation' element={<TranslationLanguages />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/esop' element={<Esop />} />
      <Route path='/about/iso-certification' element={<IsoCertification />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/get-a-quote' element={<GetAQuote />} />
      <Route path='/view-test-prep' element={<ViewTestPrep/>} />
      <Route path='/about/faqs' element={<Faqs />} />
      {/** training routes */}
      <Route path='/services/training/accent-reduction-test' element={<AccentReductionTest />} />
      <Route path='/services/training/national-oral-exam-test-prep' element={<NationalOralExamTestPrep />} />
      <Route path='/services/training/continue-education-for-medical-interpreters' element={<ContinueEducationForMedicalInterpreters />} />
      <Route path='/services/training/40-hour-course' element={<FortyHourCourse />} />
      <Route path='/services/training/80-hour-course' element={<EightyHourCourse />} />
      
      
          {/*  Resources routes here  */}
      
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


