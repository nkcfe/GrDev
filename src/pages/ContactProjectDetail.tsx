import React from "react";
import { Projects } from "../interface/interface";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PostNavbar from "../components/post/PostNavbar";
import ContactSubNav from "../components/project/ContactSubNav";
import ContactTemplate from "../components/project/ContactTemplate";
import ProjectDetail from "../components/project/projectDetail/ProjectDetail";

interface Props {
  projects: Projects[];
}
const ContactProjectDetail: React.FC<Props> = ({ projects }) => {
  return (
    <ContactTemplate>
      <ProjectDetail projects={projects} />
    </ContactTemplate>
  );
};

export default ContactProjectDetail;
