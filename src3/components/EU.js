import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.color};
`;
const SubTitle = styled.div``;
const Title = styled.div``;
const Content = styled.div``;

function EU({ color, subtitle, title, content }) {
  return (
    <Container color={color}>
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

export default EU;
