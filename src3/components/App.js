import React from "react";
import Food from "components/Food";
import Message from "components/Message";
import EU from "components/EU";
import Movie from "components/Movie";

const movies = [
  {
    id: 1,
    title: "극한 직업",
    img:
      "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/i0Y/image/RxVBRsj8Jk0kasCl4c14mGUu2VY.jpg"
  },
  {
    id: 2,
    title: "겨울 왕국 2",
    img:
      "http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg"
  }
];
function App() {
  return (
    <div>
      <span>HI</span>
      <Message text="can`t found" color="#ff8364"></Message>
      {movies.map(movie => (
        <Movie key={movie.id} name={movie.title} img={movie.img}></Movie>
      ))}
    </div>
  );
}
export default App;
