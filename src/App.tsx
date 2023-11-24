import React, { useEffect } from "react";
import { app, db } from "./firebase";
import Router from "./shared/Router";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  useEffect(() => {
    console.log("app", app);
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "contents"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    fetchData();
  }, []);
  return <Router />;
};

export default App;
