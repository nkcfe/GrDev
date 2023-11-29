import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";

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
  background: ${({ theme }) => theme.color.gradientBg};
  backdrop-filter: blur(5px);
  border-top: 0.5px solid ${({ theme }) => theme.color.border};
  border-bottom: 0.5px solid ${({ theme }) => theme.color.border};
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
  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${({ theme }) => theme.color.font};
        `
      : css`
          color: ${({ theme }) => theme.color.hover};
        `}

  &:hover {
    color: ${({ theme }) => theme.color.font};
  }
  cursor: pointer;
`;
