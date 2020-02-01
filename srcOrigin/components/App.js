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

/**논리장
 *     
 *  "axios": "^0.19.0",
    "prop-types": "^15.7.2",
    "react-helmet": "^5.2.1",
    "react-router-dom": "^5.1.2",
    "styled-components": "^4.4.1",
    "styled-reset": "^4.0.9"

 * App에서 모든 컴포넌트가 시작합니다.
 * Router컴포넌트와 글로벌 스타일 컴포넌트로 css초기화를 합니다.
 */
