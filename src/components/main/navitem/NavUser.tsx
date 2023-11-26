import React from "react";
import styled from "styled-components";
import { LuChevronDown } from "react-icons/lu";

const NavUser = () => {
  return (
    <Base>
      <UserProfileImgWrapper>
        <UserProfileImg />
      </UserProfileImgWrapper>
      <UserName>Brandi</UserName>
      <DropDownBtn>
        <LuChevronDown />
      </DropDownBtn>
    </Base>
  );
};

export default NavUser;

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

const UserName = styled.div`
  margin-top: 6px;
  color: #9094b8;
  font-family: "Josefin Sans", sans-serif;
`;

const DropDownBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  color: #9094b8;
`;

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  padding: 5px;

  cursor: pointer;
  &:hover ${UserName} {
    color: black;
  }
  &:hover ${DropDownBtn} {
    color: black;
  }

  &:hover ${UserProfileImg} {
    background-size: 130%;
  }
`;
