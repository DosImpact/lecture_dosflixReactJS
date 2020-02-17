import React from "react";
import Container from "../../components/frame/Container";
import styled from "styled-components";

const SContainer = styled(Container)`
  background: red;
`;

export default () => {
  return <SContainer>HOME</SContainer>;
};
