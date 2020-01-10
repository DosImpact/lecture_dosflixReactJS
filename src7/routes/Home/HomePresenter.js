import React from "react";
import { GetTistoryAT } from "components/Popup";
import { tistoryAPI } from "api";
import styled from "styled-components";

const Container = styled.div``;
const Profile = styled.div``;
const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`;
const Content = styled.div``;
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
    <h1>Tistory Blog API Access-Token</h1>

    {loading ? (
      <>
        <h1>블로그 엑세스 토큰 필요.!</h1>
        <button onClick={handleAccessClick}>Get Access Token</button>
        <div>
          {popUp && (
            <GetTistoryAT url={tistoryAPI.getAccessURL()}></GetTistoryAT>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="input AC Token"
            value={AccessTokenTerm}
            onChange={handleChange}
          ></input>
        </form>
      </>
    ) : (
      <>
        {blogInfo && (
          <Container>
            <Profile>
              <div> ID : {blogInfo.id}</div>
              <div> USER - ID : {blogInfo.userId}</div>
              <div> BLOG - ID : {blogInfo.blogs[0].blogId}</div>
            </Profile>
            <ProfileImage
              img={blogInfo.blogs[0].profileImageUrl}
            ></ProfileImage>
            <Content>
              <div> {blogInfo.blogs[0].name}</div>
              <div> {blogInfo.blogs[0].url}</div>
              <div> {blogInfo.blogs[0].nickname}</div>
              <div> {blogInfo.blogs[0].title}</div>
              <div> {blogInfo.blogs[0].description}</div>
              <div>
                <div>통계정보</div>
                <ul>
                  <li> 포스터 : {blogInfo.blogs[0].statistics.post} </li>
                </ul>
                <ul>
                  <li> 총 댓글 : {blogInfo.blogs[0].statistics.comment} </li>
                </ul>
                <ul>
                  <li> 트랙백 : {blogInfo.blogs[0].statistics.trackback} </li>
                </ul>
                <ul>
                  <li> 게스트북 : {blogInfo.blogs[0].statistics.guestbook} </li>
                </ul>
              </div>
            </Content>
          </Container>
        )}
      </>
    )}
  </div>
);
