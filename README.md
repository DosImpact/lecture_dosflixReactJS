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

# 2.2 React Router part Two (9:52)
