import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 78px;
  font-weight: 300;
`;

const DetailPresenter = () => (
  <Content>
    <div>Power by DOSIMPACT</div>
  </Content>
);

export default DetailPresenter;
