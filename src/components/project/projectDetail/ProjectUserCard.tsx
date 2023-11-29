import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { TiPlus } from "react-icons/ti";
import { IoChatbubbleSharp } from "react-icons/io5";

const ProjectUserCard = () => {
  return (
    <Base>
      <UserProfileImg />
      <UserName>핌리코</UserName>
      <UserInfo>
        세상의 모든 지식을 필요한 사람에게 연결시키고 싶습니다.
      </UserInfo>
      <BtnWrapper>
        <Button>
          <TiPlus />
          팔로우
        </Button>
        <Button>
          <IoChatbubbleSharp />
          채팅하기
        </Button>
      </BtnWrapper>
    </Base>
  );
};

export default ProjectUserCard;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 400px;

  background: #f2f4f6;
  border-radius: 15px;
  margin-top: 30px;
`;

const UserProfileImg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  width: 160px;
  height: 160px;
`;

const UserName = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
`;

const UserInfo = styled.div`
  margin-top: 10px;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
