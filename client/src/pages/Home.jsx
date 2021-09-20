import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slidder from "../components/Slidder";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slidder />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
