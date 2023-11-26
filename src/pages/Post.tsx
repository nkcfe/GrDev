import React, { useState } from "react";
import PostTemplate from "../components/post/PostTemplate";
import PostNavbar from "../components/post/PostNavbar";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "../components/post/function/common";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
  fetchAddContent: () => Promise<void>;
  titleValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  coverImgUrl: string;
  setCoverImgUrl: React.Dispatch<React.SetStateAction<string>>;
  bodyValue: string;
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

const Post: React.FC<Props> = ({
  fetchAddContent,
  titleValue,
  setTitleValue,
  coverImgUrl,
  setCoverImgUrl,
  bodyValue,
  setBodyValue,
}) => {
  return (
    <PostTemplate>
      <PostNavbar fetchAddContent={fetchAddContent} />
      <PostHeader
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        coverImgUrl={coverImgUrl}
        setCoverImgUrl={setCoverImgUrl}
      />
      <PostBody bodyValue={bodyValue} setBodyValue={setBodyValue} />
    </PostTemplate>
  );
};

export default Post;
