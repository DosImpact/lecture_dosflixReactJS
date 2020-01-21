import React from "react";
import { Layout, Menu, Breadcrumb, Icon, AutoComplete } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function onSelect(value) {
  console.log("onSelect", value);
}

class Complete extends React.Component {
  state = {
    value: "",
    dataSource: []
  };

  onSearch = searchText => {
    this.setState({
      dataSource: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
        />
      </div>
    );
  }
}

export default () => (
  <Layout style={{ padding: "0 24px 24px" }}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      <Complete />
    </Content>
  </Layout>
);
