import React from "react";
import styled from "styled-components";

const SmallImage = styled.div`
  width: 60px;
  height: 40px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`;

const PosterThumb = styled.div`
  width: 360px;
  margin-bottom: 10px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  justify-items: center;
  align-items: center;
  .PosterThumb__info {
    display: flex;
    justify-content: space-around;
    flex-direction: ${props => (props.isRow ? `row` : `column`)};
    grid-column: span 4;
    .PosterThumb__title {
      font-weight: 600;
    }
    .PosterThumb__content {
      opacity: 0.6;
    }
  }
`;

export default ({ title, content, img, isRow }) => (
  <PosterThumb isRow={isRow}>
    <div className="PosterThumb__info">
      <div className="PosterThumb__title">{title}</div>
      <div className="PosterThumb__content">{content}</div>
    </div>
    {img && <SmallImage img={img}></SmallImage>}
  </PosterThumb>
);
