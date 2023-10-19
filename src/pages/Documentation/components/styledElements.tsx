import styled from "styled-components";
import { border } from "../../../styles";

export const H1 = styled.h1`
  width: 100%;
  font-size: 1.5em;
  color: ${(props) => props.theme.text};
  padding-block: 0.5em;

  margin-block: 0.5em;

  border-bottom: ${border["--border-sm-solid"]} rgba(27, 22, 66, 0.166);
`;

export const H3 = styled(H1)`
  font-size: 1em;
`;

export const Block = styled.span`
  font-size: 80%;
  padding: 0.125em 0.25em;
  background-color: #454a52;
  border-radius: 0.35em;
  color: ${(props) => props.theme.bg};
`;
