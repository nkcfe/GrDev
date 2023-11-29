import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectItemSkeleton = () => {
  return (
    <Base>
      <Type>
        <Skeleton width={"40px"} height={"20px"} borderRadius={"10px"} />
      </Type>
      <Title>
        <Skeleton width={"500px"} height={"30px"} borderRadius={"10px"} />
      </Title>
      <Summary>
        <Skeleton width={"450px"} height={"20px"} borderRadius={"10px"} />
        <Skeleton width={"450px"} height={"20px"} borderRadius={"10px"} />
        <Skeleton width={"450px"} height={"20px"} borderRadius={"10px"} />
      </Summary>
      <InfoContainer>
        <Purpose>
          <Skeleton width={"70px"} height={"20px"} borderRadius={"10px"} />
          <Skeleton width={"70px"} height={"20px"} borderRadius={"10px"} />
          <Skeleton width={"70px"} height={"20px"} borderRadius={"10px"} />
        </Purpose>
      </InfoContainer>
    </Base>
  );
};

export default ProjectItemSkeleton;

const Base = styled.div`
  margin: 0 auto;

  background: ${({ theme }) => theme.color.subBg};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 600px;
  min-height: 200px;

  padding: 20px;

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Title = styled.div`
  margin-top: 15px;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`;

const InfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
`;

const Purpose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
