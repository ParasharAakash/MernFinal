import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import "./Personal.css";

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <div className="wrapper">
    <div className="form-wrapper">
    <h1>Personal Info.</h1>
    <form onSubmit={handleSubmit}>
      <div>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="email" type="text" component={renderField} label="Email" />
      <Field
        name="Phone_no"
        type="text"
        component={renderField}
        label="Phone no"
      />
      <Field
        name="Permanent_address"
        type="text"
        component={renderField}
        label="Permanent address"
      />
      {/* <Field
        name="Current address"
        type="text"
        component={renderField}
        label="Current address"
      /> */}
      <Field name="Photo" type="text" component={renderField} label="Photo" />
      <button type="submit" className="next">
         <SkipNextRoundedIcon/>
        </button>
      </div>
    </form>
    
    </div>
    </div>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);
