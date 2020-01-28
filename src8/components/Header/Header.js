import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.header`
  background-image: linear-gradient(#77a1d3, #79cbca, #e684ae);
  position: fixed;
  left: 0;
  width: 200px;
  height: 100vh;
  color: whitesmoke;
  padding-top: 20px;
  display: grid;
  gap: 20px;
  grid-auto-rows: 40px;
  grid-auto-columns: 1fr;
  justify-items: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const SLink = styled(Link)`
  height: 90%;
  width: 90%;
  font-size: 40px;
  border-right: 6px solid whitesmoke;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-right: 60px solid whitesmoke;
    color: black;
  }
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>Power.io</Title>
    <SLink to="/">Home</SLink>
    <SLink to="/Detail">Detail</SLink>
  </Header>
));
