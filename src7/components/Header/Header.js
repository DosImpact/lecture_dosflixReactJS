import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  width: 25vw;
  height: 50px;
`;
const Item = styled.li`
  background-color: ${props => (props.pathname ? "#bbe1fa" : "1b262c")};
  color: ${props => (props.pathname ? "#1b262c" : "#bbe1fa")};
  width: 25vw;
  transition: 0.3s ease-in-out;
`;
const SLink = styled(Link)`
  height: 100%;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const NavHeader = ({ location: { pathname } }) => (
  <Header>
    <List>
      <Item pathname={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item pathname={pathname === "/post"}>
        <SLink to="/post">포스트관리</SLink>
      </Item>
      <Item pathname={pathname === "/reply"}>
        <SLink to="/reply">댓글관리</SLink>
      </Item>
      <Item pathname={pathname === "/csv"}>
        <SLink to="/csv">CSV->POST</SLink>
      </Item>
    </List>
  </Header>
);
export default withRouter(NavHeader);
