import React from "react";
import PostTemplate from "../components/post/PostTemplate";
import PostNavbar from "../components/post/PostNavbar";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";

const Post: React.FC = () => {
  return (
    <PostTemplate>
      <PostNavbar />
      <PostHeader />
      <PostBody />
    </PostTemplate>
  );
};

export default Post;
