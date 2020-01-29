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
  grid-template-rows: 400px;
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
`;
const FlexItem = styled.div`
  margin: 15px 3px;
  & div:nth-child(2) {
    font-weight: 700;
    font-size: 24px;
    margin: 15px 0px;
  }
  & div:nth-child(3) {
    font-weight: 300;
    opacity: 0.6;
  }
`;

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
              src="https://previews.123rf.com/images/xeniartwork/xeniartwork1812/xeniartwork181200022/127260005-trendy-winter-poster-with-hand-drawn-shapes-and-textures-in-soft-pastel-colors-unique-graphic-design.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://ae01.alicdn.com/kf/HLB1_5RIbizxK1RjSspjq6AS.pXaX/Pastel-Aesthetics-Cute-pink-blue-cartoon-Home-Kids-Baby-living-Room-Bedroom-Decor-Print-Poster-Picture.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipiorem ipsum, dolor sit
              amet consectetur adipiorem ipsum, dolor sit amet consectetur
              adipiorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://i.pinimg.com/originals/17/c0/61/17c0610adbe768e373d033abe4217c3c.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>
              Lorem ipsum, dolor sit amet consecteturdolor sit amet
              consecteturdolor sit amet consecteturdolor sit amet consectetur
              adipisicing elit.
            </div>
          </FlexItem>
        </GridItem>
        <GridItem>
          <FlexItem>
            <img
              src="https://c8.alamy.com/comp/TDGC4J/organic-shapes-in-pastel-colors-with-sample-text-layout-modern-and-stylish-brochure-poster-flyer-magazine-or-book-cover-design-TDGC4J.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://ctl.s6img.com/society6/img/ANzSyz38VB22Ijr5ikz7K4z1cO4/w_700/posters/18x24/front/~artwork,fw_2718,fh_3618,fx_-450,iw_3618,ih_3618/s6-original-art-uploads/society6/uploads/misc/581756fee74e461780e0ca04fdeffe0b/~~/pastel-heaven960169-posters.jpg"
              alt="example"
            />
            <div>Daily language</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </FlexItem>
          <FlexItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBuP2E3kASq_IArbyYo2NXl_pwAJGjo0oLQu3-sFnEB0qT_RVZ"
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
