import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 970px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ children }) => <Wrapper>{children}</Wrapper>;
