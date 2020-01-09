import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Header from "./Header";
import CSVReader from "./CSVReader";
export default () => (
  <Router>
    <>
      {" "}
      <CSVReader />
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
