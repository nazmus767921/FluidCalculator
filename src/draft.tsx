const codeHighlighterStyle: CSSProperties = {
  padding: "2em",
  borderRadius: "0.5em",
};

<SyntaxHighlighter
language="css"
style={atomOneDark}
customStyle={codeHighlighterStyle}
showLineNumbers
>
{`/* Copy the code in index.css or  your main stylesheet / global styled component */
@media only screen and (min-width: ${widthMin}px and max-width: ${widthMax}px) {
  font-size: clamp(${getRem(fontMin)}, ${(slope * 100).toFixed(5)}vw + ${(
  yInterceptor / 16
).toFixed(5)}rem, ${fontMax / 16}rem);
};`}
</SyntaxHighlighter>