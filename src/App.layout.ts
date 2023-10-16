import styled from "styled-components";

export const Layout = styled.main`
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "sidebar outlet"
    "sidebar outlet";
  grid-template-columns: auto 1fr;

  @media only screen and (min-width: 1280px) {
    grid-template-areas: "sidebar outlet";
    grid-template-columns: auto 1fr;
  }
  @media only screen and (min-width: 1840px) {
    grid-template-areas: "sidebar outlet";
    grid-template-columns: auto 1fr;
  }

  .outlet-container {
    grid-area: outlet;
  }
`;
