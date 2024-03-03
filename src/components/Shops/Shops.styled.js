import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: auto;
  min-height: 600px;
  overflow-x: hidden;

  border: 1px solid #ccc;
  padding: 15px 55px;
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.h2`
  color: #19871b;
`;

export const ListOfShop = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

export const ItemOfShop = styled.li`
  /* color: #458546;
  font-size: 25px;
  border: 1px solid #ccc;
  padding: 15px 35px;
  
  border-radius: 10px;
  &:hover {
    background-color: black;
    transition-duration: 400ms;
  } */
`;

export const SearchBtn = styled.button`
  display: flex;
  color: #458546;
  font-size: 25px;
  border: 1px solid #ccc;
  padding: 15px 15px;
  width: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 240, 0.7);
  &:hover {
    background-color: rgba(233, 235, 117, 0.5);
    color: black;
    transition-duration: 400ms;
  }

  &:focus {
    background-color: rgba(233, 235, 117, 0.5);
    color: black;
    transition-duration: 400ms;
  }
`;
