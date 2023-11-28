import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../main/Navbar";
import ContactSubNav from "./ContactSubNav";

interface Props {
  children: ReactNode;
}

const ContactTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Base>
      <Navbar />
      <ContactSubNav />
      {children}
    </Base>
  );
};

export default ContactTemplate;

const Base = styled.div`
  background: #f8f8f9;
  min-height: 100vh;
`;
