import React from "react";
import Router from "./Router";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Router />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}
export default App;
