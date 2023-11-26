import React from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { LuSmile } from "react-icons/lu";

interface Props {
  fetchAddComment: () => Promise<void>;
  commentValue: string;
  setCommentValue: React.Dispatch<React.SetStateAction<string>>;
}

const CommentInput: React.FC<Props> = ({
  fetchAddComment,
  commentValue,
  setCommentValue,
}) => {
  const onClickSubmit = () => {
    fetchAddComment();
    setCommentValue("");
  };
  return (
    <Base>
      <UserProfileImgWrapper>
        <UserProfileImg />
      </UserProfileImgWrapper>
      <InputWrapper>
        <Input
          placeholder="댓글을 남겨보세요."
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <CommitBtn onClick={onClickSubmit}>
          <IoSend />
        </CommitBtn>
      </InputWrapper>
    </Base>
  );
};

export default CommentInput;

const Base = styled.div`
  margin: 40px 0 30px 0;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const UserProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #fff;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-image: url("https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8fDA%3D");
  background-size: 100%;
  background-position: center;
`;

const InputWrapper = styled.div`
  width: 550px;
  height: 45px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px;
  border-radius: 30px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

const CommitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #4784df;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 5px;
  &:hover {
    color: #6198ff;
  }
  cursor: pointer;
`;

const VerticlaLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 30px;
  margin: 0 10px;
  border-right: 1px solid #d5d5df;
`;
