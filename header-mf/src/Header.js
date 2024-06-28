import React from "react";
import { HeaderContainer, Nav, StyledLink } from "./styledElements/HeaderStyle";

const Header = () => (
  <HeaderContainer>
    <h1>My App</h1>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
