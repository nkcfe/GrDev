import React, { useEffect } from "react";
import { app } from "./firebase";

const App = () => {
  useEffect(() => {
    console.log("app", app);
  }, []);
  return (
    <div>
      <h1>Groovy Dev</h1>
    </div>
  );
};

export default App;
