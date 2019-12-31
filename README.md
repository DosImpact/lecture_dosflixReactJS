# 리액트 JS 맴버쉽 수업

# 1 Fundamentals

pass

# 1.1 Arrow Functions (7:41)

- 디폴트 매개 변수 가능!
- 화살표 함수 용법

# 1.2 Template Literals (2:14)

pass

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
  info1: name,
  info2: age,
  info3: food,
  info4: { ininfo1: dinner, ininfo2: launch }
} = person;
```

# 1.4 Spread Operator (6:44)

- 리스트나, 오브젝트를 flatten하고 싶을때.사용.!

```js
//spread operator 01

const days = ["mon", "tus", "wed"];
const otherDays = ["thu", "fri", "sat"];
const allDays = [...days, ...otherDays];
console.log(allDays);

//spread operator 02

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

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

# 2.0 Setting Up the Project (4:33)

- .env파일 만든후 노드 경로 설정

```js
NODE_PATH = src;
```

# 2.1 React Router Part One (9:43)

1. .env에서 src를 기본경로로 설정해서, 기본 import경로를 맞추주기.

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

- js컴포넌트와 함께 css를 하나하나 만들어서 같이 따라 다니게 하는 방법
- Header.module.css를 받아서 js처럼 임포트해서 사용하는방법 -> 인스타그램과 facebook이 사용하는방법-> 클래스이름에 랜덤마이즈한 이름이 붙는다.
- example) css 모듈 사용 방법

```
//모듈을 만들고
Header.modules.css

.navList {
  display: flex;
}
.navList:hover {
  background-color: aqua;
}

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


```

# 3.1 CSS in React part Two (5:08)

# 3.2 CSS in React part Three (6:13)

# 3.3 GlobalStyles and Header (9:00)

# 3.4 Location Aware Header (7:46)
