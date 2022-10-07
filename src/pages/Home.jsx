import React from "react";
import Navbar from "../components/Navbar";
import background from "./../assets/R.jpg";
import logo from "./../assets/logo.png";
import Search from "../components/Search";
import BingImageCarousal from "../components/BingImageCarousal";

const Home = () => {
  return (
    <div>
      <img src={background} style={{ width: "100%", height: "100vh" }} />
      <Navbar
        caption="Microsoft Bing"
        logo={logo}
        menu={["Images", "Videos", "Translate"]}
      />

      <Search />

      <BingImageCarousal />
    </div>
  );
};

export default Home;
