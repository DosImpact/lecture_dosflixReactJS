import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: ${props => props.theme.pupleColor};
  color: ${props => props.theme.whiteColor};
  padding-left: 40px;
  display: flex;
  align-items: center;
  .header__img {
    width: 60px;
    height: 60px;
    background-image: url(${props => props.theme.logoImage});
    background-position: center;
    background-size: cover;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/">
      <div className="header__img"></div>
    </Link>
    <div className="header__list">
      <Link to="/detail">
        <div className="header__item">달고나</div>
      </Link>
    </div>
  </Header>
));
