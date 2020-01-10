import React from "react";
import HomePresenter from "./HomePresenter";
import { tistoryAPI } from "api";

const AC_LS = "access_token";

class HomeContainer extends React.Component {
  state = {
    loading: true,
    popUp: false,
    AccessTokenTerm: "",
    AccessToken: "",
    blogInfo: null
  };
  handleSubmit = async event => {
    event.preventDefault();
    console.log("submit!!");
    tistoryAPI.setACTOKEN(this.state.AccessTokenTerm);
    const {
      data: {
        tistory: { item }
      }
    } = await tistoryAPI.getBlogInfo();
    console.log(item);
    this.setState({ blogInfo: item, loading: false });
    localStorage.setItem(AC_LS, this.state.AccessTokenTerm);
  };

  handleChange = event => {
    const { target } = event;
    console.log(target);
    this.setState({ AccessTokenTerm: target.value });
  };
  handleAccessClick = event => {
    this.setState({ popUp: true });
  };
  async componentDidMount() {
    const ac = localStorage.getItem(AC_LS);
    console.log(ac);
    if (ac === null) {
      this.setState({ loading: true });
    } else {
      tistoryAPI.setACTOKEN(ac);
      const {
        data: {
          tistory: { item }
        }
      } = await tistoryAPI.getBlogInfo();
      this.setState({ blogInfo: item, loading: false });
    }
  }

  render() {
    const { loading, popUp, AccessTokenTerm, blogInfo } = this.state;
    return (
      <HomePresenter
        loading={loading}
        popUp={popUp}
        AccessTokenTerm={AccessTokenTerm}
        blogInfo={blogInfo}
        handleAccessClick={this.handleAccessClick}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default HomeContainer;
