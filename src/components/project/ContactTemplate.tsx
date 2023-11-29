import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../main/Navbar";
import ContactSubNav from "./ContactSubNav";

interface Props {
  children: ReactNode;
  toggleTheme: () => void;
  themeMode: string;
}

const ContactTemplate: React.FC<Props> = ({
  children,
  toggleTheme,
  themeMode,
}) => {
  return (
    <Base>
      <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
      <ContactSubNav />
      {children}
    </Base>
  );
};

export default ContactTemplate;

const Base = styled.div`
  background: ${({ theme }) => theme.color.bg};
  min-height: 100vh;
`;
