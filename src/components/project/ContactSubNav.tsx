import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ContactSubNav = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const navList = ["라운지", "프로젝트", "멤버"];
  const navigate = useNavigate();

  const onSwitchPage = (page: string) => {
    setSelectedNav(page);
    page === "라운지"
      ? navigate("/contact")
      : page === "프로젝트"
      ? navigate("/contact/project")
      : navigate("/contact/member");
  };

  return (
    <Base>
      <Wrapper>
        {navList.map((item) => (
          <Item
            isSelected={selectedNav === item}
            key={item}
            onClick={() => onSwitchPage(item)}
          >
            {item}
          </Item>
        ))}
      </Wrapper>
    </Base>
  );
};

export default ContactSubNav;

const Base = styled.div`
  position: sticky;
  top: 60px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-top: 0.5px solid #dfdfdf;
  border-bottom: 0.5px solid #dfdfdf;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin-left: auto;
  margin-right: auto;
  max-height: 1024px;
  height: 50px;
  padding: 0 15px;
`;

const Item = styled.div<{ isSelected: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ isSelected }) => (isSelected ? "black" : "#abb6c7")};
  &:hover {
    color: black;
  }
  cursor: pointer;
`;
