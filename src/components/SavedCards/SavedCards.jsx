import React, { useEffect, useState } from "react";
import {
  Attention,
  Desckription,
  Image,
  ItemOfShop,
  ListOfShop,
  Name,
  ShopContainer,
} from "./SavedCards.style";
import { useDispatch, useSelector } from "react-redux";
import { takeValue } from "../../redux/medick/operations";

const SavedCards = () => {
  const dispatch = useDispatch();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [medicks, setMedicks] = useState(
    cartItems.map((item) => ({ ...item, count: 1 }))
  );

  const handleCountChange = (event, index) => {
    const newMedicks = [...medicks];
    console.log(newMedicks);
    newMedicks[index].count = parseInt(event);
    setMedicks(newMedicks);
  };

  const calculateTotal = () => {
    return medicks.reduce((total, medic) => {
      return total + medic.price * medic.count;
    }, 0);
  };

  useEffect(() => {
    dispatch(takeValue(calculateTotal()));
    // if (total === 0) {
    //   localStorage.setItem("cart", JSON.stringify(null));
    // }
  });

  return (
    <ShopContainer>
      {medicks.length === 0 ? (
        <Attention>Your backet is empty 🙂</Attention>
      ) : (
        <ListOfShop>
          {medicks.map((medic, index) => (
            <ItemOfShop key={medic._id}>
              <Image src={medic.image} alt="qwe" />

              <Desckription>
                <Name>{medic.name}</Name>
                <p>Price: {medic.price}$</p>
                <form action="">
                  <input
                    type="number"
                    value={medic.count}
                    onChange={(e) => {
                      handleCountChange(e.target.value, index);
                    }}
                  />
                </form>
              </Desckription>
            </ItemOfShop>
          ))}
        </ListOfShop>
      )}
    </ShopContainer>
  );
};

export default SavedCards;
