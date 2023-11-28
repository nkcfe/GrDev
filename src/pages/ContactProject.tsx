import React, { useEffect } from "react";
import ContactTemplate from "../components/project/ContactTemplate";
import ContactHeader from "../components/project/projectDetail/ProjectHeader";
import { ContactProps } from "../interface/interface";
import styled from "styled-components";
import ProjectItem from "../components/project/projectDetail/ProjectItem";
import { fetchGetProjects } from "../fetch/fetch";

const ContactProject: React.FC<ContactProps> = ({
  contactTypeValue,
  setContactTypeValue,
  contactTitleValue,
  setContactTitleValue,
  contactDesValue,
  contactSetDesValue,
  contactPurposeValue,
  setContactPurposeValue,
  contactTimeValue,
  setContactTimeValue,
  contactSelectedOption,
  setContactSelectedOption,
  projects,
  setProjects,
  projectBodyValue,
  setProjectBodyValue,
}) => {
  useEffect(() => {
    fetchGetProjects(setProjects);
  }, [setProjects]);
  return (
    <ContactTemplate>
      <ContactHeader
        contactTypeValue={contactTypeValue}
        setContactTypeValue={setContactTypeValue}
        contactTitleValue={contactTitleValue}
        setContactTitleValue={setContactTitleValue}
        contactDesValue={contactDesValue}
        contactSetDesValue={contactSetDesValue}
        contactPurposeValue={contactPurposeValue}
        setContactPurposeValue={setContactPurposeValue}
        contactTimeValue={contactTimeValue}
        setContactTimeValue={setContactTimeValue}
        contactSelectedOption={contactSelectedOption}
        setContactSelectedOption={setContactSelectedOption}
        projects={projects}
        setProjects={setProjects}
        projectBodyValue={projectBodyValue}
        setProjectBodyValue={setProjectBodyValue}
      />
      <ProjectList>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </ProjectList>
    </ContactTemplate>
  );
};

export default ContactProject;

const ProjectList = styled.div`
  margin-top: 30px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 30px;
`;
