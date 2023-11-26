import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { LuUploadCloud } from "react-icons/lu";
import { updateContent } from "../../../../fetch/fetch";
import { Contents } from "../../../../interface/interface";

interface Props {
  toggleModalHandler: () => void;
  content: Contents;
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
  titleValue: string;
  bodyValue: string;
}

const PatchModalNav: React.FC<Props> = ({
  toggleModalHandler,
  content,
  setContents,
  titleValue,
  bodyValue,
}) => {
  const [isBackBtnHovered, setIsBackBtnHovered] = useState(false);
  const [isSaveBtnHovered, setIsDeleteBtnHovered] = useState(false);

  const onClickBackBtn = () => {
    toggleModalHandler();
  };

  const onClickSaveBtn = () => {
    updateContent(content, setContents, titleValue, bodyValue);
    toggleModalHandler();
  };

  return (
    <Base>
      <ButtonWrapper
        color="#F54531"
        onMouseEnter={() => setIsBackBtnHovered(true)}
        onMouseLeave={() => setIsBackBtnHovered(false)}
        onClick={onClickBackBtn}
      >
        <IoIosArrowBack />
        <span>취소</span>
        <DescriptionChat show={isBackBtnHovered}>
          입력한 글이 모두 사라집니다.
        </DescriptionChat>
      </ButtonWrapper>
      <ButtonWrapper
        color="#5A88FF"
        onMouseEnter={() => setIsDeleteBtnHovered(true)}
        onMouseLeave={() => setIsDeleteBtnHovered(false)}
        onClick={onClickSaveBtn}
      >
        <LuUploadCloud />
        <span>수정</span>
        <DescriptionChat show={isSaveBtnHovered}>수정하기</DescriptionChat>
      </ButtonWrapper>
    </Base>
  );
};

export default PatchModalNav;

const Base = styled.div`
  position: sticky;
  top: 0;
  margin: 0 auto;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 15;
`;

const DescriptionChat = styled.div<{ show: boolean }>`
  position: absolute;
  display: inline-flex;
  opacity: ${({ show }) => (show ? "1" : "0")};

  justify-content: center;
  align-items: center;
  top: -40px;
  background: #343434;
  border-radius: 0.4em;
  padding: 0 5px;
  white-space: nowrap;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #343434;
    border-bottom: 0;
    margin-left: -5px;
    margin-bottom: -5px;
  }
`;

const ButtonWrapper = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  background: #fff;
  color: ${({ color }) => color};

  width: 60px;
  height: 40px;

  border-radius: 25px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover {
    transform: translateY(-3px);
  }
  position: relative;
`;
