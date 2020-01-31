import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  width: 180px;
  height: 670px;
  background-color: whitesmoke;
  position: fixed;
  top: 30px;
  left: 30px;
`;

const mainnavstyle = `
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222222;
  color: whitesmoke;
  &:hover {
    background-color: #cd2935;
  }
`;
const clientContactStyle = `
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #cd2935;
  color: white;
  font-weight:500;
  & div:nth-child(1) {
    font-size: 16px;
  }
  & div:nth-child(2) {
    font-size: 30px;
  }
  & div:nth-child(3) {
    font-size: 16px;
    opacity: 0.6;
  }
`;
const HeaderItem = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  ${props => (props.mainnav ? `${mainnavstyle}` : ``)}
  ${props => (props.clientContact ? `${clientContactStyle}` : ``)}
`;
const HeaderLogo = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: black;
  background-image: url("http://ursmart84.cmtpartners.co.kr/img_up/shop_pds/ursmart84/site_content/logo1551940756.png");
  background-position: center;
  background-repeat: no-repeat;
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/">
      <HeaderLogo width="180px" height="180px"></HeaderLogo>
    </Link>
    <Link to="/">
      <HeaderItem width="180px" height="50px" mainnav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <div>브랜드소개</div>
      </HeaderItem>
    </Link>
    <Link to="/">
      <HeaderItem width="180px" height="50px" mainnav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <div>메뉴소개</div>
      </HeaderItem>
    </Link>
    <Link to="/">
      <HeaderItem width="180px" height="50px" mainnav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <div>매장안내</div>
      </HeaderItem>
    </Link>
    <Link to="/">
      <HeaderItem width="180px" height="50px" mainnav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <div>창업안내</div>
      </HeaderItem>
    </Link>
    <Link to="/">
      <HeaderItem width="180px" height="50px" mainnav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <div>커뮤니티</div>
      </HeaderItem>
    </Link>
    <HeaderItem width="180px" height="115px" clientContact>
      <div>고객센터</div>
      <div>1587-1234</div>
      <div>오전 09:00 - 오후 18:00</div>
    </HeaderItem>
    <div>
      <Link to="/">
        <FontAwesomeIcon size="2x" icon={faBars} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon size="2x" icon={faBars} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon size="2x" icon={faBars} />
      </Link>
    </div>

    <HeaderItem>
      <div>로그인</div>
      <div>회원가입</div>
    </HeaderItem>
  </Header>
));
