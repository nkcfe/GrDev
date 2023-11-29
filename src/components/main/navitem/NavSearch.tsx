import React from "react";
import styled from "styled-components";
import { LuSearch } from "react-icons/lu";

const NavSearch = () => {
  return (
    <Base>
      <IconWrapper>
        <LuSearch />
      </IconWrapper>
      <SearchInput placeholder="무엇을 찾고 계신가요?" />
    </Base>
  );
};

export default NavSearch;

const Base = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;

  position: absolute;
  top: -10px;
  left: 110px;

  width: 200px;

  background: ${({ theme }) => theme.color.bg};

  border-radius: 15px;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 10px 20px;
  margin-left: 30px;

  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    width: 620px;
    transition: width 0.5s ease;
  }

  z-index: 2;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 25px;
  background: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.font};
  &::placeholder {
    color: ${({ theme }) => theme.color.placeHorderFont};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  left: 20px;
  color: ${({ theme }) => theme.color.font};
`;
