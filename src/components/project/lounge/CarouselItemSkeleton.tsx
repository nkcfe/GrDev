import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarouselItemSkeleton = () => {
  return (
    <Base>
      <Type>
        <Skeleton width={"40px"} height={"10px"} borderRadius={"10px"} />
      </Type>
      <Title>
        <Skeleton width={"400px"} height={"20px"} borderRadius={"10px"} />
      </Title>
      <Summary>
        <Skeleton width={"300px"} height={"15px"} borderRadius={"10px"} />
        <Skeleton width={"300px"} height={"15px"} borderRadius={"10px"} />
        <Skeleton width={"300px"} height={"15px"} borderRadius={"10px"} />
      </Summary>
      <InfoContainer>
        <Info>
          <Skeleton width={"50px"} height={"20px"} borderRadius={"10px"} />
        </Info>
        <Info>
          <Skeleton width={"50px"} height={"20px"} borderRadius={"10px"} />
        </Info>
        <Info>
          <Skeleton width={"50px"} height={"20px"} borderRadius={"10px"} />
        </Info>
      </InfoContainer>
    </Base>
  );
};

export default CarouselItemSkeleton;

const Base = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 500px;
  height: 300px;
  padding: 15px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  width: 90%;
  height: 25px;
`;

const Summary = styled.div`
  margin-top: 25px;
  font-size: 15px;
  width: 90%;
  height: 70px; /* 3줄의 높이를 기준으로 조절합니다 */
`;

const InfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
`;
