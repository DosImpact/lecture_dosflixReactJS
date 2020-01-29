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
  padding: 20px 0px;
`;
const GridContent = styled.article`
  overflow: scroll;
  margin-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 400px 400px 400px;
  grid-template-rows: 400px;
`;
const GridItem = styled.div`
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  color: white;
  font-size: 30px;
  padding: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  & img {
    border-radius: 30px;
    height: 50%;
    width: 100%;
  }
  & div:nth-child(1) {
    justify-self: flex-end;
    grid-row: span 2;
  }
  & div:nth-child(2) {
    justify-self: flex-start;
  }
  &:nth-child(1) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX4_6LZw4dwyMXnuXieRvQ1p1XGev6mk-jSleH2Ywjab-DvTD-);
  }
  &:nth-child(2) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(https://i.pinimg.com/564x/b8/c0/7a/b8c07a5a63f15415d036ea209abee11d.jpg);
  }
  &:nth-child(3) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(https://i.pinimg.com/736x/a0/e3/3d/a0e33d946cebb456251e9994d0e172a7.jpg);
  }
`;

export default () => {
  return (
    <HomeContent>
      <Title>Reading</Title>
      <SubTitle>
        Up to date <br /> <strong>Share the lastest tooks</strong>
      </SubTitle>
      <GridContent>
        <GridItem>
          <div>
            Daily<br></br> language
          </div>
          <div>Lorem ipsum, dolor sit amet </div>
        </GridItem>
        <GridItem>
          <div>
            Daily<br></br> language
          </div>
          <div>Lorem ipsum, dolor sit amet </div>
        </GridItem>
        <GridItem>
          <div>
            Daily<br></br> language
          </div>
          <div>Lorem ipsum, dolor sit amet </div>
        </GridItem>
      </GridContent>
      <SubTitle>
        <strong>Start writer</strong>
      </SubTitle>
      <GridContent>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </GridContent>
      <SubTitle>
        <strong>New information</strong>
      </SubTitle>
      <GridContent>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </GridContent>
    </HomeContent>
  );
};
