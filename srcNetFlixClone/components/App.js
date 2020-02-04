import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyels from "../styles/GlobalStyles";

export default () => (
  <ThemeProvider theme={theme}>
    <Router />
    <GlobalStyels />
  </ThemeProvider>
);
