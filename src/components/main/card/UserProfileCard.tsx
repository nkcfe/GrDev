import React from "react";
import styled from "styled-components";

const UserProfileCard = () => {
  return (
    <Base>
      <UserInfoContainer>
        <UserProfileImgWrapper>
          <UserProfileImg />
        </UserProfileImgWrapper>
        <UserIntroWrapper>
          <UserName>Brandi</UserName>
          <UserIntroLine>프론트엔드 지망생</UserIntroLine>
        </UserIntroWrapper>
      </UserInfoContainer>
      <Footer>
        <ItemWrapper>
          <h1>387</h1>
          <span>posts</span>
        </ItemWrapper>
        <VerticlaLine />
        <ItemWrapper>
          <h1>53</h1>
          <span>follower</span>
        </ItemWrapper>
        <VerticlaLine />
        <ItemWrapper>
          <h1>138</h1>
          <span>following</span>
        </ItemWrapper>
      </Footer>
    </Base>
  );
};

export default UserProfileCard;

const Base = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const UserProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-image: url("https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8fDA%3D");
  background-size: 100%;
  background-position: center;
`;

const UserIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const UserName = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const UserIntroLine = styled.div`
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-family: "Josefin Sans", sans-serif;
    font-size: 26px;
    font-weight: bold;
  }
  span {
    font-family: "Josefin Sans", sans-serif;
    font-size: 13px;
    color: #868686;
  }
`;

const VerticlaLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 30px;
  margin: 0 10px;
  border-right: 1px solid #d5d5df;
`;
