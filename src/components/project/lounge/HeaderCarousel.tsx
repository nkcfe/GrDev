import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const banners = [
  {
    text1: "오픈된 프로필을 보고",
    text2: "믿음직한 팀원을 찾아보세요.",
    image:
      "https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e30ba8983564552c60dc7_selfie.svg",
  },
  {
    text1: "모집글을 올리고",
    text2: "다른 팀원들과 연락해보세요.",
    image:
      "https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d9d126de6b3b43d496aea9d_laying.svg",
  },
  {
    text1: "나에게 맞는 프로젝트나 ",
    text2: "스터디 모임을 찾아보세요.",
    image:
      "https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e30c8aa3dfeb336a56762_reading.svg",
  },
  {
    text1: "라운지에 멤버로 등록하고",
    text2: "참여 제안을 받아보세요.",
    image:
      "https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5da4a24996a90ce569796125_dog-jump.svg",
  },
];

const HeaderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleNext = () =>
    setActiveIndex((activeIndex) => (activeIndex + 1) % banners.length);
  const handlePrev = () =>
    setActiveIndex(
      (activeIndex) => (activeIndex - 1 + banners.length) % banners.length
    );
  const handleGoTo = (index: number) => setActiveIndex(index);

  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isFocused) {
      intervalId = setInterval(handleNext, 4000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);
  return (
    <Base onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Container>
        {banners.length && (
          <ArrowButton pos="left" onClick={handlePrev}>
            <LuChevronLeft />
          </ArrowButton>
        )}
        <CarouselList>
          {banners.map((banner, index) => (
            <CarouselListItem activeIndex={activeIndex} key={banner.text1}>
              <div>
                <span>{banner.text1}</span>
                <span>{banner.text2}</span>
              </div>
              <img src={banner.image} alt="" />
            </CarouselListItem>
          ))}
        </CarouselList>
        {banners.length && (
          <ArrowButton pos="right" onClick={handleNext}>
            <LuChevronRight />
          </ArrowButton>
        )}
      </Container>
      {banners.length && (
        <Nav>
          {Array.from({ length: banners.length }).map((_, index) => (
            <NavItem key={index}>
              <NavButton
                isActive={activeIndex === index}
                onClick={() => handleGoTo(index)}
              />
            </NavItem>
          ))}
        </Nav>
      )}
    </Base>
  );
};

export default HeaderCarousel;

const Base = styled.div`
  background: ${({ theme }) => theme.color.carouselBg};
`;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{ pos: "left" | "right" }>`
  position: absolute;
  top: 50%;
  z-index: 1;

  padding: 8px 12px;
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.color.font};
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  overflow: hidden;
  height: 300px;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 50%;
  flex: 1 0 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 500ms ease;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 50px 20px auto 0;
  }
  span {
    display: inline-flex;
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.font};
  }

  img {
    height: 250px;
  }
`;

const NavButton = styled.div<{ isActive?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  border: none;

  background: ${({ isActive }) => (isActive ? "#ED6653" : "#C6C8CA")};
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 100%;
  height: 30px;
  color: ${({ theme }) => theme.color.font};
`;
