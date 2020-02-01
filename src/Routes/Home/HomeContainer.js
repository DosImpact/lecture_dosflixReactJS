import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "../../quries";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends React.Component {
  render() {
    return (
      <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
          if (loading) return "loading..";
          if (error) return "something happened";
          return <HomePresenter Users={data.Users} />;
        }}
      </Query>
    );
  }
}
