import './ContactUsForm.css';

export default function ContactUsTestingForm() {
    const contactNumber = '111-111-111';
    return (
      <>
        <div className="we-help-section" style={{marginTop:'-50px',marginBottom:'-150px'}}>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="row justify-content-between">
          
          <div className="col-lg-5" >
            <span>CONTACT US</span>
            <h2 className="section-title mb-4" style={{fontWeight:'600',fontSize:'30px',marginTop:'20px'}}>Get Started Today</h2>
           
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
  action="/testingcontactusform"
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
  
<div
  id="field_5_14"
  className="gfield gfield--type-select gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible"
  data-js-reload="field_5_14"
>
  <label className="gfield_label gform-field-label" htmlFor="input_5_14">
    Estimated Number of Tests
    <span className="gfield_required">
      <span className="gfield_required gfield_required_text">(Required)</span>
    </span>
  </label>
  <div className="ginput_container ginput_container_select">
    <select
      name="input_14"
      id="input_5_14"
      className="large gfield_select form-control"
      aria-required="true"
      aria-invalid="false"
    >
      <option value="" selected="selected" className="gf_placeholder">
        Select an estimate...
      </option>
      <option value="1-50">1-50</option>
      <option value="51-100">51-100</option>
      <option value="101-500">101-500</option>
      <option value="501+">501+</option>
    </select>
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
  