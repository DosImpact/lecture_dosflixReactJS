import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.div`
  position: fixed;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100vh;
  background-color: #f6eec9;
`;
const List = styled.ul`
  height: 100vh;
  width: 100%;
`;

const Item = styled.li`
  height: 50px;
  width: 90%;
  margin: 4px;
  background-color: #fed39f;
  border-right: 5px solid
    ${props => (props.current ? "#fe8761" : "transparent")};
  transition: border-right 0.4s ease-in-out;
`;
const SLink = styled(Link)`
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
  <NavHeader>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">HOME</SLink>
      </Item>
      <Item current={pathname === "/detail"}>
        <SLink to="/detail">DETAIL</SLink>
      </Item>
    </List>
  </NavHeader>
);
export default withRouter(Header);
