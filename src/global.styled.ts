import { createGlobalStyle } from "styled-components";

export const GlobalStyleProvider = createGlobalStyle`
:root {
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

 background-color: ${(props) => props.theme.bg};
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  font-size: clamp(1rem, 0.9423076923076923rem + 0.2564102564102564vw, 1.25rem);
  min-width: 320px;
  min-height: 100vh;
}

a,button {
  font: inherit;
  color: inherit;
  background: inherit;
  appearance: none;
  border: none;
  -moz-appearance: none;
  cursor: pointer;
}

h1 {
  font-size: 1.953em;
}

input, input:focus {
  border: none;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Others */
}

::selection {
  background-color: ${(props) => props.theme.input};
}

::-moz-selection {
  background-color: ${(props) => props.theme.input};
}

img {
  width: 999em;
  max-width: 100%;
}


.icon {
  width: 100%;
  height: 100%;
}
`;
