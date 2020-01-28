import React from "react";
import styled from "styled-components";

const gridItems = [
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXKRB2zQdPZcnoJHNObHaa0bFWZe2rRf90JfmINe0kwaWcj0HQQ&s",
    title: ""
  },
  {
    img:
      "data:image/png;base64,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",
    title: ""
  },
  {
    img:
      "https://image.freepik.com/free-vector/gold-r-symbol-logo-template-vector_9955-263.jpg",
    title: ""
  },
  {
    img: "https://www.1buy3.com/uploads/f9b474b7e18c4289cf8489313afbb1d6.jpg",
    title: ""
  },
  {
    img:
      "https://image.freepik.com/free-vector/elegant-gold-logo-with-letter-r_1057-2240.jpg",
    title: ""
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxObtYzxiBOLnlwrB0JvSvUdyHFUMAsRHp3lVS9wWj4ibWokYj&s",
    title: ""
  },
  {
    img:
      "https://d3ui957tjb5bqd.cloudfront.net/uploads/2017/01/Swan-by-Yuri-Kartashev-560x420.jpg",
    title: ""
  },
  {
    img:
      "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
    title: ""
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_7xdnnfuJIAxiank8bvht8uXDse9JCT2qliD9tt8r258v7q0&s",
    title: ""
  },
  {
    img:
      "https://img.freepik.com/free-vector/golden-ornamental-logo-brand_23-2148298793.jpg?size=338&ext=jpg",
    title: ""
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTKKMUMtgUboQyQIkzVGVvNhyuYXJLKBmeiu2cQxRgVFB9cRrvw&s",
    title: ""
  },
  {
    img:
      "https://us.123rf.com/450wm/paykvector/paykvector1802/paykvector180200062/94902650-vintage-golden-logo-template-vector-logotype-element-retro-label-badge.jpg?ver=6",
    title: ""
  }
];

const GridElement = ({ img, title }) => (
  <GirdItem img={img} className="GirdItem">
    <div>{title}</div>
  </GirdItem>
);

const Header = styled.div`
  font-size: 55px;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px 0px;
  font-weight: 300;
  border-bottom: 1px solid #77a1d3;
`;
const GirdLayout = styled.div`
  padding: 20px 50px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-auto-rows: 150px;
  &:hover .GirdItem {
    opacity: 0.5;
  }
  & .GirdItem:hover {
    opacity: 1;
  }
`;
const GirdItem = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeact;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
`;

const HomePresenter = () => (
  <>
    <Header> GRIDY Icons</Header>
    <GirdLayout>
      {gridItems.map(e => (
        <GridElement img={e.img} title={e.title} />
      ))}
    </GirdLayout>
  </>
);

export default HomePresenter;
