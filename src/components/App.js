import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";

export default () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
