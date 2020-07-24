import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import "./Education.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  const classes = useStyles();
  return (
      <div className="wrapper">
      <div className="form-wrapper">
      <h1>Educational Info.</h1>
      <form className={classes.container} onSubmit={handleSubmit}>
      <Field name="Course" type="text" component={renderField} label="Course" />
      <Field
        name="College"
        type="text"
        component={renderField}
        label="College"
      />
    <Field
        name="year"
        type="number"
        component={renderField}
        label="Year"
      />
      <Field
        name="Percentage"
        type="number"
        component={renderField}
        label="Percentage"
      />
      {/* </div> */}
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          <SkipPreviousIcon/>
        </button>
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
})(WizardFormSecondPage);
