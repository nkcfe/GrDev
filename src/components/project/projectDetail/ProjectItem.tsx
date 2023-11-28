import React from "react";
import { Projects } from "../../../interface/interface";
import styled from "styled-components";
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

const ProjectItem: React.FC<Props> = ({ project }) => {
  const { id, title, type, summary, purpose, weekly_time, recruitment_role } =
    project;
  const navigate = useNavigate();

  const onMoveDetailPage = () => {
    navigate(`/contact/project/${id}`);
  };

  return (
    <Base onClick={onMoveDetailPage}>
      <Type>
        <FaFireAlt />
        <span>{type}</span>
      </Type>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <InfoContainer>
        <Purpose>
          {purpose === "창업/수익 창출" ? (
            <BiMoneyWithdraw />
          ) : purpose === "포트폴리오/직무 역량 강화" ? (
            <GiMuscleUp />
          ) : (
            <TbBrandFunimation />
          )}
          <span>{purpose}</span>
        </Purpose>
        <WeekTime>
          <PiTimerBold />
          <span>{weekly_time}</span>
        </WeekTime>
        <RecruitRole>
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
        </RecruitRole>
      </InfoContainer>
    </Base>
  );
};

export default ProjectItem;

const Base = styled.div`
  margin: 0 auto;

  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 600px;
  min-height: 200px;

  padding: 20px;

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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

  font-size: 14px;
  padding: 5px;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-top: 15px;
  font-size: 22px;
  font-weight: bold;
`;

const Summary = styled.div`
  margin-top: 15px;
  font-size: 15px;
`;

const InfoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
`;

const Purpose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  background: #9bbec8;
`;

const LikeBtn = styled.div``;

const WeekTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  background: #427d9d;
  font-size: 14px;
`;

const RecruitRole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  background: #164863;
  font-size: 14px;
`;
