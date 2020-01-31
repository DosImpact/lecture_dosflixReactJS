import React from "react";
import HomePresenter from "./HomePresenter";
import { Button, DatePicker, message, version } from "antd";

export default class HomeContainer extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </div>
      </div>
    );
  }
}
