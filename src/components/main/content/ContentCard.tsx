import React, { useState } from "react";
import styled from "styled-components";
import { TiHeart } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";
import { PiCursorClickFill } from "react-icons/pi";
import Modal from "../../Modal";
import DetailModal from "./DetailModal";
import { Contents } from "../../../interface/interface";

const ContentCard: React.FC<{
  content: Contents;
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
}> = ({ content, setContents }) => {
  const { id, author, coverImgUrl, creationDate, likeCounts, title, body } =
    content;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (!isModalOpen) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <Base onClick={handleModalOpen}>
      <UserInfoContainer>
        <UserProfileImgWrapper>
          <UserProfileImg />
        </UserProfileImgWrapper>
        <UserIntroWrapper>
          <UserName>{author}</UserName>
          <UserIntro>프론트엔드 지망생</UserIntro>
        </UserIntroWrapper>
      </UserInfoContainer>

      <Title>{title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: body }} />

      <Footer>
        <CreationDate>{creationDate}</CreationDate>
        <ButtonWrapper color="#fa5c54">
          <TiHeart />
          <span>{likeCounts}</span>
        </ButtonWrapper>
        <ButtonWrapper color="#29DD9B">
          <FaCommentDots />
          <span>32</span>
        </ButtonWrapper>
        <ButtonWrapper color="#736DF6">
          <PiCursorClickFill />
          <span>190</span>
        </ButtonWrapper>
      </Footer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <DetailModal
          content={content}
          setContents={setContents}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </Base>
  );
};

export default ContentCard;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 600px;
  max-height: 500px;

  background: #fff;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;

  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    transform: translateY(-1%);
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

const UserProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: url("https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8fDA%3D");
  background-size: 100%;
  background-position: center;
`;

const UserIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const UserIntro = styled.div`
  font-size: 16px;
  color: #c6c6c6;
`;

const CreationDate = styled.div`
  margin-right: auto;
  font-size: 14px;
  font-weight: bold;
  color: #c6c6c6;
`;

const Title = styled.div`
  margin-top: 30px;
  padding: 0 10px;

  font-size: 24px;
  font-weight: bold;
`;

const Body = styled.div`
  margin-top: 15px;
  padding: 0 10px;
  overflow: hidden;
  font-size: 14px;
  position: relative;
  max-height: 300px;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px; /* 그라데이션의 높이 조절 가능 */
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 10)
    );
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const ButtonWrapper = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background: #fff;
  color: ${({ color }) => color};

  width: 55px;
  height: 25px;

  border-radius: 25px;

  span {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
