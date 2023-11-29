import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentCard from "../comment/CommentCard";
import { Comments, Contents } from "../../../interface/interface";
import { fetchAddComments, fetchComments } from "../../../fetch/fetch";
import { v4 as uuidv4 } from "uuid";
import CommentInput from "../comment/CommentInput";

import { getToday } from "../../post/function/common";
import CommentBlank from "../comment/CommentBlank";
import UserIntroCard from "../card/UserIntroCard";
import DetailModalCtrBar from "./DetailModalCtrBar";
import { useMutation, useQuery, useQueryClient } from "react-query";

const DetailModal: React.FC<{
  content: Contents;
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
  handleModalClose: () => void;
}> = ({ content, setContents, handleModalClose }) => {
  const { id, author, coverImgUrl, creationDate, likeCounts, title, body } =
    content;

  const [commentValue, setCommentValue] = useState<string>("");

  const queryClient = useQueryClient();

  const mutation = useMutation(fetchAddComments, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const {
    isLoading,
    isError,
    data: comments,
  } = useQuery("comments", fetchComments);

  if (isError) {
    return <div>Error loading contents</div>;
  }

  const filteredComments = comments?.filter(
    (comment) => comment.contentId === id
  );

  const onClickSendComment = async () => {
    try {
      const newComment = {
        id: uuidv4(),
        contentId: id,
        author: "chul", // TODO 나중에 유저 데이터랑 연결
        text: commentValue,
        creationDate: getToday(),
        likeCounts: 0,
      };
      mutation.mutate(newComment);
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  };

  return (
    <Base>
      <DetailModalCtrBar
        setContents={setContents}
        handleModalClose={handleModalClose}
        content={content}
      />
      <Body>
        <DateWrapper>{creationDate}</DateWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <TextWrapper dangerouslySetInnerHTML={{ __html: body }} />
      </Body>
      <UserIntroCard />
      <CommentWrapper>
        <CommentInput
          onClickSendComment={onClickSendComment}
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
        {filteredComments
          ?.sort(
            (a, b) =>
              new Date(b.creationDate).getTime() -
              new Date(a.creationDate).getTime()
          )
          .map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              comments={comments}
            />
          ))}
        {filteredComments?.length === 0 && <CommentBlank />}
      </CommentWrapper>
    </Base>
  );
};

export default DetailModal;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: ${({ theme }) => theme.color.bg};
  width: 1000px;
  max-height: 90vh;

  border-radius: 15px;
  padding: 50px 100px;

  overflow: scroll;
  position: relative;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const DateWrapper = styled.div`
  margin-top: 15px;
  color: ${({ theme }) => theme.color.subFont};
  font-weight: bold;
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
  width: 600px;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
`;

const TextWrapper = styled.div`
  margin-top: 30px;
  width: 600px;
  overflow-x: hidden;
  line-height: 180%;
  color: ${({ theme }) => theme.color.font};
  img {
    width: 600px;
    border-radius: 15px;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
`;
