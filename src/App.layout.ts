import styled from "styled-components";

export const Layout = styled.main`
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "sidebar outlet"
    "sidebar display";
  grid-template-columns: auto 1fr;

  @media only screen and (min-width: 1280px) {
    grid-template-areas: "sidebar outlet display";
    grid-template-columns: auto minmax(fit-content(0), 40em) 1fr;
  }
  @media only screen and (min-width: 1840px) {
    grid-template-areas: "sidebar outlet display";
    grid-template-columns: auto auto 1fr;
  }
`;
