import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 400px;
  min-height: 100px;
  border: 1px solid ${props => props.theme.pupleColor};
  border-radius: 15px;
  border-top-right-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 15px 0px;
  div {
    width: 100%;
  }
  .section__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .title__title {
      font-size: 24px;
      font-weight: bold;
    }
    .title__plus {
      font-size: 12px;
      font-weight: normal;
    }
  }
`;

export default ({ title, children }) => (
  <Section>
    <div className="section__title">
      <span className="title__title">{title}</span>
      <span className="title__plus">더보기>></span>
    </div>
    <div className="section__children">{children}</div>
  </Section>
);
