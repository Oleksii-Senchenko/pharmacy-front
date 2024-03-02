import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 30px;
  width: 780px;
  height: 450px;
  overflow-x: hidden;

  border: 1px solid #ccc;
  padding: 15px 50px;
  border-radius: 10px;
`;


export const Title = styled.h2``;

export const ListOfShop = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ItemOfShop = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  min-width: calc((100% - 3 * 20px) / 2);
  color: #458546;
  font-size: 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
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
  align-items: flex-end;
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
