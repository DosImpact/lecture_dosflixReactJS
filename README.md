# 리액트 JS 맴버쉽 수업

## Tip: .env에서 NODE_PATH만 바꿔주면, 프로젝트 변경없이 연습이 가능하다.

# 1.3 Object Destructuring (7:36)

- {} 으로 객체 변수 가져오기 + 변수 이름 바꿔서 가져오기.

```js
const person = {
  info1: "info1",
  info2: "info2",
  info3: "info3",
  info4: {
    ininfo1: "ininfo1",
    ininfo2: "ininfo2"
  }
};

// const name = person.info1;
// const age = person.info2;

const {
  info1, //그대로 가져오기.
  info2: age, // 이름 바꿔서 가져오기.
  info4: { ininfo1: dinner, ininfo2: launch } // 클래스 안에 내용물 가져오기 + 이름 바꿔서 가져오기.
} = person;
```

# 1.4 Spread Operator (6:44)

- ...연산자. 리스트나, 오브젝트를 flatten하고 싶을때.사용.!

```js
//spread operator 01 - 리스트

const days = ["mon", "tus", "wed"];
const otherDays = ["thu", "fri", "sat"];
const allDays = [...days, ...otherDays];
console.log(allDays);

//spread operator 02 - object

const ab = {
  info1: "info1",
  info2: "info2"
};
const cd = {
  info3: "info3"
};
const two = { ...ab, ...cd };
console.log(two);
```

- 배열 메소드들 참고  
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

# 2.0 Setting Up the Project (4:33)

- .env파일 만든후 노드 경로 설정: 원래는 상대경로를 타고 왔다갔다 했음 -> 이제는 react덕에 env에서 지정한 src경로부터 쭉 내려감.

```js
NODE_PATH = src;
```

# 2.1 React Router Part One (9:43)

1. .env에서 src를 기본경로로 설정해서, 기본 import경로를 맞춰주기.

- import App from "components/App";

```js
미니 챌린지:

// 폴더정리 : components, Routes

// components에  App.js | Header.js | Router.js  / Routes에  Detail.js | Home.js | Search.js | TV.js

// .env의 힘으로 index에서 컴포넌트의 app를 연결 , app에서 해더컴포넌트, 라우터 컴포넌트를 뿌리자.

// router.js 를 맹글기.
    // 루트,tv,search
    // 스위치를 이용해서 하나의 경로로 무조건 가겠끔
    // Redirect 써서 from to 설정 | 이상한 경로들 다 Home으로 보내버려.
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>

// 헤더 만들어서, 각각 경로에 링크를 꽂고 , App에다 표시하기.
```

# 2.2 React Router part Two (9:52)

# 3.0 CSS in React part One (5:31)

1. NodeJS는 기본적으로 폴더의 index.js를 먼저 찾는다.

- 컴포넌트 파일에 헤더파일을 만들고, Hearder.js를 넣고 index.js에 헤더컴포넌트를 임포트 시켜,

2. CSS를 적용시키는 방법은 여러가지가 있다.

- 1. js컴포넌트와 함께 css를 하나하나 만들어서 같이 따라 다니게 하는 방법
- 2. Header.module.css를 받아서 js처럼 임포트해서 사용하는방법 -> 인스타그램과 facebook이 사용하는방법-> 클래스이름에 랜덤마이즈한 이름이 붙는다.
- example) css 모듈 사용 방법

```js
----------------------------------------------------------------------
//모듈을 만들고
Header.modules.css

.navList {
  display: flex;
}
.navList:hover {
  background-color: aqua;
}
----------------------------------------------------------------------
//모둘을 임포트하여
import React from "react";
import styles from "./Header.module.css";

export default () => (
  <header>
  //클래스이름에 적용시킨다.
    <ul className={styles.navList}>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
  //Header_navList__1nHqT 이렇게 재 사용이 가능하게 랜덤마이즈 해서 들어간다.
);
----------------------------------------------------------------------
```

