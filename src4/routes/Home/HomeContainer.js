import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import HomePresenter from "./HomePresenter";
import {
  NavLerem,
  OptionNav,
  Sample1,
  Sample2,
  Sample3
} from "./HomeComponents";

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <Router>
            <Route path="/home" component={HomePresenter}></Route>
            <Route path="/home/option1" component={OptionNav}></Route>
            <Route path="/home/option2" component={NavLerem}></Route>
            <Route path="/home/option3" component={Sample1}></Route>
            <Route path="/home/option4" component={Sample2}></Route>
            <Route path="/home/option5" component={Sample3}></Route>
          </Router>
        </Layout>
        <Layout>
          <Router>
            <Route path="/home/option1" component={OptionNav}></Route>
            <Route path="/home/option2" component={NavLerem}></Route>
            <Route path="/home/option3" component={Sample1}></Route>
            <Route path="/home/option4" component={Sample2}></Route>
            <Route path="/home/option5" component={Sample3}></Route>
          </Router>
        </Layout>
      </>
    );
  }
}
export default HomeContainer;
