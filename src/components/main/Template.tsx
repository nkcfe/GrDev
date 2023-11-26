import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Template;

const Base = styled.div`
  background: #f8f8f9;
  min-height: 100vh;

  position: relative;
`;
