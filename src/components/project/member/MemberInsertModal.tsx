import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const MemberInsertModal: React.FC<{ toggleModal: () => void }> = ({
  toggleModal,
}) => {
  return (
    <Base>
      <Wrapper>
        <CloseBtnWrapper onClick={toggleModal}>
          <IoClose />
        </CloseBtnWrapper>
        <Title>노출 인사말</Title>
        <Textarea placeholder="Tip. 관심 주제, 사이드 프로젝트 참여 목적, 선호하는 방식을 적으면 동료를 찾는데 도움이 돼요" />
        <BtnWrapper>
          <Button>저장</Button>
        </BtnWrapper>
      </Wrapper>
    </Base>
  );
};

export default MemberInsertModal;

const Base = styled.div`
  background: #fff;
  border-bottom: 0.5px solid #dfdfdf;
  border-radius: 15px;
  width: 500px;
  height: 350px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  margin-top: 20px;
  padding: 15px;
  width: 430px;
  height: 160px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  resize: none;
  outline: none;
  &:focus {
    border: 1px solid #b931e0;
  }
`;

const Button = styled.div`
  margin: 0 20px;
  padding: 10px;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: #b931e0;
  width: 100%;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #a22bc3;
  }
`;

const CloseBtnWrapper = styled.div`
  margin-left: auto;
  margin-right: 10px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #dfdfdf;
  border-radius: 100%;
  font-size: 20px;
  &:hover {
    background: #cecccf;
  }
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
