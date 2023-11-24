import React from "react";
import styled from "styled-components";
import RichText from "./RichText";

const PostBody: React.FC = () => {
  return (
    <Base>
      <RichText />
    </Base>
  );
};

export default PostBody;

const Base = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
