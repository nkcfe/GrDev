import React from "react";
import styled from "styled-components";
import NavSearch from "./navitem/NavSearch";
import NavNavigator from "./navitem/NavNavigator";
import PostBtn from "./navitem/PostBtn";
import ThemeToggleBtn from "./navitem/ThemeToggleBtn";
import NavUser from "./navitem/NavUser";

const Navbar = () => {
  return (
    <Base>
      <Wrapper>
        <LeftSideContainer>
          <Logo>GroovyDev</Logo>
          <NavSearch />
        </LeftSideContainer>
        <MiddleSideContainer>
          <NavNavigator />
        </MiddleSideContainer>
        <RightSideContainer>
          <ThemeToggleBtn />
          <PostBtn />
          <VerticlaLine />
          <NavUser />
        </RightSideContainer>
      </Wrapper>
    </Base>
  );
};

export default Navbar;
const Base = styled.div`
  position: sticky;
  top: 0;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  max-width: 1280px;
  height: 70px;

  padding: 0 15px;
`;

const LeftSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MiddleSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 180px;
`;
const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;

  font-family: "Josefin Sans", sans-serif;
`;

const VerticlaLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 20px;
  margin: 0 10px;
  border-right: 2px solid #d5d5df;
`;
