import React from "react";
import FormSide from "../FormSide/FormSide";
import SavedCards from "../SavedCards/SavedCards";
import { ShopContainer } from "./Basket.styled";
import { MainFilling } from "../Home/Home.styled";
import Footer from "../Footer/Footer";
const Basket = () => {
  return (
    <ShopContainer>
      <MainFilling>
        <FormSide />
        <SavedCards />
      </MainFilling>
      <Footer />
    </ShopContainer>
  );
};

export default Basket;
