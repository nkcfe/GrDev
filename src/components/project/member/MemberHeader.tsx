import React, { useState } from "react";

import styled from "styled-components";
import Modal from "../../Modal";
import SwitchBtn from "../lounge/SwitchBtn";
import MemberInsertModal from "./MemberInsertModal";

const ContactHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  const toggleModal = () => {
    toggleSwitch();
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
            <h1>프로젝트 멤버를 구해보세요!</h1>
            <span>
              프로필을 노출시키거나 프로젝트에 필요한 멤버를 구할 수 있어요!
            </span>
          </DescriptionWrapper>
        </Wrapper>
        <Wrapper position="right">
          <PostBtn onClick={toggleModal}>
            프로필 노출
            <SwitchBtn isOn={isOn} />
          </PostBtn>
          <Modal isOpen={isModalOpen}>
            <MemberInsertModal toggleModal={toggleModal} />
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
  background-image: url("https://blush.design/api/download?shareUri=Sr_Ky9nNi&w=800&h=800&fm=png");
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
  gap: 5px;
  width: 160px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #b931e0;
  border-radius: 5px;
  background: #fff;
  color: black;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    border: 2px solid #b931e0;
  }
`;
