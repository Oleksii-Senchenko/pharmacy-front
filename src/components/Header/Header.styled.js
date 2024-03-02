import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 100px;
`;

export const StyledNavLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: darkblue;
  }

  &.active {
    font-weight: bold;
  }
`;

export const Line = styled.span`
  width: 1px;
  height: 20px;
  background-color: black;
  display: block;
`;
