import React from "react";
import HomePresenter from "./HomePresenter";
import Wrapper from "../../components/Wrapper";

export default class HomeContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <HomePresenter />
      </Wrapper>
    );
  }
}
