import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 60px;
  position: absolute;
`;
const ContentImage = styled.div`
  position: fixed;
  bottom: 0px;
  left: 400px;
  width: 1000px;
  height: 568px;
  background: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ContentColumn = styled.div`
  width: 50%;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 100px;
`;
const SubTitile = styled.div`
  margin: 30px 0px;
  opacity: 0.6;
  font-size: 20px;
  line-height: 1.4em;
`;
const EnrollButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 30px;
`;
const ListButton = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Item = styled.li`
  width: 40px;
  height: 40px;
  background-color: gray;
  &:first-child {
    background-color: #c22424;
  }
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Strong = styled.strong`
  color: red;
`;
export default () => (
  <Container>
    <Content>
      <ContentColumn>
        <Title>
          <div>Bicycle</div>
          <div>
            <Strong>Re</Strong>pair
          </div>
        </Title>
        <SubTitile>
          We dont'just want you to love riding your bike.
          <br />
          We want yout to love warking on your bike too.
          <br />
          we are here to help you.
        </SubTitile>
        <EnrollButton> Enroll</EnrollButton>
        <ListButton>
          <Item>
            <div>1</div>
          </Item>
          <Item>
            <div>2</div>
          </Item>
          <Item>
            <div>3</div>
          </Item>
          <Item>
            <div>4</div>
          </Item>
        </ListButton>
      </ContentColumn>
      <ContentColumn></ContentColumn>
    </Content>
    <ContentImage img={require("../../assets/car2.png")}></ContentImage>
  </Container>
);
