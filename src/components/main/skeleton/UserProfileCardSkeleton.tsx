import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const UserProfileCardSkeleton = () => {
  return (
    <Base>
      <UserInfoContainer>
        <UserProfileImgWrapper>
          <Skeleton width={"45px"} height={"45px"} borderRadius={"100%"} />
        </UserProfileImgWrapper>
        <UserIntroWrapper>
          <Skeleton width={"60px"} />
          <Skeleton width={"80px"} />
        </UserIntroWrapper>
      </UserInfoContainer>
      <Footer>
        <ItemWrapper>
          <Skeleton width={"60px"} height={"20px"} />
          <Skeleton width={"30px"} height={"10px"} />
        </ItemWrapper>
        <VerticlaLine />
        <ItemWrapper>
          <Skeleton width={"60px"} />
          <Skeleton width={"30px"} height={"10px"} />
        </ItemWrapper>
        <VerticlaLine />
        <ItemWrapper>
          <Skeleton width={"60px"} />
          <Skeleton width={"30px"} height={"10px"} />
        </ItemWrapper>
      </Footer>
    </Base>
  );
};

export default UserProfileCardSkeleton;

const Base = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
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
`;

const UserIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
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
