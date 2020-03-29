import React from "react";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends React.Component {
  Temp_Data = [
    {
      data: {
        id: 1,
        title: "이노크아든X라끌라세 클래식 무선포트",
        picture:
          "https://www.athome.com/on/demandware.static/-/Sites/default/dw5412b68b/2019/departments/furniture/LivingRoom-Replacement.jpg"
      },
      Meta: {
        title: 1,
        picture: 1
      }
    },
    {
      data: {
        id: 2,
        title: "곡선의 아름다움이 끝이 아닌 ",
        picture:
          "https://www.alturafurniture.com/assets/img/home/Altura-Furniture-Kemizo-1-dOGb.jpg"
      },
      Meta: {
        title: 1,
        picture: 1
      }
    },
    {
      data: {
        id: 3,
        title: "정교한 물 조절 가능",
        picture:
          "https://proxy.smartstore.naver.com/img/YnV5Nzk0MnByby5nb2RvaG9zdGluZy5jb20vdGVhbWFrZXIvaW5vcS9pYS1rMi9pYS1rMl8wNS5qcGc=?token=fabb0162340ae6e7f60f40544102fb5e"
      },
      Meta: {
        title: 1,
        picture: 1
      }
    },
    {
      data: {
        id: 4,
        title: "컵라면(소) 270ml x 4",
        picture:
          "https://proxy.smartstore.naver.com/img/YnV5Nzk0MnByby5nb2RvaG9zdGluZy5jb20vdGVhbWFrZXIvaW5vcS9pYS1rMi9pYS1rMl8wNi5qcGc=?token=0880624a140584f03a2d0f01652db629"
      },
      Meta: {
        title: 1,
        picture: 1
      }
    }
  ];

  render() {
    return <HomePresenter Temp_Data={this.Temp_Data} />;
  }
}
