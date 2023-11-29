import React, { useState } from "react";
import PostTemplate from "../components/post/PostTemplate";
import PostNavbar from "../components/post/PostNavbar";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "../components/post/function/common";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Contents } from "../interface/interface";

interface Props {
  contents: Contents[];
}

const Post: React.FC<Props> = ({ contents }) => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [coverImgUrl, setCoverImgUrl] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");
  return (
    <PostTemplate>
      <PostNavbar
        contents={contents}
        titleValue={titleValue}
        coverImgUrl={coverImgUrl}
        bodyValue={bodyValue}
        setTitleValue={setTitleValue}
        setCoverImgUrl={setCoverImgUrl}
        setBodyValue={setBodyValue}
      />
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
