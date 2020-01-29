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
    border-radius: 30px;
    height: 50%;
    width: 100%;
  }
  &:nth-child(1) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(https://i.pinimg.com/564x/b8/c0/7a/b8c07a5a63f15415d036ea209abee11d.jpg);
    grid-column: span 2;
    background-position: center;
    background-size: cover;
    color: white;
    font-size: 30px;
    padding: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
    & div:nth-child(1) {
      justify-self: flex-end;
      grid-row: span 2;
    }
    & div:nth-child(2) {
      justify-self: flex-start;
    }
    & div:nth-child(3) {
      justify-self: flex-end;
    }
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
  }
`;
const FlexItem = styled.div``;

export default () => {
  return (
    <HomeContent>
      <Title>Easy to read</Title>
      <SubTitle>Simple knowledge to learn quickly.</SubTitle>
      <GridContent>
        <GridItem>
          <div>
            Daily<br></br> language
          </div>
          <div>Lorem ipsum, dolor sit amet </div>
          <div>consectetur adipisicing elit.</div>
        </GridItem>
        <GridItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
        </GridItem>
        <GridItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/564x/b6/28/6e/b6286e4555719127578b4e9eb3a09b50.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
        </GridItem>
      </GridContent>
    </HomeContent>
  );
};
