import React, { Component } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
};
