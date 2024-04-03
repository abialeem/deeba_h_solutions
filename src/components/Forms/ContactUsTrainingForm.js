import './ContactUsForm.css';

export default function ContactUsTrainingForm() {
    const contactNumber = '111-111-111';
    return (
      <>
        <div className="we-help-section" style={{marginTop:'-50px',marginBottom:'-150px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-5" >
            <span>CONTACT US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'30px',marginTop:'20px'}}>Have Questions About Our Interpreter Training Courses?</h2>
           
            <p class="has-xl-font-size" style={{
              fontSize:'15px',
              lineHeight:'30px',
              fontWeight:'500'
            }}>

Interested in our services? Complete the form to receive a free quote or <b>call us at {contactNumber}</b>.
            </p>
            
            {/* <p><Link to="/services" className="btn">Explore Our Services</Link></p> */}
          </div>
          <div className="col-lg-7 ">
          <form
  method="post"
  encType="multipart/form-data"
  id="gform_28"
  action="/trainingcontactusform"
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
  id="field_33_5"
  className="gfield gfield--type-radio gfield--type-choice gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_above gfield_visibility_visible"
  data-js-reload="field_33_5"
>
  <label className="gfield_label gform-field-label" htmlFor="input_33_5">
    What language(s) do you speak fluently?
    <span className="gfield_required">
      <span className="gfield_required gfield_required_text">(Required)</span>
    </span>
  </label>
  <div className="ginput_container ginput_container_textarea">
    <textarea
      name="input_5"
      id="input_33_5"
      className="textarea small form-control"
      placeholder="What language(s) do you speak fluently?*"
      aria-required="true"
      aria-invalid="false"
      rows={10}
      cols={50}
      defaultValue={""}
    />
  </div>
</div>

<fieldset
  id="field_33_8"
  className="gfield gfield--type-checkbox gfield--type-choice gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
  data-js-reload="field_33_8"
>
  <legend className="gfield_label gform-field-label gfield_label_before_complex">
    Which of our services would you like to learn about? (Check all that apply)
    <span className="gfield_required">
      <span className="gfield_required gfield_required_text">(Required)</span>
    </span>
  </legend>
  <div className="ginput_container ginput_container_checkbox">
    <div className="gfield_checkbox" id="input_33_8">
      <div className="gchoice gchoice_33_8_1">
        <input
          className="gfield-choice-input"
          name="input_8.1"
          type="checkbox"
          defaultValue="40-Hour Medical Interpreter Training - Online $650"
          id="choice_33_8_1"
        />
        <label
          htmlFor="choice_33_8_1"
          id="label_33_8_1"
          className="gform-field-label gform-field-label--type-inline"
        >
          40-Hour Medical Interpreter Training - Online $650
        </label>
      </div>
      <div className="gchoice gchoice_33_8_2">
        <input
          className="gfield-choice-input"
          name="input_8.2"
          type="checkbox"
          defaultValue="80-Hour Medical Interpreter Training - Online $995"
          id="choice_33_8_2"
        />
        <label
          htmlFor="choice_33_8_2"
          id="label_33_8_2"
          className="gform-field-label gform-field-label--type-inline"
        >
          80-Hour Medical Interpreter Training - Online $995
        </label>
      </div>
      <div className="gchoice gchoice_33_8_3">
        <input
          className="gfield-choice-input"
          name="input_8.3"
          type="checkbox"
          defaultValue="CCHI/NBCMI Oral Exam Prep Course"
          id="choice_33_8_3"
        />
        <label
          htmlFor="choice_33_8_3"
          id="label_33_8_3"
          className="gform-field-label gform-field-label--type-inline"
        >
          CCHI/NBCMI Oral Exam Prep Course
        </label>
      </div>
      <div className="gchoice gchoice_33_8_4">
        <input
          className="gfield-choice-input"
          name="input_8.4"
          type="checkbox"
          defaultValue="Payment Plans"
          id="choice_33_8_4"
        />
        <label
          htmlFor="choice_33_8_4"
          id="label_33_8_4"
          className="gform-field-label gform-field-label--type-inline"
        >
          Payment Plans
        </label>
      </div>
      <div className="gchoice gchoice_33_8_5">
        <input
          className="gfield-choice-input"
          name="input_8.5"
          type="checkbox"
          defaultValue="Continuing Education Credits"
          id="choice_33_8_5"
        />
        <label
          htmlFor="choice_33_8_5"
          id="label_33_8_5"
          className="gform-field-label gform-field-label--type-inline"
        >
          Continuing Education Credits
        </label>
      </div>
    </div>
  </div>
</fieldset>

<fieldset
  id="field_33_7"
  className="gfield gfield--type-radio gfield--type-choice gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
  data-js-reload="field_33_7"
>
  <legend className="gfield_label gform-field-label">
    Are you currently working as a professional interpreter?
    <span className="gfield_required">
      <span className="gfield_required gfield_required_text">(Required)</span>
    </span>
  </legend>
  <div className="ginput_container ginput_container_radio">
    <div className="gfield_radio" id="input_33_7">
      <div className="gchoice gchoice_33_7_0">
        <input
          className="gfield-choice-input"
          name="input_7"
          type="radio"
          defaultValue="Yes"
          id="choice_33_7_0"
          onchange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_33_7_0"
          id="label_33_7_0"
          className="gform-field-label gform-field-label--type-inline"
        >
          Yes
        </label>
      </div>
      <div className="gchoice gchoice_33_7_1">
        <input
          className="gfield-choice-input"
          name="input_7"
          type="radio"
          defaultValue="No"
          id="choice_33_7_1"
          onchange="gformToggleRadioOther( this )"
        />
        <label
          htmlFor="choice_33_7_1"
          id="label_33_7_1"
          className="gform-field-label gform-field-label--type-inline"
        >
          No
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
  