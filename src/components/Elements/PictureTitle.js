import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 850px;
  height: 800px;
  padding: 20px;
  background-color: gray;
`;

const Bg = styled.div``;

const Title = styled.div``;

const PictureTitle = ({ title, picture }) => {
  return (
    <Box>
      <div>
        <title></title>
      </div>
    </Box>
  );
};

export default PictureTitle;
/**
 * 해당 박스에 사진 다 채우고
 * 제목 왼 위
 */
