import './ContactUsForm.css';

export default function ContactUsTranslationForm() {
  const contactNumber = '+44 7448 552945';
    return (
      <>
        <div className="we-help-section" style={{marginTop:'50px',marginBottom:'-100px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-5" >
            <span>CONTACT US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'30px',marginTop:'20px'}}>Get a Free Estimate!</h2>
           
            <p class="has-xl-font-size" style={{
              fontSize:'15px',
              lineHeight:'30px',
              fontWeight:'500'
            }}>

Interested in our translation services? Complete the form to receive a free quote or <b>call us at {contactNumber}</b>.

            </p>
            <ul className="list-unstyled pl-md-5 mb-5">
<li className="d-flex text-black mb-2">
<span className="mr-3">
  <span className="icon-map" style={{marginRight:'10px'}}>
  <i class="fa fa-map" aria-hidden="true"></i>
  </span>
</span> SPC FREE ZONE  <br/> E311, Sheikh Mohammad Bin Zayed Rd, <br/>Sharjah, U.A.E
</li>
<li className="d-flex text-black mb-2">
  <span className="mr-3">
    <span className="icon-phone" style={{marginRight:'10px'}}>
    <i class="fa fa-phone" aria-hidden="true"></i>
    </span>
    </span> {contactNumber}
    </li>
<li className="d-flex text-black">
  <span className="mr-3">
    <span className="icon-envelope-o" style={{marginRight:'10px'}}>
    <i class="fa fa-envelope" aria-hidden="true"></i>
    </span>
    </span> info@zeebahsolutions.com 
    </li>
</ul>            
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-7 ">
          <form
  method="post"
  encType="multipart/form-data"
  id="gform_28"
  action="/translationcontactusform"
  data-formid={28}
  noValidate=""
>
  <div className="gform-body gform_body" style={{padding:'30px'}}>
    <div
      id="gform_fields_28"
      className="gform_fields top_label form_sublabel_below description_below"
    >
      <div
        id="field_28_3"
        className="gfield gfield--type-text gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_3"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_3">
          First Name
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_text input-group">
          <input
            name="input_3"
            id="input_28_3"
            type="text"
            defaultValue=""
            className="form-control"
            placeholder="First Name"
            aria-required="true"
            aria-invalid="false"
          />{" "}
        </div>
      </div>
      <div
        id="field_28_31"
        className="gfield gfield--type-text gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_31"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_31">
          Last Name
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_text">
          <input
            name="input_31"
            id="input_28_31"
            type="text"
            defaultValue=""
            className="form-control"
            placeholder="Last Name"
            aria-required="true"
            aria-invalid="false"
          />{" "}
        </div>
      </div>
      <div
        id="field_28_4"
        className="gfield gfield--type-text gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_4"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_4">
          Company
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_text">
          <input
            name="input_4"
            id="input_28_4"
            type="text"
            defaultValue=""
            className="form-control"
            placeholder="Company"
            aria-required="true"
            aria-invalid="false"
          />{" "}
        </div>
      </div>
      <div
        id="field_28_5"
        className="gfield gfield--type-email gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_5"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_5">
          Email
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_email">
          <input
            name="input_5"
            id="input_28_5"
            type="email"
            defaultValue=""
            className="form-control"
            placeholder="Email"
            aria-required="true"
            aria-invalid="false"
          />
        </div>
      </div>
      <div
        id="field_28_6"
        className="gfield gfield--type-phone gfield--width-half field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_6"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_6">
          Phone
        </label>
        <div className="ginput_container ginput_container_phone">
          <input
            name="input_6"
            id="input_28_6"
            type="tel"
            defaultValue=""
            className="form-control"
            placeholder="Phone"
            aria-invalid="false"
          />
        </div>
      </div>
      <div
        id="field_28_29"
        className="gfield gfield--type-select gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_29"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_29">
          Language of Interest
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_select">
          <select
            name="input_29"
            id="input_28_29"
            className="form-control gfield_select"
            aria-required="true"
            aria-invalid="false"
          >
            <option value="" selected="selected" className="gf_placeholder">
              Select a Language...
            </option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese (Traditional)">Chinese (Traditional)</option>
            <option value="Chinese (Simplified)">Chinese (Simplified)</option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="French (Canada)">French (Canada)</option>
            <option value="French (France)">French (France)</option>
            <option value="German">German</option>
            <option value="Hindi">Hindi</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese (Brazilian)">
              Portuguese (Brazilian)
            </option>
            <option value="Portuguese (Continental)">
              Portuguese (Continental)
            </option>
            <option value="Russian">Russian</option>
            <option value="Spanish (Spain)">Spanish (Spain)</option>
            <option value="Spanish (Latin America)">
              Spanish (Latin America)
            </option>
            <option value="- Multiple Languages:">- Multiple Languages:</option>
            <option value="- Other Language(s):">- Other Language(s):</option>
          </select>
        </div>
      </div>
      <div
        id="field_28_8"
        className="gfield gfield--type-text gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_8"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_8">
          Location
        </label>
        <div className="ginput_container ginput_container_text">
          <input
            name="input_8"
            id="input_28_8"
            type="text"
            defaultValue=""
            className="form-control"
            placeholder="Location"
            aria-invalid="false"
          />{" "}
        </div>
      </div>
      <div
        id="field_28_9"
        className="gfield gfield--type-textarea gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_9"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_9">
          Notes
        </label>
        <div className="ginput_container ginput_container_textarea">
          <textarea
            name="input_9"
            id="input_28_9"
            className="form-control small"
            placeholder="Notes"
            aria-invalid="false"
            rows={10}
            cols={50}
            defaultValue={""}
          />
        </div>
      </div>
      <div
  id="field_3_29"
  className="gfield gfield--type-fileupload gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
  data-js-reload="field_3_29"
>
  <label
    className="gfield_label gform-field-label"
    htmlFor="html5_1hpscj05kd8g14leui118oa1mpk3"
  >
    Attachments
  </label>
  <div className="ginput_container ginput_container_fileupload">
    <div
      id="gform_multifile_upload_3_29"
      data-settings='{"runtimes":"html5,flash,html4","browse_button":"gform_browse_button_3_29","container":"gform_multifile_upload_3_29","drop_element":"gform_drag_drop_area_3_29","filelist":"gform_preview_3_29","unique_names":true,"file_data_name":"file","url":"https:\/\/altalang.com\/?gf_page=aa49fc680dd6757","flash_swf_url":"https:\/\/altalang.com\/wp-includes\/js\/plupload\/plupload.flash.swf","silverlight_xap_url":"https:\/\/altalang.com\/wp-includes\/js\/plupload\/plupload.silverlight.xap","filters":{"mime_types":[{"title":"Allowed Files","extensions":"doc,docx,xls,xlsx,pdf,ppt,pptx,jpg,html,idml,indd,xml,zip,pub,json,po,rtf,srt,vtt,mp3"}],"max_file_size":"52428800b"},"multipart":true,"urlstream_upload":false,"multipart_params":{"form_id":3,"field_id":29},"gf_vars":{"max_files":0,"message_id":"gform_multifile_messages_3_29","disallowed_extensions":["php","asp","aspx","cmd","csh","bat","html","htm","hta","jar","exe","com","js","lnk","htaccess","phtml","ps1","ps2","php3","php4","php5","php6","py","rb","tmp"]}}'
      className="gform_fileupload_multifile"
      style={{ position: "relative" }}
    >
      <div
        id="gform_drag_drop_area_3_29"
        className="gform_drop_area gform-theme-field-control"
        style={{ position: "relative" }}
      >
        <span className="gform_drop_instructions">Drop files here or </span>
        <button
          type="button"
          id="gform_browse_button_3_29"
          className="button form-control gform_button_select_files gform-theme-button gform-theme-button--control"
          aria-describedby="gfield_upload_rules_3_29"
          aria-label=", "
          style={{ zIndex: 1 }}
        >
          Select files
        </button>
      </div>
      <div
        id="html5_1hpscj05kd8g14leui118oa1mpk3_container"
        className="moxie-shim moxie-shim-html5"
        style={{
          position: "absolute",
          top: 72,
          left: 197,
          width: 126,
          height: 32,
          overflow: "hidden",
          zIndex: 0
        }}
      >
        <input
          id="html5_1hpscj05kd8g14leui118oa1mpk3"
          type="file"
          style={{
            fontSize: 999,
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          className='form-control'
          multiple=""
          accept="application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/vnd.ms-excel,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,application/pdf,.pdf,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,image/jpeg,.jpg,text/html,.html,.idml,.indd,.xml,application/zip,.zip,.pub,application/json,.json,.po,text/rtf,.rtf,.srt,.vtt,audio/mpeg,.mp3"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </div>
    <span
      className="gfield_description gform_fileupload_rules"
      id="gfield_upload_rules_3_29"
    >
      Accepted file types: doc, docx, xls, xlsx, pdf, ppt, pptx, jpg, html,
      idml, indd, xml, zip, pub, json, po, rtf, srt, vtt, mp3, Max. file size:
      50 MB.
    </span>
    <ul
      className="validation_message--hidden-on-empty gform-ul-reset"
      id="gform_multifile_messages_3_29"
    />{" "}
  </div>
  <div id="gform_preview_3_29" className="ginput_preview_list" />
</div>

     
    </div>
  </div>
  <div className="gform_footer top_label" style={{padding:'30px'}}>
    {" "}
    <input
      type="submit"
      id="gform_submit_button_28"
      className="btn btn-success btn-lg my-3"
      defaultValue="Get Started!"
      onclick=''
      onkeypress=''
    />
   
  </div>
  
</form>

          </div>
        </div>
      </div>
    </div>
      </>
    )
  }
  