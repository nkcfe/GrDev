import React from "react";
import styled from "styled-components";
import RichText from "./RichText";

interface Props {
  bodyValue: string;
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

const PostBody: React.FC<Props> = ({ bodyValue, setBodyValue }) => {
  return (
    <Base>
      <RichText bodyValue={bodyValue} setBodyValue={setBodyValue} />
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
