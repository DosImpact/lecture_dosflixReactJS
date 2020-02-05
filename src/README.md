# Dostory 프론트단

# 환경 설치

- 최신버전으로 설치해야함.! yarn add apollo-boost @apollo/react-hooks graphql graphql-tag

```
yarn add react-router-dom ( react-apollo@2.5 )??
yarn add apollo-boost @apollo/react-hooks graphql graphql-tag
```

```js

------------------------------------------------------------ 아폴로 클라이언트 설정 : 어디서 데이터를 얻어올건가

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default client;

------------------------------------------------------------ 아폴로 프로바이더 컴포넌트로 - Query컴포넌트를 사용할수 있겠끔 기능 녹이기
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";

    <ApolloProvider client={client}>
      <Router />
      <GlobalStyles />
    </ApolloProvider>

------------------------------------------------------------ 쿼리문 작성
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
------------------------------------------------------------ Query컴포넌트 + 쿼리문

import { Query } from "react-apollo";
import { HOME_PAGE } from "../../quries";

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

```
