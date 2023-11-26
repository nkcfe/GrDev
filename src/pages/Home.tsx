import React from "react";
import Template from "../components/main/Template";
import Navbar from "../components/main/Navbar";
import Main from "../components/main/Main";
import { Contents } from "../interface/interface";

const Home: React.FC<{
  contents: Contents[];
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>;
}> = ({ contents, setContents }) => {
  return (
    <Template>
      <Navbar />
      <Main contents={contents} setContents={setContents} />
    </Template>
  );
};

export default Home;
