import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostCard = () => {
  const navigate = useNavigate();
  return (
    <Base>
      <UserProfileImgWrapper>
        <UserProfileImg />
      </UserProfileImgWrapper>
      <PostContainer onClick={() => navigate("/post")}>
        <span>무엇이든 공유해보세요!</span>
      </PostContainer>
    </Base>
  );
};

export default PostCard;

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 600px;
  height: 60px;

  background: #fff;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
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

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 35px;
  border-radius: 15px;
  background: #f8f8f9;
  padding-left: 25px;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: #8e8e8e;
  }
`;
