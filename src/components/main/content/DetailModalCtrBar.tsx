import React, { useState } from "react";
import { TiHeart } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RiEditCircleFill } from "react-icons/ri";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import styled from "styled-components";
import { Contents } from "../../../interface/interface";
import { deleteContent } from "../../../fetch/fetch";
import Modal from "../../Modal";
import ContentPatchModal from "./modifyContent/ContentPatchModal";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
  handleModalClose: () => void;
  content: Contents;
}

const DetailModalCtrBar: React.FC<Props> = ({
  setContents,
  handleModalClose,
  content,
}) => {
  const [isLikeButtonHovered, setIsLikeButtonHovered] = useState(false);
  const [isCommentButtonHovered, setIsCommentButtonHovered] = useState(false);
  const [isGoHeaderButtonHovered, setIsGoHeaderButtonHovered] = useState(false);
  const [isPatchButtonHovered, setIsPatchButtonHovered] = useState(false);
  const [isDeleteButtonHovered, setIsDeleteButtonHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const mutationDelete = useMutation(deleteContent, {
    onSuccess: () => {
      queryClient.invalidateQueries("contents");
    },
  });

  const toggleModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickPatchBtn = () => {
    toggleModalHandler();
  };

  const onClickDeleteBtn = () => {
    handleModalClose();
    mutationDelete.mutate(content.id);
  };

  return (
    <>
      <CtrBar>
        <ButtonWrapper
          color="#fa5c54"
          onMouseEnter={() => setIsLikeButtonHovered(true)}
          onMouseLeave={() => setIsLikeButtonHovered(false)}
        >
          <TiHeart />
          <span>{content.likeCounts}</span>
          <DescriptionChat show={isLikeButtonHovered}>좋아요</DescriptionChat>
        </ButtonWrapper>
        <ButtonWrapper
          color="#29DD9B"
          onMouseEnter={() => setIsCommentButtonHovered(true)}
          onMouseLeave={() => setIsCommentButtonHovered(false)}
        >
          <FaCommentDots />
          <span>32</span>
          <DescriptionChat show={isCommentButtonHovered}>
            댓글로 가기
          </DescriptionChat>
        </ButtonWrapper>
        <ButtonWrapper
          color="#F5A931"
          onMouseEnter={() => setIsGoHeaderButtonHovered(true)}
          onMouseLeave={() => setIsGoHeaderButtonHovered(false)}
        >
          <FaRegArrowAltCircleUp />
          <span>상단</span>
          <DescriptionChat show={isGoHeaderButtonHovered}>
            맨 위로
          </DescriptionChat>
        </ButtonWrapper>
        <ButtonWrapper
          color="#5A88FF"
          onMouseEnter={() => setIsPatchButtonHovered(true)}
          onMouseLeave={() => setIsPatchButtonHovered(false)}
          onClick={onClickPatchBtn}
        >
          <RiEditCircleFill />
          <span>수정</span>
          <DescriptionChat show={isPatchButtonHovered}>
            수정하기
          </DescriptionChat>
        </ButtonWrapper>
        <ButtonWrapper
          color="#F54531"
          onMouseEnter={() => setIsDeleteButtonHovered(true)}
          onMouseLeave={() => setIsDeleteButtonHovered(false)}
          onClick={onClickDeleteBtn}
        >
          <AiFillDelete />
          <span>삭제</span>
          <DescriptionChat show={isDeleteButtonHovered}>
            삭제하기
          </DescriptionChat>
        </ButtonWrapper>
      </CtrBar>
      <Modal isOpen={isModalOpen}>
        <ContentPatchModal
          content={content}
          setContents={setContents}
          toggleModalHandler={toggleModalHandler}
        />
      </Modal>
    </>
  );
};

export default DetailModalCtrBar;

const CtrBar = styled.div`
  position: sticky;
  top: 0;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
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
