import React from "react";
import ContactTemplate from "../components/project/ContactTemplate";
import ContactHeader from "../components/project/projectDetail/ProjectHeader";
import { Projects } from "../interface/interface";
import styled from "styled-components";
import ProjectItem from "../components/project/projectDetail/ProjectItem";
import { fetchGetProjects } from "../fetch/fetch";
import { useQuery } from "react-query";
import ProjectItemSkeleton from "../components/project/projectDetail/skeleton/ProjectItemSkeleton";

const ContactProject: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({ toggleTheme, themeMode }) => {
  const {
    isLoading,
    isError,
    data: projects,
  } = useQuery("projects", fetchGetProjects);

  if (isError) {
    return <div>Error loading contents</div>;
  }

  return (
    <ContactTemplate toggleTheme={toggleTheme} themeMode={themeMode}>
      <ContactHeader projects={projects} />
      <ProjectList>
        {isLoading ? (
          <>
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
            <ProjectItemSkeleton />
          </>
        ) : (
          projects?.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        )}
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
