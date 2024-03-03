import styled from "styled-components";

export const Footers = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  background-color: #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Containers = styled.div`
  display: flex;
  padding: 15px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li``;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Price = styled.p`
  font-size: 20px;
`;

export const Btn = styled.button`
  width: 200px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #458546;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #356235;
  }
`;
export const Advertising = styled.a`
  font-size: 23px;
  font-weight: 600;
  color: #458546;
  text-decoration: none;
  margin-right: 10px;
  padding: 10px 35px;
`;
