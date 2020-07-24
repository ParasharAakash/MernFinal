import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // withRouter
} from "react-router-dom";
import NotFound from "./components/NotFound";
import NewEmp from "./components/NewEmp";
import User from "./components/View";
import WizardForm from "./components/Personal";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={NewEmp} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
          <Route exact path="/wizard" component={WizardForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
