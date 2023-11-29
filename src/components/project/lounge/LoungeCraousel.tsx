import React, { useState } from "react";
import { Projects } from "../../../interface/interface";
import styled, { css } from "styled-components";
import LoungeCarouselItem from "./LoungeCarouselItem";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useQuery } from "react-query";
import { fetchGetProjects } from "../../../fetch/fetch";
import CarouselItemSkeleton from "./CarouselItemSkeleton";

interface Props {
  projects: Projects[] | undefined;
}

const LoungeCraousel: React.FC<Props> = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const {
    isLoading,
    isError,
    data: projects,
  } = useQuery("projects", fetchGetProjects);

  if (isError) {
    return <div>Error loading contents</div>;
  }

  const handleNext = () => {
    if (!projects) return;
    setActiveIndex((activeIndex) => (activeIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    if (!projects) return;
    setActiveIndex(
      (activeIndex) => (activeIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <Base>
      <Container>
        <CarouselList>
          <ArrowBtn pos="left" onClick={handlePrev}>
            <LuChevronLeft />
          </ArrowBtn>
          {isLoading ? (
            <>
              <CarouselItemSkeleton />
              <CarouselItemSkeleton />
            </>
          ) : (
            projects?.map((project) => (
              <CarouselItem activeIndex={activeIndex} key={project.id}>
                <LoungeCarouselItem project={project} />
              </CarouselItem>
            ))
          )}

          <ArrowBtn pos="right" onClick={handleNext}>
            <LuChevronRight />
          </ArrowBtn>
        </CarouselList>
      </Container>
    </Base>
  );
};

export default LoungeCraousel;

const Base = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
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
  transform: translateY(50%);
  z-index: 1;

  padding: 8px 12px;
  font-size: 34px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.color.font};
  border: none;
  margin: 0;
  cursor: pointer;
  top: 120px;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: -70px;
        `
      : css`
          right: -70px;
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
