import React from "react";
import styled from "styled-components";
import { FaRegMehBlank } from "react-icons/fa";

const CommentBlank = () => {
  return (
    <Base>
      <FaRegMehBlank />
      <span>댓글을 달아 작성자님과 소통해보세요!</span>
    </Base>
  );
};

export default CommentBlank;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 85px;

  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.color.subFont};
  }

  span {
    font-weight: bold;
    font-size: 15px;
    color: ${({ theme }) => theme.color.subFont};
  }
`;
