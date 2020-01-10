import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import CSV from "routes/CSV";
import Post from "routes/Post";
import Reply from "routes/Reply";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/csv" component={CSV}></Route>
        <Route path="/post" component={Post}></Route>
        <Route path="/reply" component={Reply}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
}

export default App;
