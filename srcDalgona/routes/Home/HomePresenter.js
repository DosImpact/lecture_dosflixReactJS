import React from "react";
import Section from "../../components/Section";
import PosterThumb from "../../components/PosterThumb";
import Login from "../../components/Login";
const tmpData = [
  {
    title: "Three-line Item",
    content:
      "Мебельная компания осуществляет производство мебели на инимальной доли ручного труда",
    img: "https://icon.foundation/resources/image/og-img.png"
  },
  {
    title: "Three-line Item",
    content:
      "Мебельнизводство мебели на высококлассном оборудовании с применением минимальной доли ручного труда"
  },
  {
    title: "Three-line Item",
    content:
      " осуществляет производство мебели на высо оборудовании с применением минимальной доли ручного труда",
    img: "https://icon.foundation/resources/image/og-img.png"
  }
];
const tmpData2 = [
  {
    title: "정치자유게시판 ",
    content: "Мебельная ",
    img: "https://icon.foundation/resources/image/og-img.png"
  },
  {
    title: "유머/감동",
    content: "Мебельнизводство "
  },
  {
    title: "자기소개",
    content: " осуществляет ",
    img: "https://icon.foundation/resources/image/og-img.png"
  }
];
export default () => {
  return (
    <div>
      <Login></Login>
      <Section title="실시간 새글">
        {tmpData.map(e => (
          <PosterThumb title={e.title} content={e.content} img={e.img} />
        ))}
      </Section>
      <Section title="내 정보">
        {tmpData.map(e => (
          <PosterThumb title={e.title} />
        ))}
      </Section>
      <Section title="자유게시판">
        {tmpData2.map(e => (
          <PosterThumb title={e.title} content={e.content} isRow />
        ))}
      </Section>
    </div>
  );
};
