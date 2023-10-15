import React from "react";
import styled, { CSSProperties } from "styled-components";
import { useCalculatorContext } from "../../store/contexts/calculatorContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getRem } from "../../helpers/getRem";

const Display = (): React.JSX.Element => {
  const { calculatedValues } = useCalculatorContext();

  const codeHighlighterStyle: CSSProperties = {
    padding: "2em",
    borderRadius: "0.5em",
    maxWidth: "100%",
    overflowX: "hidden",
  };

  return (
    <Section>
      <div className="container">
        {calculatedValues.map((c) => {
          const { slope, yInterceptor, fontMax, fontMin, widthMin, widthMax } =
            c;
          return (
            <div className="syntax">
              <SyntaxHighlighter
                language="css"
                style={materialDark}
                showLineNumbers
                customStyle={codeHighlighterStyle}
              >
                {`@media screen and (min-width: ${widthMin}px) and (max-width: ${widthMax}px) {
    html {
      font-size: 1rem; /* browser support fallback */
      font-size: clamp(${getRem(fontMin)}, ${(slope * 100).toFixed(5)}vw + ${(
                  yInterceptor / 16
                ).toFixed(5)}rem, ${fontMax / 16}rem);
    }
  };`}
              </SyntaxHighlighter>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.div`
  grid-area: display;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  padding-top: 2em;
  padding-inline: 2em;

  background-color: ${(props) => props.theme["bg-syntax"]};
  .syntax {
    font-size: 1em;
    padding-block: 1em;
  }
  @media screen and (min-width: 1280px) {
  padding-top: 12em;

    .syntax {
      font-size: 0.8em;
    }
  }
  .container {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export default Display;
