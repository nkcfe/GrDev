import React from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { ImFire } from "react-icons/im";
interface Props {
  msg: {
    titleMsg: string;
    subTitleMsg: string;
  };
}

const LoungeBodyHeader: React.FC<Props> = ({ msg }) => {
  return (
    <Base>
      <Wrapper>
        <TextWrapper>
          <TitleMsg>
            {msg.titleMsg}
            <ImFire />
          </TitleMsg>
          <SubTitleMsg>{msg.subTitleMsg}</SubTitleMsg>
        </TextWrapper>
        <AllBtn>
          <span>모두 보기</span>
          <MdArrowForwardIos />
        </AllBtn>
      </Wrapper>
    </Base>
  );
};

export default LoungeBodyHeader;

const Base = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
`;

const TitleMsg = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: red;
  }
  font-size: 24px;
  font-weight: bold;
`;

const SubTitleMsg = styled.div`
  font-size: 18px;
`;

const AllBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
`;
