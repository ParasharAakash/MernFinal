import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


const WizardFormForthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div className="wrapper">
    <div className="form-wrapper">
    <h1>Social Info.</h1>
    <form onSubmit={handleSubmit}>
      <Field
        name="LinkedIn"
        type="text"
        component={renderField}
        label="LinkedIn Link"
      />
      <Field
        name="GitHub"
        type="text"
        component={renderField}
        label="GitHub Link"
      />
      <Field
        name="Facebook"
        type="text"
        component={renderField}
        label="Facebook Link"
      />
      <Field
        name="Hobbies"
        type="text"
        component={renderField}
        label="Hobbies"
      />
      <div>
      <button type="submit" className="next">
          submit
        </button>
        <button type="button" className="previous" onClick={previousPage}>
         <SkipPreviousIcon/>
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
})(WizardFormForthPage);
