import React, { useState } from "react";
import styled from "styled-components";
import PatchModalNav from "./PatchModalNav";
import PatchModalHeader from "./PatchModalHeader";
import RichText from "../../../post/RichText";
import { Contents } from "../../../../interface/interface";

interface Props {
  content: Contents;
  toggleModalHandler: () => void;
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
}

const ContentPatchModal: React.FC<Props> = ({
  content,
  toggleModalHandler,
  setContents,
}) => {
  const [titleValue, setTitleVlaue] = useState<string>(content.title);
  const [bodyValue, setBodyValue] = useState<string>(content.body);
  return (
    <Base>
      <PatchModalNav
        toggleModalHandler={toggleModalHandler}
        content={content}
        setContents={setContents}
        titleValue={titleValue}
        bodyValue={bodyValue}
      />
      <PatchModalHeader titleValue={titleValue} setTitleValue={setTitleVlaue} />
      <RichText bodyValue={bodyValue} setBodyValue={setBodyValue} />
    </Base>
  );
};

export default ContentPatchModal;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  background: #fff;

  width: 1000px;
  max-width: 90vh;
  max-height: 90vh;

  border-radius: 15px;

  padding: 50px 200px;

  overflow: scroll;
  position: relative;
`;
