import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.header`
  background-color: #77a1d3;
  position: fixed;
  left: 0;
  display: flex;
  width: 300px;
  height: 200vh;
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <Link to="/">Home</Link>
    <Link to="/Detail">Detail</Link>
  </Header>
));
