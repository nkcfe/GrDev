import React, { useEffect, useState } from "react";
import Template from "../components/main/Template";
import Navbar from "../components/main/Navbar";
import Main from "../components/main/Main";
import { Contents } from "../interface/interface";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home: React.FC<{
  contents: Contents[];
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
  toggleTheme: () => void;
  themeMode: string;
}> = ({ contents, setContents, toggleTheme, themeMode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <Template>
      <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
      <Main contents={contents} setContents={setContents} />
    </Template>
  );
};

export default Home;
