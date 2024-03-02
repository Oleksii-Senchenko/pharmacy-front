import React from "react";
import Shops from "../Shops/Shops";
import Cards from "../Cards/Cards";
import { HomeCotainer } from "./Home.styled";

const Home = () => {
  return (
    <HomeCotainer>
      <Shops />
      <Cards />
    </HomeCotainer>
  );
};

export default Home;
