import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 0px auto;
  width: 970px;
  background-color: goldenrod;
`;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 800px;
  justify-items: center;
  align-items: center;
  .element {
    width: 850px;
    height: 800px;
    padding: 20px;
    background-color: gray;
  }
`;

const Container = ({ children }) => {
  return (
    <Box>
      <GridBox>{children}</GridBox>
    </Box>
  );
};

export default Container;
