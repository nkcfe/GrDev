import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { LuChevronDown } from "react-icons/lu";
import { TbSettingsFilled } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const [isDropDownOn, setIsDropDonwOn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    if (isDropDownOn === false) {
      setIsDropDonwOn(true);
    }
  };

  const closeDropdown = () => {
    setIsDropDonwOn(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const logOut = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    await signOut(auth);
    console.log("로그아웃에 성공");
  };

  return (
    <Base onClick={openDropdown}>
      <UserProfileImgWrapper>
        <UserProfileImg />
      </UserProfileImgWrapper>
      <UserName>Brandi</UserName>
      <DropDownBtn>
        <LuChevronDown />
      </DropDownBtn>
      {isDropDownOn && (
        <DropdownContainer ref={dropdownRef}>
          <DropdownItem onClick={() => navigate("/mypage")}>
            <BtnWrapper>
              <TbSettingsFilled />
            </BtnWrapper>
            <span>마이페이지</span>
          </DropdownItem>
          <DropdownItem onClick={(e) => logOut(e)}>
            <BtnWrapper>
              <TbLogout />
            </BtnWrapper>
            <span>로그아웃</span>
          </DropdownItem>
        </DropdownContainer>
      )}
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

  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) ;

  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 5px;

  background: #fff;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
`;

const DropdownItem = styled.div`
  display: flex;
  justify-content: start;
  align-content: center;
  gap: 5px;
  font-size: 14px;
  margin: 0 5px;
  padding: 10px;
  border-radius: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;
  &:hover {
    background-color: #f8f8f8;
  }
  &:first-child {
    margin-top: 5px;
  }
  &:last-child {
    margin-bottom: 5px;
  }
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
`;
