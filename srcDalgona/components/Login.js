import React from "react";
import styled from "styled-components";

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 12px 0px;
  width: 100%;
  .login__logo {
    width: 120px;
    height: 119px;
    background-image: url(${props => props.theme.tmpImage});
    background-position: center;
    background-size: cover;
  }
  .login__title {
    font-size: 15px;
    margin: 12px 0px;
  }
  .login__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input,
    button {
      width: 245px;
      height: 48px;
      margin-top: 12px;
    }
    button {
      ${props => props.theme.puplebox}
    }
  }
  .login__options {
    width: 245px;
    font-size: 15px;
    margin-top: 12px;
    text-align: center;
    .option__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 12px;
    }
    .singup {
      justify-content: center;
    }
  }
  .login__start {
    width: 245px;
    height: 48px;
    margin-top: 12px;
    ${props => props.theme.puplebox}
  }
`;

export default () => (
  <Login>
    <div className="login__logo"></div>
    <div className="login__title">달고나</div>
    <form className="login__form">
      <input placeholder="아이디"></input>
      <input placeholder="비빌번호"></input>
      <button>로그인</button>
    </form>
    <div className="login__options">
      <div className="option__item">
        <span>로그인 유지</span>
        <span>아이디/비밀번호 찾기</span>
      </div>
      <div className="option__item singup">
        <span>
          이메일로 <strong>회원가입</strong>하기
        </span>
      </div>
    </div>
    <div>OR</div>
    <div className="login__start">구글로 시작</div>
    <div className="login__start">페이스북 시작</div>
    <div className="login__start">카카오톡 시작</div>
  </Login>
);
