import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  height: 120px;
  background-color: #e2f0cb;
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  font-weight: 300;
  height: 100%;
`;
const LinkItem = styled(Link)`
  transition: all 0.2s linear;
  padding: 20px;
  border-bottom: 1px solid
    ${props => (props.pathname ? "black" : "transparent")};
  &:hover {
    background-color: #ff9aa2;
  }
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <FontAwesomeIcon icon={faBars} size="2x" color="#FF9AA2" />
    <Menu>
      <LinkItem to="/" pathname={pathname === "/"}>
        HOME
      </LinkItem>
      <LinkItem to="/detail" pathname={pathname === "/detail"}>
        DETAIL
      </LinkItem>
    </Menu>
  </Header>
));
