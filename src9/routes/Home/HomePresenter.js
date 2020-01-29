import React from "react";
import styled from "styled-components";

const HomeContent = styled.div`
  padding: 50px 25px 0px 25px;
`;
const Title = styled.div`
  font-size: 67px;
  font-weight: 300;
`;
const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  opacity: 0.5;
  padding-top: 10px;
`;
const GridContent = styled.article`
  margin-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 400px;
`;
const GridItem = styled.div`
  border-radius: 30px;
  & img {
    height: 30px;
    width: 30px;
  }
  &:nth-child(1) {
    background-image: url(https://i.pinimg.com/564x/b8/c0/7a/b8c07a5a63f15415d036ea209abee11d.jpg);
    grid-column: span 2;
    background-position: center;
    background-size: cover;
  }
`;

export default () => {
  return (
    <HomeContent>
      <Title>Easy to read</Title>
      <SubTitle>Simple knowledge to learn quickly.</SubTitle>
      <GridContent>
        <GridItem>
          <div>Daily language</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </GridItem>
        <GridItem>
          <img
            src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
            alt="example"
          />
          <div>Daily language</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </GridItem>
        <GridItem>
          <img
            src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
            alt="example"
          />
          <div>Daily language</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </GridItem>
        <GridItem>
          <img
            src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
            alt="example"
          />
          <div>Daily language</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </GridItem>
        <GridItem>
          <img
            src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
            alt="example"
          />
          <div>Daily language</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </GridItem>
      </GridContent>
    </HomeContent>
  );
};
