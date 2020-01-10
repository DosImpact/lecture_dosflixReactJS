import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import Detail from "routes/Detail";
import TV from "routes/TV";
import Search from "routes/Search";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
}

export default App;
