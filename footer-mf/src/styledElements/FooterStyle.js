import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props?.theme?.light?.colors?.secondary};
  color: ${(props) => props?.theme?.light?.colors?.text};
  font-family: ${(props) => props?.theme?.light?.fonts?.main};
  padding: 20px;
  text-align: center;
`;
