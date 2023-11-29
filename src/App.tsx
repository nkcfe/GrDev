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
  const [projects, setProjects] = useState<Projects[]>([]);
  const [contents, setContents] = useState<Contents[]>([]);
  console.log(themeMode);

  const toggleTheme = () => {
    // setThemeMode 함수를 사용하여 현재 테마 모드를 반대로 설정
    setThemeMode((prevThemeMode) =>
      prevThemeMode === "LightMode" ? "dark" : "LightMode"
    );
  };

  return (
    <ThemeProvider theme={themeMode === "LightMode" ? LightTheme : DarkTheme}>
      <Router
        contents={contents}
        projects={projects}
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
};

export default App;
