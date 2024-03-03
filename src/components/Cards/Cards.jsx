import React from "react";
import {
  AddBtn,
  Image,
  ItemOfShop,
  ListOfShop,
  Name,
  ShopContainer,
  Desckription,
} from "./Cards.styled";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";

const Cards = () => {
  const medicines = useSelector((state) => state.pharmacy.medecine);

  const addToCart = (medic) => {
    let carts = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = carts.some((cart) => cart._id === medic._id);

    if (isAlreadyInCart) {
      Notiflix.Notify.warning(`${medic.name} already exist 🤧`);
      return;
    }

    carts.push(medic);

    localStorage.setItem("cart", JSON.stringify(carts));
    Notiflix.Notify.success('Get well 😘');
  };

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

            <AddBtn onClick={() => addToCart(medic)}>Add to card</AddBtn>
          </ItemOfShop>
        ))}
      </ListOfShop>
    </ShopContainer>
  );
};

export default Cards;
