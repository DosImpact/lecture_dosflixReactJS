import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #af460f;
  width:500px
  height:200px;
  position:fixed;
  top:200px;
  left:200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:#fed39f;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Content = styled.div`
  font-size: 16px;
`;

export default ({ title, content }) => (
  <>
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  </>
);
