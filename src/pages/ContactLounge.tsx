import React from "react";
import { styled } from "styled-components";
import ContactTemplate from "../components/project/ContactTemplate";
import HeaderCarousel from "../components/project/lounge/HeaderCarousel";
import LoungeBodyHeader from "../components/project/lounge/LoungeBodyHeader";
import LoungeCraousel from "../components/project/lounge/LoungeCraousel";
import { Projects } from "../interface/interface";

const msgObj = {
  project: {
    titleMsg: "인기 프로젝트 TOP 10",
    subTitleMsg: "가장 인기 있는 프로젝트를 확인해 보세요!",
  },
  member: {
    titleMsg: "새로운 멤버",
    subTitleMsg: "프로젝트를 함께 할 수 있는 멤버들을 확인해 보세요!",
  },
};

interface Props {
  projects: Projects[];
  toggleTheme: () => void;
  themeMode: string;
}

const ContactLounge: React.FC<Props> = ({
  projects,
  toggleTheme,
  themeMode,
}) => {
  return (
    <ContactTemplate toggleTheme={toggleTheme} themeMode={themeMode}>
      <HeaderCarousel />
      <LoungeBodyHeader msg={msgObj.project} />
      <LoungeCraousel projects={projects} />
    </ContactTemplate>
  );
};

export default ContactLounge;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.color.subBg};
`;
