import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Detail from "Routes/Detail";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Home from "Routes/Home";

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
