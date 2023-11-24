import React, { useEffect, useState } from "react";
import { app, db } from "./firebase";
import Router from "./shared/Router";
import { collection, getDocs } from "firebase/firestore";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("LightMode");
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "contents"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={themeMode === "LightMode" ? LightTheme : DarkTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
