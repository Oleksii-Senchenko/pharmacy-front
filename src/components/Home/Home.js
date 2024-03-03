import React from "react";
import Shops from "../Shops/Shops";
import Cards from "../Cards/Cards";
import { HomeCotainer, MainFilling } from "./Home.styled";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <HomeCotainer>
      <MainFilling>
        <Shops />
        <Cards />
      </MainFilling>
      <Footer />
    </HomeCotainer>
  );
};

export default Home;
