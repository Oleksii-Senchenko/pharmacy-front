import React from "react";
import {
  ItemOfShop,
  ListOfShop,
  ShopContainer,
  SearchBtn,
} from "./Shops.styled";
import { useDispatch, useSelector } from "react-redux";
import { getMedecine } from "../../redux/pharmacy/operations";

const Shops = () => {
  const dispatch = useDispatch();

  const getMedecines = async (id) => {
    await dispatch(getMedecine(id));
  };
  const shops = useSelector((state) => state.pharmacy.pharmacies);

  return (
    <ShopContainer>
      <h2>Shops:</h2>
      <ListOfShop>
        {shops.map((shop) => (
          <ItemOfShop key={shop._id}>
            <SearchBtn onClick={() => getMedecines(shop._id)}>
              {shop.name}
            </SearchBtn>
          </ItemOfShop>
        ))}
      </ListOfShop>
    </ShopContainer>
  );
};

export default Shops;
