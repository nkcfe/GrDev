import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const NavNavigator = () => {
  const [selectedSpace, setSelectedSpace] = useState("home");
  const navigate = useNavigate();

  const onChangeSelectedSpace = (name: string) => {
    setSelectedSpace(name);
    navigate(
      name === "home" ? "/" : name === "qBoard" ? "/qBoard" : "/contact"
    );
    console.log(selectedSpace);
  };

  return (
    <Base>
      <Wrapper
        onClick={() => onChangeSelectedSpace("home")}
        isSelected={selectedSpace === "home"}
      >
        메인페이지
      </Wrapper>
      <Wrapper
        onClick={() => onChangeSelectedSpace("qBoard")}
        isSelected={selectedSpace === "qBoard"}
      >
        질문게시판
      </Wrapper>
      <Wrapper
        onClick={() => onChangeSelectedSpace("teamMate")}
        isSelected={selectedSpace === "teamMate"}
      >
        프로젝트 팀원
      </Wrapper>
    </Base>
  );
};

export default NavNavigator;

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 350px;
  height: 50px;
`;

const Wrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: bold;

  padding: 5px 10px;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${({ theme }) => theme.color.font};
          border-bottom: 2px solid ${({ theme }) => theme.color.font};
        `
      : css`
          color: ${({ theme }) => theme.color.subFont};
          border-bottom: 2px solid transparent;
        `}

  &:hover {
    color: ${({ theme }) => theme.color.font};
    border-bottom: 2px solid ${({ theme }) => theme.color.font};
  }

  cursor: pointer;
`;