# 3.1 CSS in React part Two (5:08)

# 3.2 CSS in React part Three (6:13)

- 3. 스타일드 컴포넌트를 이용하는 방법. | 클래스 이름을 외울 필요없다. raect J N 둘다 적용이 가능핟.

```js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
```

# 3.3 GlobalStyles and Header (9:00)

- 글로벌한 스타일 컴포넌트 만들어서 App.js에 넣어주기. | 스타일 컴포넌트 스타일 마무리 하기.

```
npm install styled-reset
```

```js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
```

```js
import React from "react";
import Router from "components/Router";
import GlobalStyles from "components/GlobalStyles";
function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
```

# 3.4 Location Aware Header (7:46)

- 스타일 컴포넌트에 인자를 전달하여, 참값이면, border-bottom을 투명이 아닌 색깔로 나타내기.

```js

  <Item current={pathname === "/"}>
------------------------------------------------------------------------------------------
  const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
```

- withRouter from react-router-dom 은 다른 컴포넌트를 감싸는 컴포넌트이다. -> 감싸진 모든 컴포넌트에서 하나의 props를 사용할수 있음! ( 클래스 컴포넌트로 안만들고?? 다른구조인데..)

```js
import { Link, withRouter } from "react-router-dom";

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
```

# 4.0 Introduction to The Movie DB API (3:27)

- The Movie DB라는 무료 api 서비스를 이용할 거임.
  [https://developers.themoviedb.org/3/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)

```
API Key (v3 auth)
59caaaf6db048b723bf9adf4f0380be1
Example API Request
https://api.themoviedb.org/3/movie/550?api_key=59caaaf6db048b723bf9adf4f0380be1
API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNhYWFmNmRiMDQ4YjcyM2JmOWFkZjRmMDM4MGJlMSIsInN1YiI6IjVlMGRlNmRhOTk3NGVlMDAxN2E1ZTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZotukIhqCWdkwL5CqiT5i88A7UfcY-GVpBPxoFesUTE

```

# 4.1 Sexy Networking with Axios Instances (8:20)

- npm install axios
- axios를 사용하여 인스턴스를 만들고, 기본 url과 파라메터들을 넣습니다.
- 참고) /로 시작하는 url은 절대경로로 url이 초기화되구, tv/popular는 상대경로로 baseurl에 덧붙여준다.

```js
import axios from "axios";

const TvPopularParams = {
  api_key: "59caaaf6db048b723bf9adf4f0380be1",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const getMovie = async () =>
  await api.get("tv/popular", { params: TvPopularParams });
getMovie();

export default api;
```

- 그냥 index.js에 이렇게 넣기만 하면 됨.!

```js
import "./api";
```

# 4.2 API Verbs part One (5:09)

- tv api 와 영화 api를 둘로 나누고, 가저올 준비.

```js
import axios from "axios";

const params = {
  api_key: "59caaaf6db048b723bf9adf4f0380be1",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing", { params }),
  upcoming: () => api.get("movie/upcoming", { params }),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: { ...params, append_to_response: "videos" }
    }),
  search: term =>
    api.get("search/movie", {
      params: { ...params, query: encodeURIComponent(term) }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", { params }),
  popular: () => api.get("tv/popular", { params }),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: { ...params, append_to_response: "videos" }
    }),
  search: term =>
    api.get("search/tv", {
      params: { ...params, query: encodeURIComponent(term) }
    })
};
```

# 4.3 API Verbs part Two (9:21)

pass

# 5.0 Container Presenter Pattern part One (7:47)

- 리엑트 컴포넌트 코딩 패턴: 컨테이너 프리젠터 패턴 | 컨테이너 data state api (데이터들)=> 프리젠터:보여줌.(스타일)
- 모든 라우터스 안의 컴포넌트들을 , 각자의 폴더명 안에 Container, Presenter를 가진다.

# 5.1 Container Presenter Pattern part Two (9:33)

