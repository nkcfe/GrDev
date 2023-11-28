import React from "react";
import styled from "styled-components";
import { Projects } from "../../../interface/interface";
import { FaFireAlt } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiMuscleUp } from "react-icons/gi";
import { TbBrandFunimation } from "react-icons/tb";
import { PiTimerBold } from "react-icons/pi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { SiInternetcomputer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

interface Props {
  project: Projects;
}

const LoungeCarouselItem: React.FC<Props> = ({ project }) => {
  const { id, title, type, summary, purpose, weekly_time, recruitment_role } =
    project;

  return (
    <Base>
      <Type>
        <FaFireAlt />
        <span>{type}</span>
      </Type>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <InfoContainer>
        <Info>
          {purpose === "창업/수익 창출" ? (
            <BiMoneyWithdraw />
          ) : purpose === "포트폴리오/직무 역량 강화" ? (
            <GiMuscleUp />
          ) : (
            <TbBrandFunimation />
          )}
          <span>{purpose}</span>
        </Info>
        <Info>
          <PiTimerBold />
          <span>{weekly_time}</span>
        </Info>
        <Info>
          {recruitment_role === "프론트엔드" ? (
            <TbHeartRateMonitor />
          ) : recruitment_role === "백엔드" ? (
            <CgDatabase />
          ) : recruitment_role === "디자인" ? (
            <MdOutlineDesignServices />
          ) : recruitment_role === "기획" ? (
            <MdInsertChartOutlined />
          ) : (
            <SiInternetcomputer />
          )}
          <span>{recruitment_role}</span>
        </Info>
      </InfoContainer>
    </Base>
  );
};

export default LoungeCarouselItem;

const Base = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 500px;
  height: 300px;
  padding: 15px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  }
  cursor: pointer;
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background: #f1f5f9;
  color: #94a3b8;

  font-size: 12px;
  padding: 3px 5px;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  width: 90%;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Summary = styled.div`
  margin-top: 25px;
  font-size: 15px;
  width: 90%;
  height: 70px; /* 3줄의 높이를 기준으로 조절합니다 */
  overflow: hidden;
  position: relative;
  line-height: 24px; /* font-size와 일치하도록 설정합니다 */

  /* Webkit 브라우저에 대한 설정 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  /* 일반 브라우저에 대한 설정 */
  display: -moz-box;
  -moz-line-clamp: 3;
  -moz-box-orient: vertical;

  /* 기타 브라우저에 대한 설정 */
  display: box;
  line-clamp: 3;
  box-orient: vertical;
`;

const InfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  svg {
    font-size: 14px;
  }
  font-size: 12px;
  font-weight: bold;
  color: #94a3b8;
  background: #fff;
`;
