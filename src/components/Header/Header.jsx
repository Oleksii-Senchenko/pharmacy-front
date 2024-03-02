import React from "react";
import { HeaderContainer, Line, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <Line></Line>
      <StyledNavLink to='/basket'>Shop Card</StyledNavLink>
    </HeaderContainer>
  );
};

export default Header;
