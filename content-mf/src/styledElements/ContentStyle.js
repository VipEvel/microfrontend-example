import styled from "styled-components";

export const ContentContainer = styled.main`
  background-color: ${(props) => props?.theme?.light?.colors?.background};
  color: ${(props) => props?.theme?.light?.colors?.text};
  font-family: ${(props) => props?.theme?.light?.fonts?.main};
  padding: 20px;
`;
