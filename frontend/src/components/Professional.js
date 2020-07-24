import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

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

const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage } = props;
  const classes = useStyles();
  return (
    <div className="wrapper">
    <div className="form-wrapper">
    <h1>Professional Info.</h1>
    <form className={classes.container} onSubmit={handleSubmit}>
      <Field
        name="Company_Name"
        type="text"
        component={renderField}
        label="Company Name"
      />
       <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Field
        name="Designation"
        type="text"
        component={renderField}
        label="Designation"
      />
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
})(WizardFormThirdPage);
