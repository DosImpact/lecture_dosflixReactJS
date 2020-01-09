import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "routes/Home";
import Detail from "routes/Detail";
import Header from "./Header";
function Router() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/" exact component={Detail}></Route>
      </Switch>
    </HashRouter>
  );
}
export default Router;
