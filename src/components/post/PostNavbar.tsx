import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { LuUploadCloud } from "react-icons/lu";
import { getToday } from "./function/common";

interface Props {
  fetchAddContent: () => Promise<void>;
}

const PostNavbar: React.FC<Props> = ({ fetchAddContent }) => {
  const navigate = useNavigate();
  const onClickCancleBtn = () => {
    navigate("/");
  };
  const onClickSaveBtn = () => {
    fetchAddContent();
    navigate("/");
  };

  return (
    <Base>
      <Button fontWeight="bold" onClick={onClickCancleBtn}>
        <IoIosArrowBack />
        뒤로
      </Button>
      <span>{getToday()}</span>
      <Button
        fontWeight="bold"
        pointColor="black"
        onClick={(event) => onClickSaveBtn()}
        disable
      >
        <LuUploadCloud />
        출간하기
      </Button>
    </Base>
  );
};

export default PostNavbar;

const Base = styled.div`
  max-width: 700px;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.bg};

  z-index: 2;
  span {
    font-size: 16px;
    font-weight: bold;
    color: #c6c6c6;
  }
`;
