import React from "react";
import HomePresenter from "./HomePresenter";
import { movieAPI } from "components/api";
class HomeContainer extends React.Component {
  state = {
    results: null
  };
  async componentDidMount() {
    const {
      data: { results }
    } = await movieAPI.getPopularMovie();
    console.log(results);
    this.setState({ results });
  }
  render() {
    const { results } = this.state;
    return <HomePresenter movies={results}></HomePresenter>;
  }
}
export default HomeContainer;
