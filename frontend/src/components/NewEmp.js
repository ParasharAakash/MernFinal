import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
import store from "../store";
import showResults from "../showResults";
import WizardForm from "../WizardForm";




function AddUser() {
  return (
    <Provider store={store}>
      <div className="App">
      <WizardForm onSubmit={showResults} />
      </div>
    </Provider>
  );
}

export default AddUser;
