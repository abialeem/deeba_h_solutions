import './ContactUsForm.css';

export default function ContactUsForm() {
    const contactNumber = '111-111-111';
    return (
      <>
        <div className="we-help-section" style={{marginTop:'50px',marginBottom:'-100px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-5" >
            <span>CONTACT US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'30px',marginTop:'20px'}}>Get Started with Zeeba H Solutions Today!</h2>
            <p class="has-xl-font-size" style={{
              fontSize:'15px',
              lineHeight:'30px',
              fontWeight:'500'
            }}>
                Our goal is to facilitate communication with excellence and professionalism, while taking every practical step to protect the privacy of all involved. With more than 30 years of experience in providing language services, we know that your business comes with its own special set of linguistic needs, and we’re prepared to meet those needs immediately.
            </p>
            <p class="has-xl-font-size" style={{
              fontSize:'15px',
              lineHeight:'30px',
              fontWeight:'500'
            }}>

            To learn how we can help you with our telephone, conference, or face-to-face interpreting services, <b>please fill out our contact form above</b>, or <b>call us at {contactNumber}</b>.
            </p>
            
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-7 ">
          <form
  method="post"
  encType="multipart/form-data"
  id="gform_28"
  action="/contactusform"
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
        id="field_28_30"
        className="gfield gfield--type-select gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
        data-js-reload="field_28_30"
      >
        <label className="gfield_label gform-field-label" htmlFor="input_28_30">
          How often are services needed?
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </label>
        <div className="ginput_container ginput_container_select">
          <select
            name="input_30"
            id="input_28_30"
            className="form-control gfield_select"
            aria-required="true"
            aria-invalid="false"
          >
            <option value="" selected="selected" className="gf_placeholder">
              Select the frequency...
            </option>
            <option value="On-demand">On-demand</option>
            <option value="Prescheduled">Prescheduled</option>
            <option value="On-demand + Prescheduled">
              On-demand + Prescheduled
            </option>
            <option value="Unsure">Unsure</option>
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
  