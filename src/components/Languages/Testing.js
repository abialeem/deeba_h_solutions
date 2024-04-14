import Hero from '../Hero';
import './Testing.css';

export default function Testing() {
  return (
    <>
    <Hero 
    heading='Testing Languages Offered'
    description=" Zeebah Solutions is an official partner of LanguageBees and using their LABS (LanguageBees Assessment & Benchmarking System) provides worldclass language services."
    imgSrc='/images/financeFeatured.jpeg'
    rotate='false'
    btnShow='false'
    />
<div className="we-help-section" style={{marginTop:'50px',marginBottom:'10px'}}>
      <div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-12" style={{alignContent:'center',textAlign:'center'}} >
            <h1 className="section-title mb-4">Testing Languages Offered By Zeeba H Solutions</h1>
            {/* <h4  style={{fontWeight:'600',fontSize:'18px',lineHeight:'30px'}}>
              
            </h4> */}
          
            <div className="mt-5">
  <ul className="nav nav-pills" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active tab-active"
        id="tab1-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab1"
        type="button"
        role="tab"
        style={{margin:'10px'}}
        aria-controls="tab1"
        aria-selected="true"
      >
        GENERAL PROFICIENCY
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab2-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab2"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab2"
        aria-selected="false"
      >
        MEDICAL
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab3-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab3"
        style={{margin:'10px'}}
        type="button"
        role="tab"
        aria-controls="tab3"
        aria-selected="false"
      >
        FINANCE
      </button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent" style={{background:'transparent'}}>
    <div
      className="tab-pane fade show active"
      id="tab1"
      role="tabpanel"
      aria-labelledby="tab1-tab"
    >
      {/* <h3>Tab 1 Content</h3> */}
     <div className='row'>
      {/* <!-- Sidebar --> */}
  <div className="sidebar col-lg-4 col-md-6 col-sm-12" style={{padding:'10px'}}>
    <h6 style={{color:'#3b5d50'}}>GENERAL PROFICIENCY</h6>
    <ul className="nav flex-column">
      <li className="nav-item"><a className="nav-link" href="#section1" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking </a></li>
      <li className="nav-item"><a className="nav-link" href="#section2" style={{fontSize:'12px'}}>Listening and Speaking Basics (LABS 1 to LABS 9)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section3" style={{fontSize:'12px',fontWeight:'500'}}>Writing – Online</a></li>
      <li className="nav-item"><a className="nav-link" href="#section4" style={{fontSize:'12px',fontWeight:'500'}}>Reading LABS 8/10 – ILR 2+/3+</a></li>
      <li className="nav-item"><a className="nav-link" href="#section5" style={{fontSize:'12px',fontWeight:'500'}}>Reading LABS 8/9 – ILR 2+/3</a></li>
      <li className="nav-item"><a className="nav-link" href="#section6" style={{fontSize:'12px',fontWeight:'500'}}>Reading LABS 9 - ILR 3</a></li>
      <li className="nav-item"><a className="nav-link" href="#section7" style={{fontSize:'12px',fontWeight:'500'}}>Reading LABS 11 - ILR 4</a></li>
      <li className="nav-item"><a className="nav-link" href="#section8" style={{fontSize:'12px',fontWeight:'500'}}>Listening Comprehension</a></li>
      <li className="nav-item"><a className="nav-link" href="#section9" style={{fontSize:'12px',fontWeight:'500'}}>Placement Tests (For Language Training)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section10" style={{fontSize:'12px',fontWeight:'500'}}>Translation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section11" style={{fontSize:'12px',fontWeight:'500'}}>Audio-Translation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section12" style={{fontSize:'12px',fontWeight:'500'}}>Social Media (Reading and Writing)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section13" style={{fontSize:'12px',fontWeight:'500'}}>Interpretation (Customer Services)</a></li>
      {/* <!-- Add more list items for additional sections --> */}
    </ul>
  </div>

  {/* <!-- Page content --> */}
  <div className="container-fluid col-lg-8 col-md-6 col-sm-12"  style={{paddingLeft:'80px'}}>
    <div id="section1" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (General Proficiency)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}>
<li className='col-lg-4 col-md-6 col-sm-12'>Afrikaans</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Albanian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Amharic*</li>
<li className='col-lg-12 col-md-12 col-sm-12'>Arabic (MSA*, Iraqi*, Lebanese, Yemeni*, Moroccan, Egyptian, Saudi Arabian, Jordanian, Sudanese, Syrian)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Arabic Levantine* (IVR only)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Armenian (Eastern)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Azerbaijani</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Baluchi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bangla (Bangla)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bulgarian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Burmese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cambodian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cape Verdean (Balavento)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cape Verdean (Sotavento)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chinese Mandarin*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chinese Cantonese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chuukese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Croatian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Czech*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Danish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Dari*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Dutch*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>English*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Fante (Akan)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Farsi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Finnish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>French*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>French Canadian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Fulani* (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Georgian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>German*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Greek*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Gujarati*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Haitian Creole*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hausa*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hebrew*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hindi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hmong*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hungarian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Igbo</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ilocano</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Indonesian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Italian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Jamaican creole English (Patois)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Japanese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kannada</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Karenni</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kazakh</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kinyarwanda</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Korean*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kurmanji*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Lao</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Latvian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Lithuanian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Macedonian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Malay*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Malayalam*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Marathi</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Mongolian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Navajo</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Nepali*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Norwegian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Oromo*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Pashto*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Pashto (Pakistan)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Polish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Portuguese (Brazil)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Portuguese (Portugal)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Punjabi (Eastern)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Punjabi (Western)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Romanian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Russian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Samoan*(IVR only)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Serbian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Serbo-Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Sinhala*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Slovak*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Slovenian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Somali*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Sorani*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Latin America*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Puerto Rico</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Spain</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Swahili</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Swedish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tagalog*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Taiwanese</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tajik</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tamil (India)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Telugu*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Thai*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tibetan</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tigrinya*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkmen</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkmen (Iraqi)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Twi</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ukrainian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Urdu*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Uzbek</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Vietnamese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Wolof</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Yoruba*</li>
</ul>
    </div>
    <div id="section2" className="section">
    <h5 style={{marginBottom:'30px'}}>Listening and Speaking Basics (LABS 1 to LABS 9)</h5>
    <ul className='row languages_list' style={{textAlign:'left'}}>
      <li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >English*</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish*</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li></ul>
    </div>
    <div id="section3" className="section">
      <h5 style={{marginBottom:'30px'}}>Writing (General Proficiency)</h5>
     <ul className='row languages_list' style={{textAlign:'left'}}>
    
<li className='col-lg-4 col-md-6 col-sm-12' >Afrikaans</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Greek</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hausa</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hebrew</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hmong</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hungarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Igbo</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Italian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Jamaican Creole English (Patois)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Kazakh</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Kinyarwanda</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Korean</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Lao</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Latvian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Lithuanian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Malay</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Malayalam</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Marathi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Nepali</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Norwegian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Polish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Russian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Serbian (Cyrillic script)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Serbian (Latin Script)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Sinhala</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Slovak</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Slovenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Somali</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Swahili</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Swedish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Tajik</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Tamil</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Telugu</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Thai</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Tigrinya</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Twi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Uzbek</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Wolof</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li>
</ul>
     
    </div>
    <div id="section4" className="section">
      <h5 style={{marginBottom:'30px'}}>Reading LABS 8/10 – ILR 2+/3+</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Afrikaans</li><li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Burmese</li><li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Czech</li><li className='col-lg-4 col-md-6 col-sm-12' >Danish</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Ga</li><li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li><li className='col-lg-4 col-md-6 col-sm-12' >Hausa</li><li className='col-lg-4 col-md-6 col-sm-12' >Hebrew</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Hmong</li><li className='col-lg-4 col-md-6 col-sm-12' >Hungarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Jamaican Creole English (Patois)</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Kazakh</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji</li><li className='col-lg-4 col-md-6 col-sm-12' >Macedonian</li><li className='col-lg-4 col-md-6 col-sm-12' >Malay</li><li className='col-lg-4 col-md-6 col-sm-12' >Malayalam</li><li className='col-lg-4 col-md-6 col-sm-12' >Mongolian</li><li className='col-lg-4 col-md-6 col-sm-12' >Norwegian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbian</li><li className='col-lg-4 col-md-6 col-sm-12' >Sinhala</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovak</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili</li><li className='col-lg-4 col-md-6 col-sm-12' >Swedish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Tajik</li><li className='col-lg-4 col-md-6 col-sm-12' >Tamil</li><li className='col-lg-4 col-md-6 col-sm-12' >Telugu</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Tigrinya</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkmen (Latin)</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li><li className='col-lg-4 col-md-6 col-sm-12' >Wolof</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section5" className="section">
      <h5 style={{marginBottom:'30px'}}>Reading LABS 8/9 – ILR 2+/3</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian Eastern</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Burmese</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li><li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian Creole</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji (Arabic script)</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji (Latin script)</li><li className='col-lg-4 col-md-6 col-sm-12' >Malay</li><li className='col-lg-4 col-md-6 col-sm-12' >Mongolian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Patois Jamaican</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Tigrinya</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section6" className="section">
      <h5 style={{marginBottom:'30px'}}>Reading LABS 9 - ILR 3</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Fanti</li><li className='col-lg-4 col-md-6 col-sm-12' >Igbo</li><li className='col-lg-4 col-md-6 col-sm-12' >Lao</li><li className='col-lg-4 col-md-6 col-sm-12' >Lithuanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Nepali</li><li className='col-lg-4 col-md-6 col-sm-12' >Samoan</li><li className='col-lg-4 col-md-6 col-sm-12' >Tajik (Arabic)</li><li className='col-lg-4 col-md-6 col-sm-12' >Twi</li></ul>
    </div>
    <div id="section7" className="section">
      <h5 style={{marginBottom:'30px'}}>Reading LABS 11 - ILR 4</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Malayalam</li><li className='col-lg-4 col-md-6 col-sm-12' >Nepali</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek (Cyrillic)</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek (Latin)</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section8" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening Comprehension (General Proficiency)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (Gulf Area – Iraq) ILR 2+/3+</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (Gulf Area – Iraq) ILR 4</li><li className='col-lg-4 col-md-6 col-sm-12' >English ILR 2+/3+</li><li className='col-lg-4 col-md-6 col-sm-12' >English ILR 4</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish ILR 2+/3+</li></ul>
    </div>
    <div id="section9" className="section">
      <h5 style={{marginBottom:'30px'}}>Placement Tests (For Language Training)</h5>
      <ul  className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Mandarin</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    <div id="section10" className="section">
      <h5 style={{marginBottom:'30px'}}>Translation</h5>
      <ul  className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Czech</li><li className='col-lg-4 col-md-6 col-sm-12' >Danish</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li><li className='col-lg-4 col-md-6 col-sm-12' >Hebrew</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Hmong</li><li className='col-lg-4 col-md-6 col-sm-12' >Hungarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Kannada (Kannada to English)</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji</li><li className='col-lg-4 col-md-6 col-sm-12' >Latvian (Latvian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Lithuanian (Lithuanian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Macedonian (Macedonian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Norwegian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Polish</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbo-Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovak</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovenian (Slovenian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish (Spain) ENG to SPA Spain only</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili (general only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Swedish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li></ul>
    </div>
    <div id="section11" className="section">
      <h5 style={{marginBottom:'30px'}}>Audio-Translation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic MSA</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic Iraq</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese, Mandarin</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >French (Africa)</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li></ul>
    </div>
    <div id="section12" className="section">
      <h5 style={{marginBottom:'30px'}}>Social Media (Reading and Writing)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    <div id="section13" className="section">
      <h5 style={{marginBottom:'30px'}}>Interpretation (Customer Services)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    {/* <!-- Add more sections as needed --> */}
  </div>

      </div>
            {/* Tab 1 content ends here */}
    </div>
    <div
      className="tab-pane fade"
      id="tab2"
      role="tabpanel"
      aria-labelledby="tab2-tab"
    >
      {/* <h3>Tab 2 Content</h3> */}
      <div className='row'>
      {/* <!-- Sidebar --> */}
  <div className="sidebar col-lg-4 col-md-6 col-sm-12" style={{padding:'10px'}}>
    <h6 style={{color:'#3b5d50'}}>MEDICAL</h6>
    <ul className="nav flex-column">
      <li className="nav-item"><a className="nav-link" href="#section1" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Medical) </a></li>
      <li className="nav-item"><a className="nav-link" href="#section2" style={{fontSize:'12px'}}>Listening and Speaking (Dentists – Dentist Assistant)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section3" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Dental Hygienists)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section4" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Behavioral Health)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section5" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Speech Therapist)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section6" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Occupational Therapist)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section7" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Physical Therapist)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section8" style={{fontSize:'12px',fontWeight:'500'}}>Code of Ethics for Medical Interpreters</a></li>
      <li className="nav-item"><a className="nav-link" href="#section9" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Midwife)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section10" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking (Pharmacy)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section11" style={{fontSize:'12px',fontWeight:'500'}}>Medical Terminology</a></li>
      <li className="nav-item"><a className="nav-link" href="#section12" style={{fontSize:'12px',fontWeight:'500'}}>Health Insurance</a></li>
      <li className="nav-item"><a className="nav-link" href="#section13" style={{fontSize:'12px',fontWeight:'500'}}>Bilingual Medical Test</a></li>
      <li className="nav-item"><a className="nav-link" href="#section14" style={{fontSize:'12px',fontWeight:'500'}}>CCLA - QBS</a></li>
      <li className="nav-item"><a className="nav-link" href="#section15" style={{fontSize:'12px',fontWeight:'500'}}>Medical Translation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section16" style={{fontSize:'12px',fontWeight:'500'}}>Patient Discharge Translation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section17" style={{fontSize:'12px',fontWeight:'500'}}>Patient Discharge Translation (Pediatric)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section18" style={{fontSize:'12px',fontWeight:'500'}}>Rendering (Pharmacy)</a></li>
      <li className="nav-item"><a className="nav-link" href="#section19" style={{fontSize:'12px',fontWeight:'500'}}>Dental Interpretation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section20" style={{fontSize:'12px',fontWeight:'500'}}>Medical Interpretation</a></li>
      <li className="nav-item"><a className="nav-link" href="#section21" style={{fontSize:'12px',fontWeight:'500'}}>Behavioral Health Interpretation</a></li>
     

      {/* <!-- Add more list items for additional sections --> */}
    </ul>
  </div>

  {/* <!-- Page content --> */}
  <div className="container-fluid col-lg-8 col-md-6 col-sm-12"  style={{paddingLeft:'80px'}}>
    <div id="section1" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Medical)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}>
<li className='col-lg-4 col-md-6 col-sm-12'>Afrikaans</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Albanian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Amharic*</li>
<li className='col-lg-12 col-md-12 col-sm-12'>Arabic (MSA*, Iraqi*, Lebanese, Yemeni*, Moroccan, Egyptian, Saudi Arabian, Jordanian, Sudanese, Syrian)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Arabic Levantine* (IVR only)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Armenian (Eastern)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Azerbaijani</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Baluchi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bangla (Bangla)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Bulgarian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Burmese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cambodian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cape Verdean (Balavento)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Cape Verdean (Sotavento)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chinese Mandarin*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chinese Cantonese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Chuukese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Croatian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Czech*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Danish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Dari*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Dutch*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>English*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Fante (Akan)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Farsi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Finnish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>French*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>French Canadian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Fulani* (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Georgian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>German*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Greek*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Gujarati*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Haitian Creole*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hausa*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hebrew*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hindi*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hmong*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Hungarian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Igbo</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ilocano</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Indonesian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Italian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Jamaican creole English (Patois)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Japanese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kannada</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Karenni</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kazakh</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kinyarwanda</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Korean*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Kurmanji*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Lao</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Latvian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Lithuanian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Macedonian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Malay*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Malayalam*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Marathi</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Mongolian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Navajo</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Nepali*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Norwegian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Oromo*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Pashto*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Pashto (Pakistan)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Polish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Portuguese (Brazil)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Portuguese (Portugal)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Punjabi (Eastern)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Punjabi (Western)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Romanian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Russian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Samoan*(IVR only)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Serbian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Serbo-Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Sinhala*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Slovak*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Slovenian</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Somali*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Sorani*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Latin America*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Puerto Rico</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Spanish Spain</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Swahili</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Swedish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tagalog*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Taiwanese</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tajik</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tamil (India)*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Telugu*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Thai*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tibetan</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Tigrinya*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkish*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkmen</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Turkmen (Iraqi)</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Twi</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Ukrainian*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Urdu*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Uzbek</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Vietnamese*</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Wolof</li>
<li className='col-lg-4 col-md-6 col-sm-12'>Yoruba*</li>
</ul>
    </div>
    <div id="section2" className="section">
    <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Dentists – Dentist Assistant)</h5>
    <ul className='row languages_list' style={{textAlign:'left'}}>
      <li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >English*</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >French</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >German</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Greek</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish*</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li></ul>
    </div>
    <div id="section3" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Dental Hygienists)</h5>
     <ul className='row languages_list' style={{textAlign:'left'}}>
