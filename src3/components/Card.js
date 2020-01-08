import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.color};
  width: 200px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
const Title = styled.div`
  background-color: #ffb677;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  background-color: #ff8364;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Card({ title, content, color }) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  color: PropTypes.string
};

export default Card;
