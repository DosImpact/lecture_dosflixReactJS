import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