- 디자인 패턴이라는데, 익혀야지. ->
- ? index.js에 기본적으로 export하는것이 적용이 되나본데...
- Detail,Home,Search,TV 각각 컨테이너와 프리젠터 만들고 index연결시켜주기.

```js
------------------------------------------------index;
import HomeContainer from "./HomeContainer";

export default HomeContainer;
------------------------------------------------container;
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
------------------------------------------------presenter;
export default () => "Detail";
```

# 5.2 Home Container (11:33)

- 홈컨테이너 완성 | 영화 api에서 가져온 데이터들 전부 state에 담고, 완료되면 loading 종료시키기, error뜨면 처리해주고.

```js
import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find movies information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    console.log(this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
```

# 5.3 TV Container (6:26)

- TV도 마찬가지로 영화와 똑같은 로직을 가진다.

# 5.4 Search Container (10:45)

- 컴포넌트로 인자를 넘길때, 함수이름을 넘길수도 있어. | search컴포넌트 참고.

# 5.5 Detail Container part One (8:17)

- 데테일 컴포넌트에서 this.prop에서 url에 있는 변수인 id가 들어 있음!! , id가 아니라면 홈으로 푸쉬

```js
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }
```

# 5.6 Detail Container part Two (13:21)

- 디테일 컨테이너 완성 | url을 통해 id변수, url에 movie가 포함되있는지 받는다 | id를 파싱해서 api를 호출해서 값을 프리젠터에 넘긴다. | 애러시 홈으로 푸쉬

```js
import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  //클래스 생성자 | props에서 url에 movie가 포함되어 있으면 state의 isMoive 참으로 해주기.
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }
  //props에서 id랑 push 얻어와서 id가 넘버면 api로 디테일 사항 가져오고, 아니라면 홈으로 푸쉬 해주기.
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    console.log(this.state);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
```

# 5.7 Destructuring assignment with let (2:33)

- 위아래가 같은 로직이다.

```js
let result = null;
try {
  if (isMovie) {
    const request = await moviesApi.movieDetail(parsedId);
    result = request.data;
  } else {
    ({ data: result } = await tvApi.showDetail(parsedId));
  }
}
```

# 6.0 Presenter Structure (7:04)

- 각각의 프리젠터를 만들고, 프롭타입을 추가한다.

# 6.1 HomePresenter and Section Components (10:56)

- Section 컴포넌트를 만들었다. 타이틀과 child 를 받아 그리드로 표현해 준다. | section 컴포넌트에 차일드는 모든 하위 컴포넌트이고, 컴포넌트 호출시 하위에 그냥 적기만 하면됨

```js
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
```

```js
<Container>
  {nowPlaying && nowPlaying.length > 0 && (
    <Section title="Now Playing">
      {nowPlaying.map(movie => movie.title)}
    </Section>
  )}
  {upcoming && upcoming.length > 0 && (
    <Section title="Upcoming Movies">
      {upcoming.map(movie => movie.title)}
    </Section>
  )}
  {popular && popular.length > 0 && (
    <Section title="Popular Movies">
      {popular.map(movie => movie.title)}
    </Section>
  )}
</Container>
```

# 6.2 TVPresenter and Loader Components (9:07)

# 6.3 SearchPresenter Component (12:32)

- 검색 컴포넌트를 만들었다. form과 input 과 리액트 컴포넌트관의 상호작용하는방법.

# 6.4 Message Component (11:07)

- 검색 실패시, 애러 메시지, 또는 검색했는데 아무것도 안나와도 메시지 출력..(왜 안되징)

# 6.5 Poster Component part One (8:55)

# 6.6 Rendering Poster Component (8:10)

# 6.7 Poster Component part Two (15:34)

# 6.8 Detail Container part One (13:04)

# 6.9 Detail Container part Two (15:09)

# 6.10 React Helmet (7:54)

# 6.11 Code Challenges (8:22)

```

```
