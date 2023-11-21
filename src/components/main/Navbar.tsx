import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface NavbarProps {
  items: string[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = (item: string) => {
    if (item === "Home") {
      return navigate("/");
    } else if (item === "Q&A") {
      return navigate("/qboard");
    } else if (item === "Contact") {
      return navigate("/contact");
    } else if (item === "Post") {
      return navigate("/post");
    } else if (item === "Logout") {
      // 로그아웃
    }
  };
  return (
    <StyledNav>
      <StyledUl>
        {items.map((item, index) => (
          <StyledLi key={index} onClick={() => handleClick(item)}>
            {item}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const StyledLi = styled.li`
  margin-right: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
