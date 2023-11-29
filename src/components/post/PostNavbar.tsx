import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { LuUploadCloud } from "react-icons/lu";
import { getToday } from "./function/common";
import { Contents } from "../../interface/interface";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";
import { fetchAddContents } from "../../fetch/fetch";

interface Props {
  contents: Contents[];
  titleValue: string;
  coverImgUrl: string;
  bodyValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  setCoverImgUrl: React.Dispatch<React.SetStateAction<string>>;
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

const PostNavbar: React.FC<Props> = ({
  contents,
  titleValue,
  coverImgUrl,
  bodyValue,
  setTitleValue,
  setCoverImgUrl,
  setBodyValue,
}) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation(fetchAddContents, {
    onSuccess: () => {
      queryClient.invalidateQueries("contents");
    },
  });

  const onClickCancleBtn = () => {
    navigate("/");
  };

  const onClickSaveBtn = () => {
    try {
      const newContent = {
        id: uuidv4(),
        author: "chul",
        title: titleValue,
        body: bodyValue,
        coverImgUrl: coverImgUrl,
        likeCounts: 0,
        creationDate: getToday(),
      };

      mutation.mutate(newContent);

      setTitleValue("");
      setCoverImgUrl("");
      setBodyValue("");
      navigate("/");
    } catch (error) {
      console.error("Error saving contents:", error);
    }
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
        pointColor="blue"
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
