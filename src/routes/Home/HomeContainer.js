import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { HOME_PAGE } from "../../quries";
import HomePresenter from "./HomePresenter";

const TEST = gql`
  {
    Users {
      id
      name
      password
      picture
    }
  }
`;

const HomeContainer = () => {
  const { loading, error, data } = useQuery(TEST);

  return (
    <>
      {loading && "loading..."}
      {!loading && error && "ERROR : 404"}
      {!loading && data && data.Users && <HomePresenter Users={data.Users} />}
    </>
  );
};

export default HomeContainer;

// export default class HomeContainer extends React.Component {
//   render() {
//     return (
//       <Query query={HOME_PAGE}>
//         {({ loading, data, error }) => {
//           if (loading) return "loading..";
//           if (error) return "something happened";
//           return <HomePresenter Users={data.Users} />;
//         }}
//       </Query>
//     );
//   }
// }
