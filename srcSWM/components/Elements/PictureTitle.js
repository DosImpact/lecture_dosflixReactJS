import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 850px;
  height: 800px;
  padding: 20px;
  position: relative;
`;

const Bg = styled.div`
  width: 850px;
  height: 800px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
`;

const Title = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100%;
  font-size: 25px;
  font-weight: 300;
  opacity: 0.6;
`;

class PictureTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { picture, title } = this.props.data;
    return (
      <Box>
        <span>기본형 basic</span>
        {picture ? (
          <Bg img={picture}>{title && <Title>{title}</Title>}</Bg>
        ) : null}
      </Box>
    );
  }
}

export default PictureTitle;
/**
 * 해당 박스에 사진 다 채우고
 * 제목 왼 위
 */
