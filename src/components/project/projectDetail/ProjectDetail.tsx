import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Projects } from "../../../interface/interface";
import { FaFireAlt } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiMuscleUp } from "react-icons/gi";
import { TbBrandFunimation } from "react-icons/tb";
import { TbHeartRateMonitor } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { SiInternetcomputer } from "react-icons/si";
import { PiTimerBold } from "react-icons/pi";
import ProjectUserCard from "./ProjectUserCard";
import { useQuery } from "react-query";
import { fetchGetProjects } from "../../../fetch/fetch";

const ProjectDetail = () => {
  const params = useParams();
  const projectId = params.id;
  const {
    isLoading,
    isError,
    data: projects,
  } = useQuery("projects", fetchGetProjects);

  if (isError) {
    return <div>Error loading contents</div>;
  }

  const filteredProject = projects?.filter(
    (project) => project.id === projectId
  )[0];

  if (!filteredProject) {
    return <div>Loading...</div>;
  }

  const {
    id,
    title,
    author,
    type,
    summary,
    purpose,
    weekly_time,
    recruitment_role,
    detail_body,
    creation_date,
    likes_counts,
  } = filteredProject;
  return (
    <Base>
      <Wrapper>
        <Type>
          <FaFireAlt />
          <span>{type}</span>
        </Type>
        <Title>{title}</Title>
        <InfoContainer>
          <span>{creation_date}</span>
          <span>∙</span>
          <span>{author}</span>
        </InfoContainer>
        <BodyWrapper>
          <Label>요약</Label>
          <Summary>{summary}</Summary>
          <Label>모집 역할</Label>
          <Item>
            <IconWrapper>
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
            </IconWrapper>
            <span>{recruitment_role}</span>
          </Item>
          <Label>목적</Label>
          <Item>
            <IconWrapper>
              {purpose === "창업/수익 창출" ? (
                <BiMoneyWithdraw />
              ) : purpose === "포트폴리오/직무 역량 강화" ? (
                <GiMuscleUp />
              ) : (
                <TbBrandFunimation />
              )}
            </IconWrapper>
            <span>{purpose}</span>
          </Item>
          <Label>참여 시간</Label>
          <Item>
            <IconWrapper>
              <PiTimerBold />
            </IconWrapper>
            {weekly_time}
          </Item>
          <Label>상세 소개</Label>
          <DetailText dangerouslySetInnerHTML={{ __html: detail_body }} />
        </BodyWrapper>
        <ProjectUserCard />
      </Wrapper>
    </Base>
  );
};

export default ProjectDetail;

const Base = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background: #fff;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 60%;
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
  text-align: center;
  font-size: 38px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b7684;
`;

const BodyWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

const Label = styled.div`
  margin-top: 35px;
  font-size: 20px;
  font-weight: bold;
`;

const Summary = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 16px;
`;

const DetailText = styled.div``;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: #f8fafc;
`;
