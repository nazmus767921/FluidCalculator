import styled, { CSSProperties } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  children: string | undefined;
}

const codeHighlighterStyle: CSSProperties = {
  padding: "1em",
  borderRadius: "0.5em",
  maxWidth: "100%",
  overflowX: "hidden",
  marginBlock: "3em",
};

const CodeBlock = ({ children }: Props) => {
  return (
    <Code>
      <SyntaxHighlighter
        language="css"
        style={materialDark}
        showLineNumbers
        customStyle={codeHighlighterStyle}
      >
        {children ?? "provide a string value"}
      </SyntaxHighlighter>
    </Code>
  );
};

const Code = styled.div`
  width: 100%;
  font-size: 0.8em;
  margin-inline: auto;
`;

export default CodeBlock;
