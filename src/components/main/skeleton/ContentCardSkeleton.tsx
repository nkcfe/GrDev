import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContentCardSkeleton = () => {
  return (
    <Base>
      <UserInfoContainer>
        <Skeleton width={"40px"} height={"40px"} borderRadius={"100%"} />

        <UserIntroWrapper>
          <Skeleton width={"80px"} height={"20px"} borderRadius={"15px"} />
          <Skeleton width={"120px"} height={"15px"} borderRadius={"15px"} />
        </UserIntroWrapper>
      </UserInfoContainer>

      <Title>
        <Skeleton width={"150px"} height={"30px"} borderRadius={"15px"} />
      </Title>
      <Body>
        <Skeleton width={"450px"} height={"20px"} borderRadius={"15px"} />
        <Skeleton width={"450px"} height={"20px"} borderRadius={"15px"} />
        <Skeleton width={"450px"} height={"20px"} borderRadius={"15px"} />
      </Body>

      <Footer>
        <CreationDate>
          <Skeleton width={"80px"} height={"20px"} borderRadius={"15px"} />{" "}
        </CreationDate>
        <ButtonWrapper>
          <Skeleton width={"40px"} height={"20px"} borderRadius={"15px"} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Skeleton width={"40px"} height={"20px"} borderRadius={"15px"} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Skeleton width={"40px"} height={"20px"} borderRadius={"15px"} />
        </ButtonWrapper>
      </Footer>
    </Base>
  );
};

export default ContentCardSkeleton;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 600px;
  height: 350px;

  background: #fff;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

const UserIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const CreationDate = styled.div`
  margin-right: auto;
`;

const Title = styled.div`
  margin-top: 30px;
  padding: 0 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  padding: 0 10px;

  max-height: 300px;
  width: 100%;
`;

const Footer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
