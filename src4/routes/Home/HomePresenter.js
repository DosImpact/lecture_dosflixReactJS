import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const HomePresenter = () => (
  <Sider width={200} style={{ background: "#fefefe" }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            subnav 1
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/home/option1">option1</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/home/option2">option1</Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="5">
        <span>
          <Icon type="laptop" />
          <Link to="/home/option3"> subnav 2</Link>
        </span>
      </Menu.Item>

      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="notification" />
            <Link to="/home/option3">option3</Link>
          </span>
        }
      >
        <Menu.Item key="9">
          <Link to="/home/option4">option4</Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/home/option5">option5</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default HomePresenter;
