import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { LuBadgePlus } from "react-icons/lu";

const UserIntroCard = () => {
  return (
    // TODO 유저 연결
    <UserInfoContainer>
      <UserProfileImgWrapper>
        <UserProfileImg />
      </UserProfileImgWrapper>
      <UserIntroWrapper>
        <UserName>작성자 이름</UserName>
        <UserInfo>프론트엔드 지망생</UserInfo>
        <UserOneLineIntro>
          <FaQuoteLeft />
          &nbsp; 안녕하세요 남궁철입니다. &nbsp;
          <FaQuoteRight />
        </UserOneLineIntro>
      </UserIntroWrapper>
      <FollowBtnWrapper>
        <LuBadgePlus />
        <span>follow</span>
      </FollowBtnWrapper>
    </UserInfoContainer>
  );
};

export default UserIntroCard;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 30px;
  width: 600px;
  height: 200px;
  padding: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  cursor: pointer;
  
`;

const UserProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #fff;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserProfileImg = styled.div`
  width: 60px;
  height: 60px;
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

const UserInfo = styled.div``;

const UserOneLineIntro = styled.div``;

const FollowBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
  background: #f34c43;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  span {
    font-family: "Josefin Sans", sans-serif;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  cursor: pointer;
`;