<li className='col-lg-4 col-md-6 col-sm-12' >Afrikaans</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Greek</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Hausa</li>


</ul>
     
    </div>
    <div id="section4" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Behavioral Health)+</h5>

      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Afrikaans</li><li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Burmese</li><li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Czech</li><li className='col-lg-4 col-md-6 col-sm-12' >Danish</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Ga</li><li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li><li className='col-lg-4 col-md-6 col-sm-12' >Hausa</li><li className='col-lg-4 col-md-6 col-sm-12' >Hebrew</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Hmong</li><li className='col-lg-4 col-md-6 col-sm-12' >Hungarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Jamaican Creole English (Patois)</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Kazakh</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji</li><li className='col-lg-4 col-md-6 col-sm-12' >Macedonian</li><li className='col-lg-4 col-md-6 col-sm-12' >Malay</li><li className='col-lg-4 col-md-6 col-sm-12' >Malayalam</li><li className='col-lg-4 col-md-6 col-sm-12' >Mongolian</li><li className='col-lg-4 col-md-6 col-sm-12' >Norwegian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbian</li><li className='col-lg-4 col-md-6 col-sm-12' >Sinhala</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovak</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili</li><li className='col-lg-4 col-md-6 col-sm-12' >Swedish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Tajik</li><li className='col-lg-4 col-md-6 col-sm-12' >Tamil</li><li className='col-lg-4 col-md-6 col-sm-12' >Telugu</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Tigrinya</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkmen (Latin)</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li><li className='col-lg-4 col-md-6 col-sm-12' >Wolof</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section5" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Speech Therapist)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian Eastern</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Burmese</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Georgian</li><li className='col-lg-4 col-md-6 col-sm-12' >Gujarati</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian Creole</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji (Arabic script)</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji (Latin script)</li><li className='col-lg-4 col-md-6 col-sm-12' >Malay</li><li className='col-lg-4 col-md-6 col-sm-12' >Mongolian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Patois Jamaican</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Tigrinya</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section6" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Occupational Therapist)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Fanti</li><li className='col-lg-4 col-md-6 col-sm-12' >Igbo</li><li className='col-lg-4 col-md-6 col-sm-12' >Lao</li><li className='col-lg-4 col-md-6 col-sm-12' >Lithuanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Nepali</li><li className='col-lg-4 col-md-6 col-sm-12' >Samoan</li><li className='col-lg-4 col-md-6 col-sm-12' >Tajik (Arabic)</li><li className='col-lg-4 col-md-6 col-sm-12' >Twi</li></ul>
    </div>
    <div id="section7" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Physical Therapist)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Malayalam</li><li className='col-lg-4 col-md-6 col-sm-12' >Nepali</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek (Cyrillic)</li><li className='col-lg-4 col-md-6 col-sm-12' >Uzbek (Latin)</li><li className='col-lg-4 col-md-6 col-sm-12' >Yoruba</li></ul>
    </div>
    <div id="section8" className="section">
      <h5 style={{marginBottom:'30px'}}>Code Of Ethics For Medical Interpreters</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}>
        <li className='col-lg-4 col-md-6 col-sm-12' >English</li>
      </ul>
    </div>
    <div id="section9" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Midwife)</h5>
      <ul  className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Mandarin</li><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    <div id="section10" className="section">
      <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Pharmacy)</h5>
      <ul  className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Albanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Amharic</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic</li><li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li><li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li><li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li><li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional</li><li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Czech</li><li className='col-lg-4 col-md-6 col-sm-12' >Danish</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Haitian</li><li className='col-lg-4 col-md-6 col-sm-12' >Hebrew</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Hmong</li><li className='col-lg-4 col-md-6 col-sm-12' >Hungarian</li><li className='col-lg-4 col-md-6 col-sm-12' >Indonesian</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Japanese</li><li className='col-lg-4 col-md-6 col-sm-12' >Kannada (Kannada to English)</li><li className='col-lg-4 col-md-6 col-sm-12' >Korean</li><li className='col-lg-4 col-md-6 col-sm-12' >Kurmanji</li><li className='col-lg-4 col-md-6 col-sm-12' >Latvian (Latvian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Lithuanian (Lithuanian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Macedonian (Macedonian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Norwegian</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Polish</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Portugal)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Eastern)</li><li className='col-lg-4 col-md-6 col-sm-12' >Punjabi (Western)</li><li className='col-lg-4 col-md-6 col-sm-12' >Romanian</li><li className='col-lg-4 col-md-6 col-sm-12' >Russian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbian</li><li className='col-lg-4 col-md-6 col-sm-12' >Serbo-Croatian</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovak</li><li className='col-lg-4 col-md-6 col-sm-12' >Slovenian (Slovenian to English only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Somali</li><li className='col-lg-4 col-md-6 col-sm-12' >Sorani</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish (Spain) ENG to SPA Spain only</li><li className='col-lg-4 col-md-6 col-sm-12' >Swahili (general only)</li><li className='col-lg-4 col-md-6 col-sm-12' >Swedish</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li><li className='col-lg-4 col-md-6 col-sm-12' >Thai</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Ukrainian</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li><li className='col-lg-4 col-md-6 col-sm-12' >Vietnamese</li></ul>
    </div>
    <div id="section11" className="section">
      <h5 style={{marginBottom:'30px'}}>Medical Terminology</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >Arabic MSA</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic Iraq</li><li className='col-lg-4 col-md-6 col-sm-12' >Chinese, Mandarin</li><li className='col-lg-4 col-md-6 col-sm-12' >Dari</li><li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >French (Africa)</li><li className='col-lg-4 col-md-6 col-sm-12' >Pashto</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Turkish</li><li className='col-lg-4 col-md-6 col-sm-12' >Urdu</li></ul>
    </div>
    <div id="section12" className="section">
      <h5 style={{marginBottom:'30px'}}>Health Insurance</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li></ul>
    </div>
    <div id="section13" className="section">
      <h5 style={{marginBottom:'30px'}}>Bilingual Medical Test</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li></ul>
    </div>
    <div id="section14" className="section">
      <h5 style={{marginBottom:'30px'}}>CCLA - QBS</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li></ul>
    </div>
    <div id="section15" className="section">
      <h5 style={{marginBottom:'30px'}}>Medical Translation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Arabic (MSA)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Armenian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Azerbaijani</li><li className='col-lg-4 col-md-6 col-sm-12' >Bambara</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dari</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Dutch</li>
<li className='col-lg-4 col-md-6 col-sm-12' >English</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fante</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Farsi</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Finnish</li>
<li className='col-lg-4 col-md-6 col-sm-12' >French</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Fulani (Puula language from Senegal)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Ga</li>
<li className='col-lg-4 col-md-6 col-sm-12' >German</li></ul>
    </div>
    <div id="section16" className="section">
      <h5 style={{marginBottom:'30px'}}>Patient Discharge Translation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li></ul>
    </div>
    <div id="section17" className="section">
      <h5 style={{marginBottom:'30px'}}>Patient Discharge Translation (Pediatric)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li></ul>
    </div>
    <div id="section18" className="section">
      <h5 style={{marginBottom:'30px'}}>Rendering (Pharmacy)</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li></ul>
    </div>
    <div id="section19" className="section">
      <h5 style={{marginBottom:'30px'}}>Dental Interpretation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    <div id="section20" className="section">
      <h5 style={{marginBottom:'30px'}}>Medical Interpretation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li><li className='col-lg-4 col-md-6 col-sm-12' >Bangla (Bangla)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bosnian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Bulgarian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Burmes</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Cambodian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Simplified (Mandarin)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Chinese Traditional (Cantonese)</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Croatian</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Czech</li>
<li className='col-lg-4 col-md-6 col-sm-12' >Danish</li></ul>
    </div>
    <div id="section21" className="section">
      <h5 style={{marginBottom:'30px'}}>Behavioral Health Interpretation</h5>
      <ul className='row languages_list' style={{textAlign:'left'}}><li className='col-lg-4 col-md-6 col-sm-12' >English</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish</li></ul>
    </div>
    {/* <!-- Add more sections as needed --> */}
  </div>

      </div>
      </div>
    <div
      className="tab-pane fade"
      id="tab3"
      role="tabpanel"
      aria-labelledby="tab3-tab"
    >
      {/* <h3>Tab 3 Content</h3> */}

      <div className='row'>
      {/* <!-- Sidebar --> */}
  <div className="sidebar col-lg-4 col-md-6 col-sm-12" style={{padding:'10px'}}>
    <h6 style={{color:'#3b5d50'}}>FINANCE - BANKING </h6>
    <ul className="nav flex-column">
      <li className="nav-item"><a className="nav-link" href="#section1" style={{fontSize:'12px',fontWeight:'500'}}>Listening and Speaking </a></li>
     {/* <!-- Add more list items for additional sections --> */}
    </ul>
  </div>

  {/* <!-- Page content --> */}
  <div className="container-fluid col-lg-8 col-md-6 col-sm-12" >

    <div id="section1" className="section" style={{paddingLeft:'40px'}}>
    <h5 style={{marginBottom:'30px'}}>Listening and Speaking (Finance – Banking)</h5>
    <ul className='row languages_list' style={{textAlign:'left'}}>
      <li className='col-lg-4 col-md-6 col-sm-12' >Korean (MSA)</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Russian</li>
      <li className='col-lg-4 col-md-6 col-sm-12' >Spanish </li>
      <li className='col-lg-4 col-md-6 col-sm-12' >English*</li><li className='col-lg-4 col-md-6 col-sm-12' >French</li><li className='col-lg-4 col-md-6 col-sm-12' >German</li><li className='col-lg-4 col-md-6 col-sm-12' >Greek</li><li className='col-lg-4 col-md-6 col-sm-12' >Hindi</li><li className='col-lg-4 col-md-6 col-sm-12' >Italian</li><li className='col-lg-4 col-md-6 col-sm-12' >Portuguese (Brazil)</li><li className='col-lg-4 col-md-6 col-sm-12' >Spanish*</li><li className='col-lg-4 col-md-6 col-sm-12' >Tagalog</li></ul>
    </div>
   
 
    {/* <!-- Add more sections as needed --> */}
  </div>

      </div>

    </div>
    
   
  </div>
</div>
          </div>
        </div>
      </div>
        </div>

    </>

  )
}
