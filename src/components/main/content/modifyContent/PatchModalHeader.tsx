import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  titleValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
}

const PatchModalHeader: React.FC<Props> = ({ titleValue, setTitleValue }) => {
  const onChangeTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  return (
    <Base>
      <TitleWrapper>
        <Title
          placeholder="제목을 입력해 주세요"
          maxLength={80}
          onChange={(e) => onChangeTitleValue(e)}
          value={titleValue}
        />
        <MaxLength>{titleValue.length} / 80</MaxLength>
      </TitleWrapper>
    </Base>
  );
};

export default PatchModalHeader;

const Base = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const TitleWrapper = styled.div`
  width: 90%;
  position: relative;
`;

const Title = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 90%;
  outline: none;
  border: none;

  font-size: 30px;
  font-weight: bold;
  color: #191b2a;

  &::placeholder {
    color: #e3e2e2;
  }
`;

const MaxLength = styled.div`
  position: absolute;
  color: #cccccc;
  font-size: 20px;
  font-weight: bold;
  top: 30px;
  right: 0px;
`;
