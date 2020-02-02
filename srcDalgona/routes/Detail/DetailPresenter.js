import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.mainColor};
`;

export default () => {
  return <Container>Detail</Container>;
};
