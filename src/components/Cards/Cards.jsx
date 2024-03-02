import React from "react";
import {
  AddBtn,
  Image,
  ItemOfShop,
  ListOfShop,
  Name,
  ShopContainer,
  Desckription
} from "./Cards.styled";
import { useSelector } from "react-redux";

const Cards = () => {
  const medicines = useSelector((state) => state.pharmacy.medecine);
  return (
    <ShopContainer>
      <ListOfShop>
        {medicines.map((medic) => (
          <ItemOfShop key={medic._id}>
            <Image src={medic.image} alt="qwe" />

            <Desckription>
              <Name>{medic.name}</Name>
              <p>{medic.price}$</p>
            </Desckription>

            <AddBtn>Add to card</AddBtn>
          </ItemOfShop>
        ))}
      </ListOfShop>
    </ShopContainer>
  );
};

export default Cards;
