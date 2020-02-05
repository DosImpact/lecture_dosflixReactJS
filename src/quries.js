import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    Users {
      id
      name
      password
      picture
    }
  }
`;
