import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const PostCardSkeleton = () => {
  return (
    <Base>
      <Skeleton width={"40px"} height={"40px"} borderRadius={"100%"} />
      <Skeleton width={"500px"} height={"35px"} borderRadius={"15px"} />
    </Base>
  );
};

export default PostCardSkeleton;

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
