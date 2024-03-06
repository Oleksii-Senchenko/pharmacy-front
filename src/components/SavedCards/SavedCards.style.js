import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  gap: 30px;
  width: 780px;
  height: 610px;
  overflow-x: hidden;
  border: 1px solid #ccc;
  padding: 15px 50px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2``;

export const Attention = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const ListOfShop = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ItemOfShop = styled.li`
  display: flex;
  gap: 50px;
  padding: 10px 15px;
  width: 350px;
  min-width: calc((100% - 3 * 20px) / 1);
  color: #458546;
  font-size: 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition-duration: 400ms;
  }
`;

export const Image = styled.img`
  width: 300px;
  border: 1px solid #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 25px;
  color: rgb(25, 59, 26);
  margin-top: 10px;
`;
export const Desckription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-bottom: 25px;
`;

export const AddBtn = styled.button`
  width: 200px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #458546;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    background-color: #356235;
  }
`;
