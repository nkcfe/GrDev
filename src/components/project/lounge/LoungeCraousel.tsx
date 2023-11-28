import React, { useState } from "react";
import { Projects } from "../../../interface/interface";
import styled, { css } from "styled-components";
import LoungeCarouselItem from "./LoungeCarouselItem";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

interface Props {
  projects: Projects[];
}

const LoungeCraousel: React.FC<Props> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () =>
    setActiveIndex((activeIndex) => (activeIndex + 1) % projects.length);

  const handlePrev = () =>
    setActiveIndex(
      (activeIndex) => (activeIndex - 1 + projects.length) % projects.length
    );

  return (
    <Base>
      <Container>
        <CarouselList>
          <ArrowBtn pos="left" onClick={handlePrev}>
            <LuArrowBigLeft />
          </ArrowBtn>
          {projects.map((project) => (
            <CarouselItem activeIndex={activeIndex} key={project.id}>
              <LoungeCarouselItem project={project} />
            </CarouselItem>
          ))}
          <ArrowBtn pos="right" onClick={handleNext}>
            <LuArrowBigRight />
          </ArrowBtn>
        </CarouselList>
      </Container>
    </Base>
  );
};

export default LoungeCraousel;

const Base = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px 0;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const ArrowBtn = styled.div<{ pos: "left" | "right" }>`
  position: absolute;
  top: 50%;
  z-index: 1;

  padding: 8px 12px;
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;
  color: black;
  border: none;
  margin: 0;
  cursor: pointer;
  top: 120px;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: -60px;
        `
      : css`
          right: -60px;
        `};
`;

const CarouselList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  list-style: none;

  padding: 0;
  display: flex;

  overflow: hidden;
  height: 340px;
`;

const CarouselItem = styled.li<{ activeIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-${({ activeIndex }) => activeIndex * 208}%);
  transition: 500ms ease;
`;
