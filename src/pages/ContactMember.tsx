import React from "react";
import ContactTemplate from "../components/project/ContactTemplate";
import MemberHeader from "../components/project/member/MemberHeader";
import styled from "styled-components";
import MemberItem from "../components/project/member/MemberItem";

const ContactMember: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({ toggleTheme, themeMode }) => {
  return (
    <ContactTemplate toggleTheme={toggleTheme} themeMode={themeMode}>
      <MemberHeader />
      <MemberList>
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </MemberList>
    </ContactTemplate>
  );
};

export default ContactMember;

const MemberList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;
