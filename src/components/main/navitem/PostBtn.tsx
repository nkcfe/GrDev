import React from "react";
import styled from "styled-components";

import { TbEditCircle } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const PostBtn = () => {
  const navigate = useNavigate();
  return (
    <Base onClick={() => navigate("/post")}>
      <IconWrapper>
        <TbEditCircle />
      </IconWrapper>

      <Text>글 작성</Text>
    </Base>
  );
};

export default PostBtn;

const Base = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  padding: 5px 10px;
  border-radius: 15px;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  border: 1px solid ${({ theme }) => theme.color.border};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.font};

  color: ${({ theme }) => theme.color.bg};
  font-size: 18px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
`;
