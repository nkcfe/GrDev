import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import QBoard from "../pages/QBoard";
import ContactLounge from "../pages/ContactLounge";
import ContactProject from "../pages/ContactProject";
import ContactMember from "../pages/ContactMember";
import ContactProjectDetail from "../pages/ContactProjectDetail";
import MyPage from "../pages/MyPage";
import ProfileEdit from "../components/mypage/ProfileEdit";

const Router = ({ contents, projects, toggleTheme, themeMode }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contents={contents}
              toggleTheme={toggleTheme}
              themeMode={themeMode}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post contents={contents} />} />
        <Route path="/qboard" element={<QBoard />} />
        <Route
          path="/contact"
          element={
            <ContactLounge
              projects={projects}
              toggleTheme={toggleTheme}
              themeMode={themeMode}
            />
          }
        />
        <Route
          path="/contact/project"
          element={
            <ContactProject
              projects={projects}
              toggleTheme={toggleTheme}
              themeMode={themeMode}
            />
          }
        />
        <Route
          path="/contact/member"
          element={
            <ContactMember toggleTheme={toggleTheme} themeMode={themeMode} />
          }
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<ProfileEdit />} />
        <Route
          path="/contact/project/:id"
          element={
            <ContactProjectDetail
              projects={projects}
              toggleTheme={toggleTheme}
              themeMode={themeMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
