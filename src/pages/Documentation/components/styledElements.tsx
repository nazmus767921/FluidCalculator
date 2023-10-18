import styled from "styled-components";
import { border } from "../../../styles";

export const H1 = styled.h1`
  font-size: 1.5em;
  color: ${(props) => props.theme.text};
  padding-block: 0.5em;

  margin-block: 0.5em;

  border-bottom: ${border["--border-sm-solid"]} rgba(27, 22, 66, 0.1);
`;
