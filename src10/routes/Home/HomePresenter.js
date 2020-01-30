import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const GridWrapp = styled.div`
  height: 400px;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  display: grid;
  gap: 10px;
  padding: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 400px;
  background-color: #c7ceea;
`;
const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:nth-child(1) {
    background-image: url(https://i.pinimg.com/564x/92/a8/7b/92a87b097372f3a121518366567a0e0a.jpg);
  }
  &:nth-child(2) {
    background-image: url(https://i.pinimg.com/564x/3d/96/2b/3d962ba16436a10eb1a01db5e2138f40.jpg);
  }
  &:nth-child(3) {
    background-image: url(https://i.pinimg.com/564x/87/58/5e/87585edb1e8784f052e89d8767627900.jpg);
  }
`;
const GridArticle = styled.div`
  height: 100vh;
  margin: 200px 30px 0px 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 500px;
`;
const GridColumn = styled.div``;
const Container = styled.div`
  height: 200px;
  margin: 50px 10px;
`;
const Title = styled.div`
  font-weight: 300;
  font-size: 36px;
`;
const Content = styled.div`
  margin: 30px 0px 100px 0px;
  opacity: 0.5;
  margin-bottom: 20px;
`;
const Back = styled.a`
  border-bottom: 1px solid blueviolet;
`;
function BackLink({ haslinkTitle, haslinkContent, haslink }) {
  return (
    <Back href="#">
      {haslink ? (
        <>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>
            {" "}
            {haslinkTitle} : {haslinkContent}
          </span>
        </>
      ) : (
        ""
      )}
    </Back>
  );
}
const Parap = ({ title, content, haslink, haslinkTitle, haslinkContent }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <BackLink
      haslink={haslink}
      haslinkTitle={haslinkTitle}
      haslinkContent={haslinkContent}
    />
  </Container>
);

const Article = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

export default () => {
  return (
    <>
      <article>
        <GridWrapp>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridWrapp>
      </article>
      <Article>
        <GridArticle>
          <GridColumn>
            <Parap
              haslink
              haslinkTitle="GO BACK"
              haslinkContent="NEVER ~"
              title="EXPLORE THE BASICS"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis ipsa perferendis asperiores illo inventore, ducimus iste porro doloribus, consequatur ex omnis, odit esse tenetur pariatur? Deleniti necessitatibus quae explicabo!"
            />
            <Parap
              haslink
              haslinkTitle="fontawesome"
              haslinkContent="MULTIDEA ~"
              title="Year 2014 Client"
            />
            <Parap
              haslink
              haslinkTitle="GO BACK"
              haslinkContent="NEVER ~"
              title="Neue Content DesignBASICS"
            />
            <Parap
              haslink
              haslinkTitle="GO BACK"
              haslinkContent="NEVER ~"
              title="EXPLORE THE BASICS"
            />
          </GridColumn>
          <GridColumn>
            <Parap
              title="BACKGROUND"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis ipsa perferendis asperiores illo inventore, ducimus iste porro doloribus, consequatur ex omnis, odit esse tenetur pariatur? Deleniti necessitatibus quae explicabo!"
            />
            <Parap
              title="CHALLENGE"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis ipsa perferendis asperiores illo inventore, ducimus iste porro doloribus, consequatur ex omnis, odit esse tenetur pariatur? Deleniti necessitatibus quae explicabo!"
            />
            <Parap
              title="SOLUTION"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis ipsa perferendis asperiores illo inventore, ducimus iste porro doloribus, consequatur ex omnis, odit esse tenetur pariatur? Deleniti necessitatibus quae explicabo!"
            />
          </GridColumn>
        </GridArticle>
      </Article>
    </>
  );
};
