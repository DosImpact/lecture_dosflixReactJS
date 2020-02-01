import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import { ApolloProvider } from "react-apollo";
import client from "../apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
      <GlobalStyles />
    </ApolloProvider>
  );
}
export default App;
