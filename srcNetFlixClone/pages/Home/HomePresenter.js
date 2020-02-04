import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div>
      <h2>제목입니다.</h2>
      <Container>
        <Box>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Box>
        <Box>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

const Container = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0px auto;
  display: flex;

  ${customMedia.lessThan("smTablet")`
      flex-direction:column;
  `}
`;
const Box = styled.div`
  margin: 20px;
  width: 50%;
`;
