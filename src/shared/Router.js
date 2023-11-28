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

const Router = ({
  contents,
  setContents,
  fetchAddContent,
  titleValue,
  setTitleValue,
  coverImgUrl,
  setCoverImgUrl,
  bodyValue,
  setBodyValue,
  contactTypeValue,
  setContactTypeValue,
  contactTitleValue,
  setContactTitleValue,
  contactDesValue,
  contactSetDesValue,
  contactPurposeValue,
  setContactPurposeValue,
  contactTimeValue,
  setContactTimeValue,
  contactSelectedOption,
  setContactSelectedOption,
  projects,
  setProjects,
  projectBodyValue,
  setProjectBodyValue,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contents={contents}
              setContents={setContents}
              contactTypeValue={contactTypeValue}
              setContactTypeValue={setContactTypeValue}
              contactTitleValue={contactTitleValue}
              setContactTitleValue={setContactTitleValue}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route
          path="/contact"
          element={<ContactLounge projects={projects} />}
        />
        <Route
          path="/contact/project"
          element={
            <ContactProject
              contactTypeValue={contactTypeValue}
              setContactTypeValue={setContactTypeValue}
              contactTitleValue={contactTitleValue}
              setContactTitleValue={setContactTitleValue}
              contactDesValue={contactDesValue}
              contactSetDesValue={contactSetDesValue}
              contactPurposeValue={contactPurposeValue}
              setContactPurposeValue={setContactPurposeValue}
              contactTimeValue={contactTimeValue}
              setContactTimeValue={setContactTimeValue}
              contactSelectedOption={contactSelectedOption}
              setContactSelectedOption={setContactSelectedOption}
              projects={projects}
              setProjects={setProjects}
              projectBodyValue={projectBodyValue}
              setProjectBodyValue={setProjectBodyValue}
            />
          }
        />
        <Route path="/contact/member" element={<ContactMember />} />
        <Route
          path="/contact/project/:id"
          element={<ContactProjectDetail projects={projects} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
