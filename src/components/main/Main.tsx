import React, { useState } from "react";
import styled from "styled-components";
import UserProfileCard from "./card/UserProfileCard";
import PostCard from "./card/PostCard";
import ContentCard from "./content/ContentCard";
import { Contents } from "../../interface/interface";

const Main: React.FC<{
  contents: Contents[];
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
}> = ({ contents, setContents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);
  return (
    <Base>
      <LeftSideBarContainer>
        <UserProfileCard />
      </LeftSideBarContainer>
      <CenterContainer>
        <PostCard />
        <ContentsList onClick={handleModalToggle}>
          {contents.map((content) => (
            <ContentCard
              key={content.id}
              content={content}
              setContents={setContents}
            />
          ))}
        </ContentsList>
      </CenterContainer>
      <RightSideBarContainer>
        <UserProfileCard />
      </RightSideBarContainer>
    </Base>
  );
};

export default Main;

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  gap: 30px;

  margin: 0 auto;

  max-width: 1280px;
  min-height: 90%;

  padding: 15px 0 50px 0;
  margin-top: 20px;

  position: relative;
`;

const LeftSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  position: sticky;
  top: 90px;

  flex: 1;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;

  height: 100%;
  flex: 2;
`;

const RightSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  flex: 1;
`;

const ContentsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
`;
