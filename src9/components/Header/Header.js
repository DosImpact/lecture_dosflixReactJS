import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 50px;
  background-image: linear-gradient(to right, #3c3b3f, #605c3c);
  color: white;
  font-weight: 300;
  font-size: 20px;
`;
const GLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid
    ${props => (props.pathname ? `#decba4` : `#transparent`)};
  transition: border-bottom 0.2s ease-in-out;
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <GLink to="/" pathname={pathname === "/"}>
      <div>Easy Read</div>
    </GLink>
    <GLink to="/detail" pathname={pathname === "/detail"}>
      <div>News</div>
    </GLink>
  </Header>
));
