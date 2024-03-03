import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: rgba(233, 235, 117, 0.5);
  margin-bottom: 35px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(NavLink)`
  color: #458546;
  text-decoration: none;
  margin-right: 10px;
  padding: 10px 35px;
  font-size: 20px;

  &:hover {
    color: #458546;
    font-size: 17px;
    font-weight: bold;
    transition-duration: 400ms;
  }

  &.active {
    font-size: 23px;
    font-weight: bold;
  }
`;

export const Line = styled.span`
  width: 1px;
  height: 20px;
  background-color: black;
  display: block;
`;
