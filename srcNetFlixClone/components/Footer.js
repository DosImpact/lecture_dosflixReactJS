import React, { Component, useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";

export default () => {
  const [popUp, setPopUp] = useState(false);
  const [lan, setLan] = useState("English");
  return (
    <Footer>
      <h2 className="footer__title">Questions? Call 1-877-742-1335</h2>
      <div className="footer__column">
        <ul>
          <li>FAQ </li>
          <li>Investor Relations </li>
          <li>Ways to Watch </li>
          <li>Corporate Information </li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Redeem Gift Cards</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Buy Gift Cards</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <div className="footer__language">
          <div>
            <i>
              <Icon icon={iosWorld} size={36} />
            </i>
            <div>
              <LanButton onClick={() => setPopUp(!popUp)}>{lan}</LanButton>
            </div>
          </div>
          {popUp && (
            <div>
              <LanButton
                onClick={() => {
                  setPopUp(!popUp);
                  setLan("English");
                }}
              >
                English
              </LanButton>
              <LanButton
                onClick={() => {
                  setPopUp(!popUp);
                  setLan("한국어");
                }}
              >
                한국어
              </LanButton>
            </div>
          )}
        </div>
      </div>
      <span className="footer__bottom">Netflix Canada</span>
    </Footer>
  );
};
const LanButton = styled.button`
  all: unset;
  width: 3rem;
  height: 2rem;
  margin: 0 1rem;
  ${props => props.theme.BoxColor} :hover {
    background-color: ${props => props.theme.grayColor};
  }
`;
const Footer = styled.div`
  padding: 50px 0px;
  color: ${props => props.theme.grayColor};
  ${props => props.theme.BoxColor}
  .footer__title {
    padding: 10px 10%;
  }
  .footer__column {
    ${props => props.theme.wrapper}
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    ul li {
      line-height: 3rem;
    }
  }
  .footer__bottom {
    padding: 10px 10%;
  }
  .footer__language {
    display: flex;
    flex-direction: column;
  }
`;
