import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "calculator"
    "display";
  grid-template-columns: auto;

  background-color: ${(props) => props.theme["bg-syntax"]};

  @media only screen and (min-width: 1280px) {
    grid-template-areas: "calculator display";
    grid-template-columns: 1fr auto;
  }
  @media only screen and (min-width: 1840px) {
    grid-template-areas: "calculator display";
    grid-template-columns: 1fr auto;
  }
`;
