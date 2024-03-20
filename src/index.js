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
import EquipmentRentalsInterpreting from './components/Services/Interpreting/EquipmentRentalsInterpreting';
import RemoteSimultaneousInterpreting from './components/Services/Interpreting/RemoteSimultaneousInterpreting';
import Testing from './components/Services/Testing/Testing';
import SpeakingListeningAssessment from './components/Services/Testing/SpeakingListeningAssessment';
import ReadingAssessment from './components/Services/Testing/ReadingAssessment';
import WritingAssessment from './components/Services/Testing/WritingAssessment';
import InterpretationAssessment from './components/Services/Testing/InterpretationAssessment';
import TranslationAssessment from './components/Services/Testing/TranslationAssessment';
import PreparingForYourTest from './components/Services/Testing/PreparingForYourTest';
import Training from './components/Services/Training/Training';

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
        <Route path='/services/interpreting/equipment-rentals-interpreting' element={<EquipmentRentalsInterpreting />} />
      <Route path='/services/testing' element={<Testing />} />   
        <Route path='/services/testing/speaking-listening-assessment' element={<SpeakingListeningAssessment />} />    
        <Route path='/services/testing/reading-assessment' element={<ReadingAssessment/>} />  
        <Route path='/services/testing/writing-assessment' element={<WritingAssessment />} />  
        <Route path='/services/testing/interpretation-assessment' element={<InterpretationAssessment />} />  
        <Route path='/services/testing/translation-assessment' element={<TranslationAssessment />} />  
        <Route path='/services/testing/preparing-for-your-test' element={<PreparingForYourTest />} />  
      <Route path='/services/training' element={<Training />} />   
       
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


