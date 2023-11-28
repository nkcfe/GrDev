import React, { useEffect } from "react";
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
}> = ({ contents, setContents }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <Template>
      <Navbar />
      <Main contents={contents} setContents={setContents} />
    </Template>
  );
};

export default Home;
