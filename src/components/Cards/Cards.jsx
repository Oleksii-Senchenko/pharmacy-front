import React, { useEffect, useState } from "react";
import {
  AddBtn,
  Image,
  ItemOfShop,
  ListOfShop,
  Name,
  ShopContainer,
  Desckription,
  ButtonContainer,
  CustomSelect,
  CustomOption,
} from "./Cards.styled";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";
import Loader from "../Loader/Loader";

const Cards = () => {
  const medicines = useSelector((state) => state.pharmacy.medecine);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr([...medicines]);
  }, [medicines]);

  const sortDecrement = () => {
    const sortedArr = [...arr].sort((a, b) => a.price - b.price);
    setArr(sortedArr);
  };
  const sortIncrement = () => {
    const sortedArr = [...arr].sort((a, b) => b.price - a.price);
    setArr(sortedArr);
  };

  const sortNameUp = () => {
    const sortedArr = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    setArr(sortedArr);
  };

  const sortNameDown = () => {
    const sortedArr = [...arr].sort((a, b) => b.name.localeCompare(a.name));
    setArr(sortedArr);
  };

  const addToCart = (medic) => {
    let carts = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = carts.some((cart) => cart._id === medic._id);

    if (isAlreadyInCart) {
      Notiflix.Notify.warning(`${medic.name} already exist 🤧`);
      return;
    }

    carts.push(medic);

    localStorage.setItem("cart", JSON.stringify(carts));
    Notiflix.Notify.success("Get well 😘");
  };

  const handleSortChange = (selectedOption) => {
    switch (selectedOption) {
      case "0-100":
        sortDecrement();
        break;
      case "100-0":
        sortIncrement();
        break;
      case "A-Z":
        sortNameUp();
        break;
      case "Z-A":
        sortNameDown();
        break;
      default:
        break;
    }
  };

  return (
    <ShopContainer empty={medicines.length === 0 ? true : false}>
      {medicines.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ButtonContainer>
            <CustomSelect onChange={(e) => handleSortChange(e.target.value)}>
              <CustomOption value="0-100">0-100</CustomOption>
              <CustomOption value="100-0">100-0</CustomOption>
              <CustomOption value="A-Z">A-Z</CustomOption>
              <CustomOption value="Z-A">Z-A</CustomOption>
            </CustomSelect>
          </ButtonContainer>
          <ListOfShop>
            {arr.map((medic) => (
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
        </>
      )}
    </ShopContainer>
  );
};

export default Cards;
