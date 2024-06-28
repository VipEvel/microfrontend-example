import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props?.theme?.light?.colors?.primary};
  color: ${(props) => props?.theme?.light?.colors?.text};
  font-family: ${(props) => props?.theme?.light?.fonts?.main};
  padding: 20px;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
