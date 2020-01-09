import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "components/Header";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
/**논리장
 * react-router-dom 에서 HashRouter,Route,Redirect,Switch
 * 해쉬 라우터를 이용 - route로 길과 컴포넌트를 빼준다.
 *  그외 경로는 리다이렉트 시킨다.
 * 아싸리, 여러길로 가는것을 원하지 않기떄문에 switch를 사용한다.
 */
