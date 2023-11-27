import React, { useEffect, useState } from "react";
import { app, db } from "./firebase";
import Router from "./shared/Router";
import { doc, setDoc } from "firebase/firestore";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "./components/post/function/common";
import { Contents } from "./interface/interface";
import { fetchComments, fetchContents } from "./fetch/fetch";

const App = () => {
  const [themeMode, setThemeMode] = useState("LightMode");
  const [contents, setContents] = useState<Contents[]>([]);
  const [titleValue, setTitleValue] = useState<string>("");
  const [coverImgUrl, setCoverImgUrl] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");

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
      />
    </ThemeProvider>
  );
};

export default App;
