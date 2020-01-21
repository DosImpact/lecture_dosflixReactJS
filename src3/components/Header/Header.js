import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100vw;
  margin: 40px 70px;
  z-index: 50;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Item = styled.li`
  flex-grow: ${props => (props.grow ? "2" : "1")};
  font-size: 17px;
  margin: 0px 20px;
  &:hover {
    color: #c22424;
  }
  &:first-child {
  }
`;
const HeaderColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;
const SLink = styled(Link)`
  border-bottom: 2px solid ${props => (props.current ? "red" : "black")};
  transition: border-bottom 0.5s ease-in-out;
  ${props =>
    props.title
      ? ` 
      font-family: "Bangers", cursive;
      font-size: 72px;`
      : `
    `}
`;

const Navbar = ({ location: { pathname } }) => (
  <>
    <Header>
      <HeaderColumn>
        <SLink to="/" title>
          Rippi<strong>.</strong>
        </SLink>
      </HeaderColumn>
      <HeaderColumn>
        <List>
          <Item></Item>
          <Item grow>
            <SLink to="/" current={pathname === "/"} grow>
              HOME
            </SLink>
          </Item>
          <Item>
            <SLink to="/detail" current={pathname === "/detail"}>
              SERVICE
            </SLink>
          </Item>
          <Item>
            <SLink to="/detail" current={pathname === "/feedback"}>
              FEEDBACK
            </SLink>
          </Item>
          <Item>
            <SLink to="/detail" current={pathname === "/contact"}>
              CONTACT
            </SLink>
          </Item>
        </List>
      </HeaderColumn>
    </Header>
  </>
);

export default withRouter(Navbar);
