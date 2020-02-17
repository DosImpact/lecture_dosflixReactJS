/**
 * 랜덤 컴포넌트 : 컴포넌트에 대한 메터 정보들을 가져오면 -> 해당 정보에 맞게 컴포넌트를 리턴해준다.
 */
import React from "react";
import {
  PictureTitle,
  PictureTitleA,
  PictureTitleB,
  PictureTitleC
} from "../components/Elements";

const Meta = {
  PictureTitle: {
    picture: 1,
    title: 1
  }
};

const getMetaData = ({ name }) => {
  switch (name) {
    case "PictureTitle":
      return Meta[PictureTitle];

    default:
      break;
  }
};

const getComponent = ({ data, Meta }) => {
  console.log(data);
  if (data == undefined) {
    return;
  }
  // const res = "PictureTitle"; // 결론적으로 해당 컴포넌트를 얻어옴.!
  const res = Math.floor(Math.random() * 4); // 0 1 2 3
  switch (res) {
    case 0:
      return <PictureTitle key={data.id} data={data} />;
    case 1:
      return <PictureTitleA key={data.id} data={data} />;
    case 2:
      return <PictureTitleB key={data.id} data={data} />;
    case 3:
      return <PictureTitleC key={data.id} data={data} />;
    default:
      break;
  }
};

export { getComponent };
