import React, { useEffect } from "react";
import { app } from "./firebase";
import Router from "./shared/Router";

const App = () => {
  useEffect(() => {
    console.log("app", app);
  }, []);
  return <Router />;
};

export default App;
