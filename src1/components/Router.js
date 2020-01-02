import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
function Router() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
}
export default Router;
