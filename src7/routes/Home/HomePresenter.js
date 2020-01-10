import React from "react";
import { GetTistoryAT } from "components/Popup";
import { tistoryAPI } from "api";

export default ({
  loading,
  popUp,
  handleAccessClick,
  AccessTokenTerm,
  handleSubmit,
  handleChange,
  blogInfo
}) => (
  <div>
    <h1>Home</h1>
    <div>{`${loading}`}</div>
    <button onClick={handleAccessClick}>Get Access Token</button>
    <div>
      {popUp && <GetTistoryAT url={tistoryAPI.getAccessURL()}></GetTistoryAT>}
    </div>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="input AC Token"
        value={AccessTokenTerm}
        onChange={handleChange}
      ></input>
    </form>

    {loading ? (
      <>
        <h1>블로그 엑세스 토큰 필요.!</h1>
      </>
    ) : (
      <>{blogInfo && <div>{`주소 : ${blogInfo.id}`} </div>}</>
    )}
  </div>
);
