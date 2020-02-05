import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HomePresenter from "./HomePresenter";
import useInput from "../../hooks/useInput";

const USERS = gql`
  {
    Users {
      id
      name
      password
      picture
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $password: String!, $picture: String) {
    createUser(name: $name, password: $password, picture: $picture) {
      id
      name
      picture
      password
    }
  }
`;

const HomeContainer = () => {
  const { loading, error, data } = useQuery(USERS);
  const name = useInput("");
  const picture = useInput("");
  const password = useInput("");
  const handleOnSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      {loading && "loading..."}
      {!loading && error && "ERROR : 404"}
      {!loading && data && data.Users && <HomePresenter Users={data.Users} />}
      <div>
        <h2> Celeb User Create </h2>
        <form onSubmit={handleOnSubmit}>
          <input {...name}></input>
          <input {...password}></input>
          <input {...picture}></input>
          <button>submit</button>
        </form>
      </div>
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
