import React from "react";
import styled from "styled-components";

const MemberItem = () => {
  return (
    <Base>
      <Header>
        <UserProfileImg />
        <UserInfoWrapper>
          <UserName>Choi</UserName>
          <UserInfo>프론트엔드 개발자</UserInfo>
        </UserInfoWrapper>
      </Header>
      <UserIntro>
        재미, 포트폴리오, 수익 창출 모두 좋습니다. <br />
        사이드 프로젝트를 경헙해보고 싶습니다.
        <br /> 온라인 선호합니다!
      </UserIntro>
    </Base>
  );
};

export default MemberItem;

const Base = styled.div`
  margin: 0 auto;
  padding: 20px;

  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 600px;
  min-height: 200px;
  cursor: pointer;
  border-bottom: 1px solid #e1e8f0;
  &:hover {
    background: #f8fafc;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

const UserProfileImg = styled.div`
  background-image: url("https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #cbd5e1;
  border-radius: 100%;
  width: 62px;
  height: 62px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UserInfo = styled.div`
  font-size: 14px;
  color: #cbd5e1;
`;

const UserIntro = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: #0f1829;
`;
