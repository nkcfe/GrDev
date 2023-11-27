import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import QBoard from "../pages/QBoard";
import Contact from "../pages/Contact";
import MyPage from "../pages/MyPage";

const Router = ({
  contents,
  fetchAddContent,
  titleValue,
  setTitleValue,
  coverImgUrl,
  setCoverImgUrl,
  bodyValue,
  setBodyValue,
  setContents,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home contents={contents} setContents={setContents} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/post"
          element={
            <Post
              fetchAddContent={fetchAddContent}
              titleValue={titleValue}
              setTitleValue={setTitleValue}
              coverImgUrl={coverImgUrl}
              setCoverImgUrl={setCoverImgUrl}
              bodyValue={bodyValue}
              setBodyValue={setBodyValue}
            />
          }
        />
        <Route path="/qboard" element={<QBoard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
