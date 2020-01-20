import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "routes/Home";
import Detail from "routes/Detail";

export default () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  </>
);
