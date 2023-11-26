import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentCard from "../comment/CommentCard";
import { Comments, Contents } from "../../../interface/interface";
import { fetchComments } from "../../../fetch/fetch";
import { v4 as uuidv4 } from "uuid";
import CommentInput from "../comment/CommentInput";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getToday } from "../../post/function/common";
import CommentBlank from "../comment/CommentBlank";
import UserIntroCard from "../card/UserIntroCard";
import DetailModalCtrBar from "./DetailModalCtrBar";

const DetailModal: React.FC<{
  content: Contents;
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
  handleModalClose: () => void;
}> = ({ content, setContents, handleModalClose }) => {
  const { id, author, coverImgUrl, creationDate, likeCounts, title, body } =
    content;

  const [comments, setComments] = useState<Comments[]>([]);
  const [commentValue, setCommentValue] = useState<string>("");

  const filteredComments = comments.filter(
    (comment) => comment.contentId === id
  );

  const fetchAddComment = async () => {
    const newComment = {
      id: uuidv4(),
      contentId: id,
      author: "chul", // TODO 나중에 유저 데이터랑 연결
      text: commentValue,
      creationDate: getToday(),
      likeCounts: 0,
    };
    setComments(() => {
      return [newComment, ...comments];
    });
    await setDoc(doc(db, "comments", newComment.id), newComment);
  };

  useEffect(() => {
    fetchComments(setComments);
  }, []);

  const goToHeaderHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log("Current Scroll Position:", scrollPosition);
  };

  return (
    <Base>
      <DetailModalCtrBar
        goToHeaderHandler={goToHeaderHandler}
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
          fetchAddComment={fetchAddComment}
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
        {filteredComments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
        ))}
        {filteredComments.length === 0 && <CommentBlank />}
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

  background: #fff;
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
  color: #b1b5b8;
  font-weight: bold;
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
  width: 600px;
  font-size: 36px;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  margin-top: 30px;
  width: 600px;
  overflow-x: hidden;
  line-height: 180%;
  img {
    width: 600px;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
`;
