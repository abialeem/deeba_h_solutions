import './ContactUsForm.css';

export default function ContactUsIndustriesForm() {
  const contactNumber = '+44 7448 552945';
    return (
      <>
        <div className="we-help-section" style={{marginTop:'50px',marginBottom:'-100px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-5" >
            <span>CONTACT US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'30px',marginTop:'20px'}}>Get Started Today</h2>
           
            <p className="has-xl-font-size" style={{
              fontSize:'15px',
              lineHeight:'30px',
              fontWeight:'500'
            }}>

Interested in our services? Complete the form to receive a free quote or <b>call us at {contactNumber}</b>.
            </p>
            <ul className="list-unstyled pl-md-5 mb-5">
<li className="d-flex text-black mb-2">
<span className="mr-3">
  <span className="icon-map" style={{marginRight:'10px'}}>
  <i className="fa fa-map" aria-hidden="true"></i>
  </span>
</span> SPC FREE ZONE  <br/> E311, Sheikh Mohammad Bin Zayed Rd, <br/>Sharjah, U.A.E
</li>
<li className="d-flex text-black mb-2">
  <span className="mr-3">
    <span className="icon-phone" style={{marginRight:'10px'}}>
    <i className="fa fa-phone" aria-hidden="true"></i>
    </span>
    </span> {contactNumber}
    </li>
<li className="d-flex text-black">
  <span className="mr-3">
    <span className="icon-envelope-o" style={{marginRight:'10px'}}>
    <i className="fa fa-envelope" aria-hidden="true"></i>
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
  action="/industriescontactusform"
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
      <fieldset
  id="field_23_16"
  className="gfield gfield--type-radio gfield--type-choice gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_above gfield_visibility_visible"
  data-js-reload="field_23_16"
>
  <legend className="gfield_label gform-field-label">
    Service of Interest
    <span className="gfield_required">
      <span className="gfield_required gfield_required_text">(Required)</span>
    </span>
  </legend>
  <div className="ginput_container ginput_container_radio">
    <div className="gfield_radio" id="input_23_16">
      <div className="gchoice gchoice_23_16_0">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="More Than One"
          id="choice_23_16_0"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_0"
          id="label_23_16_0"
          className="gform-field-label gform-field-label--type-inline"
        >
          More Than One Service
        </label>
      </div>
      <div className="gchoice gchoice_23_16_1">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="Translation Services"
          id="choice_23_16_1"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_1"
          id="label_23_16_1"
          className="gform-field-label gform-field-label--type-inline"
        >
          Translation Services
        </label>
      </div>
      <div className="gchoice gchoice_23_16_2">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="Interpretation Services"
          id="choice_23_16_2"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_2"
          id="label_23_16_2"
          className="gform-field-label gform-field-label--type-inline"
        >
          Interpretation Services
        </label>
      </div>
      <div className="gchoice gchoice_23_16_3">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="Training Account"
          id="choice_23_16_3"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_3"
          id="label_23_16_3"
          className="gform-field-label gform-field-label--type-inline"
        >
          Interpreter Training
        </label>
      </div>
      <div className="gchoice gchoice_23_16_4">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="Testing Account"
          id="choice_23_16_4"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_4"
          id="label_23_16_4"
          className="gform-field-label gform-field-label--type-inline"
        >
          Language Testing
        </label>
      </div>
      <div className="gchoice gchoice_23_16_5">
        <input
          className="gfield-choice-input"
          name="input_16"
          type="radio"
          defaultValue="Accent Reduction"
          id="choice_23_16_5"
          onChange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_23_16_5"
          id="label_23_16_5"
          className="gform-field-label gform-field-label--type-inline"
        >
          Accent Reduction
        </label>
      </div>
    </div>
  </div>
</fieldset>

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
      onClick=''
      
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
  