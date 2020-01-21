import React from "react";
import { Layout, Menu } from "antd";
import { withRouter, Link } from "react-router-dom";

const { Header } = Layout;

export default withRouter(({ location: { pathname } }) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        {console.log(pathname)}
        <Menu.Item key="1">
          <Link to="/">HOME </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Detail">DETAIL</Link>
        </Menu.Item>
      </Menu>
    </Header>
  </Layout>
));
