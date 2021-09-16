import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slidder from "../components/Slidder";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slidder />
      <Categories />
    </div>
  );
};

export default Home;
