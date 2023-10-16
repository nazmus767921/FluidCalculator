import React from "react";
import styled from "styled-components";
import { ease } from "../utils/animations";

type Props = {
  children: React.ReactNode;
};

const SocialIcon = ({ children }: Props): React.ReactNode => {
  return <Icon>{children}</Icon>;
};

const Icon = styled.button`
  width: 1.5em;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #d5d5d5;

  transition: color 0.35s ${ease["out-expo"]};
  &:hover,
  :focus {
    color: ${(props) => props.theme.text};
  }
`;

export default SocialIcon;
