import React, { ReactNode } from "react";
import styled from "styled-components";

interface PostTemplateProps {
  children: ReactNode;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default PostTemplate;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;
