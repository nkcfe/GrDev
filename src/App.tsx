import React, { useEffect, useState } from "react";
import { app, db } from "./firebase";
import Router from "./shared/Router";
import { doc, setDoc } from "firebase/firestore";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "./components/post/function/common";
import { Contents, Projects } from "./interface/interface";
import { fetchContents } from "./fetch/fetch";

const App = () => {
  const [themeMode, setThemeMode] = useState("LightMode");

  const [contents, setContents] = useState<Contents[]>([]);
  const [projects, setProjects] = useState<Projects[]>([]);

  const [titleValue, setTitleValue] = useState<string>("");
  const [coverImgUrl, setCoverImgUrl] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");
  const [projectBodyValue, setProjectBodyValue] = useState<string>("");

  const [contactTypeValue, setContactTypeValue] = useState("");
  const [contactTitleValue, setContactTitleValue] = useState("");
  const [contactDesValue, contactSetDesValue] = useState("");
  const [contactPurposeValue, setContactPurposeValue] =
    useState<string>("포트폴리오/직무 역량 강화");
  const [contactTimeValue, setContactTimeValue] =
    useState<string>("매주 4시간 이하");
  const [contactSelectedOption, setContactSelectedOption] =
    useState<string>("");

  const fetchAddContent = async () => {
    const newContent = {
      id: uuidv4(),
      author: "chul",
      title: titleValue,
      body: bodyValue,
      coverImgUrl: coverImgUrl,
      likeCounts: 0,
      creationDate: getToday(),
    };
    setContents((prev) => {
      return [...contents, newContent];
    });
    await setDoc(doc(db, "contents", newContent.id), newContent);
    setTitleValue("");
    setCoverImgUrl("");
    setBodyValue("");
  };
  console.log(projects);

  useEffect(() => {
    fetchContents(setContents);
  }, []);

  return (
    <ThemeProvider theme={themeMode === "LightMode" ? LightTheme : DarkTheme}>
      <Router
        contents={contents}
        fetchAddContent={fetchAddContent}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        coverImgUrl={coverImgUrl}
        setCoverImgUrl={setCoverImgUrl}
        bodyValue={bodyValue}
        setBodyValue={setBodyValue}
        setContents={setContents}
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
    </ThemeProvider>
  );
};

export default App;
