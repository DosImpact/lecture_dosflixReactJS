import React from "react";
import CSVPresenter from "./CSVPresenter";

class CSVContainer extends React.Component {
  state = {
    loading: true,
    data: null
  };
  handleDataUpload = data => {
    console.log(data);
    this.setState({ loading: false, data });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <CSVPresenter
        handleDataUpload={this.handleDataUpload}
        loading={loading}
        data={data}
      ></CSVPresenter>
    );
  }
}

export default CSVContainer;
