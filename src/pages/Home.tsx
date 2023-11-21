import React from "react";
import Template from "../components/main/Template";
import Navbar from "../components/main/Navbar";

const Home = () => {
  // 네비게이션 바 항목
  const navItems = ["Home", "Q&A", "Contact", "Post", "Logout"];
  return (
    <Template>
      <Navbar items={navItems} />
      메인페이지 입니다.
    </Template>
  );
};

export default Home;
