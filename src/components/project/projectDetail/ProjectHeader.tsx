import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../Modal";
import ContactPostModal from "../ContactPostModal";
import { ContactProps } from "../../../interface/interface";

const ContactHeader: React.FC<ContactProps> = ({
  contactTypeValue,
  setContactTypeValue,
  contactTitleValue,
  setContactTitleValue,
  contactDesValue,
  contactSetDesValue,
  contactPurposeValue,
  setContactPurposeValue,
  contactTimeValue,
  setContactTimeValue,
  contactSelectedOption,
  setContactSelectedOption,
  projects,
  setProjects,
  projectBodyValue,
  setProjectBodyValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Base>
      <Container>
        <Wrapper position="left">
          <ImageWrapper></ImageWrapper>
        </Wrapper>
        <Wrapper position="center">
          <DescriptionWrapper>
            <h1>관심있는 프로젝트를 찾아보세요!</h1>
            <span>
              사이드 프로젝트를 찾거나 다양한 목적의 스터디 모임 모집글을 올릴
              수 있어요!
            </span>
          </DescriptionWrapper>
        </Wrapper>
        <Wrapper position="right">
          <PostBtn onClick={toggleModal}>
            <span>작성하기</span>
          </PostBtn>
          <Modal isOpen={isModalOpen}>
            <ContactPostModal
              toggleModal={toggleModal}
              contactTypeValue={contactTypeValue}
              setContactTypeValue={setContactTypeValue}
              contactTitleValue={contactTitleValue}
              setContactTitleValue={setContactTitleValue}
              contactDesValue={contactDesValue}
              contactSetDesValue={contactSetDesValue}
              contactPurposeValue={contactPurposeValue}
              setContactPurposeValue={setContactPurposeValue}
              contactTimeValue={contactTimeValue}
              setContactTimeValue={setContactTimeValue}
              contactSelectedOption={contactSelectedOption}
              setContactSelectedOption={setContactSelectedOption}
              projects={projects}
              setProjects={setProjects}
              projectBodyValue={projectBodyValue}
              setProjectBodyValue={setProjectBodyValue}
            />
          </Modal>
        </Wrapper>
      </Container>
    </Base>
  );
};

export default ContactHeader;
const Base = styled.div`
  background: #fff;
  border-bottom: 0.5px solid #dfdfdf;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div<{ position: string }>`
  flex: ${({ position }) => (position === "center" ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 150px;
  background-image: url("https://blush.design/api/download?shareUri=tzQxRaHI-&w=800&h=800&fm=png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 15px;

  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
`;

const PostBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  background: #ed6653;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background: #d05949;
  }
`;
