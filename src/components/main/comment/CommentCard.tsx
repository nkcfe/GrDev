import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Comments } from "../../../interface/interface";
import { TiHeart } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteComments, updateComments } from "../../../fetch/fetch";

interface Props {
  comment: Comments;
  comments: Comments[];
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>;
}

const CommentCard: React.FC<Props> = ({ comment, comments, setComments }) => {
  const { author, id, likeCounts, creationDate, text } = comment;
  const [isEllipsisOn, setIsEllipsisOn] = useState<boolean>(false);
  const [chatValue, setChatValue] = useState(text);
  const [isEditMode, setIsEditMode] = useState(false);

  const chatRef = useRef<HTMLTextAreaElement>(null);

  const toggleEllipsis = () => setIsEllipsisOn(!isEllipsisOn);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const onChangePatchComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatValue(e.target.value);
  };

  const onCompleteCommentPatch = async () => {
    updateComments(id, comment, setComments, chatValue);
    toggleEditMode();
  };

  const onClickCommentDelete = () => {
    deleteComments(id, setComments);
  };

  useEffect(() => {
    isEditMode && chatRef.current?.focus();
  }, [isEditMode]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.style.height = "auto";

      // Calculate the new height, but ensure it's at least 20px
      const newHeight = Math.max(20, chatRef.current.scrollHeight);

      chatRef.current.style.height = `${newHeight}px`;
    }
  }, [chatValue]);

  return (
    <Base>
      <UserInfoContainer>
        <UserProfileImgWrapper>
          <UserProfileImg />
        </UserProfileImgWrapper>
        <UserIntroWrapper>
          <UserName>{author}</UserName>
          <Date>{creationDate}</Date>
        </UserIntroWrapper>
        <CtrContainer>
          {!isEditMode && (
            <EllipsisBtn onClick={toggleEllipsis}>
              {isEllipsisOn ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </EllipsisBtn>
          )}

          {isEllipsisOn && (
            <>
              {!isEditMode && (
                <>
                  <CtrItem onClick={toggleEditMode}>수정</CtrItem>
                  <CtrItem onClick={onClickCommentDelete}>삭제</CtrItem>
                </>
              )}
            </>
          )}
        </CtrContainer>
      </UserInfoContainer>
      {isEditMode ? (
        <InputWrapper>
          <TextArea
            ref={chatRef}
            placeholder="댓글을 남겨보세요."
            value={chatValue}
            onChange={(e) => onChangePatchComment(e)}
          />
          <CommitBtn onClick={onCompleteCommentPatch}>
            <FaCheck />
          </CommitBtn>
        </InputWrapper>
      ) : (
        <Chat>
          {text}
          {!isEditMode && (
            <HeartBtnWrapper>
              <TiHeart />
              <span>{likeCounts}</span>
            </HeartBtnWrapper>
          )}
        </Chat>
      )}
      {/* TODO 이 부분 댓글의 유저일 경우 렌더링 */}

      {/*  */}
    </Base>
  );
};

export default CommentCard;

const Base = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  & + & {
    margin-top: 30px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const UserProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserProfileImg = styled.div`
  width: 30px;
  height: 30px;
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
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const CtrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 3px 10px;
  min-height: 30px;
`;

const EllipsisBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #868686;
  background-color: #dfdfdf;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    background: #a4a4a4;
  }
`;

const CtrItem = styled.div<{ type?: string }>`
  font-size: 13px;
  padding: 3px 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${({ type }) =>
    type === "imp"
      ? css`
          background: #fa5c54;
          color: #fff;
          &:hover {
            background-color: #dd524b;
          }
        `
      : css`
          background: #fff;
          &:hover {
            background-color: #c0c0c0;
          }
        `}

  cursor: pointer;
  margin-bottom: 3px;
`;

const Date = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  color: #868686;
`;

const HeartBtnWrapper = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  color: #fa5c54;

  width: 35px;
  height: 25px;

  border-radius: 25px;

  position: absolute;
  right: -25px;
  top: 50%;
  transform: translate(0, -50%);

  span {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  &:hover {
    background: #fa5c54;
    color: #fff;
  }
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Chat = styled.div`
  color: #253c3c;
  background: #def1f1;
  padding: 10px 20px;
  margin-left: 15px;
  border-radius: 0 15px 15px 15px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background: #fa5c54;
    color: white;
  }

  position: relative;
`;

const InputWrapper = styled.div`
  margin-left: 15px;
  padding: 10px 20px;

  width: 580px;
  border-radius: 0 15px 15px 15px;

  display: flex;
  justify-content: start;
  align-items: center;
  background: #fa5c54;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  border: none;
  background: transparent;
  color: #fff;
  resize: none;
  height: 23px;
`;

const CommitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  color: #fa5c54;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  padding: 5px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  cursor: pointer;
`;
