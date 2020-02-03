import React, { Component } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
export default () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pricing" exact component={Pricing}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
};
