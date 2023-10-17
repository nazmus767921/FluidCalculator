import React from "react";
import styled from "styled-components";
import { ease } from "../utils/animations";
import Tooltip from "./TooltipLeft";

type Props = {
  children: React.ReactNode;
  tooltip: string;
};

const SocialIcon = ({ children, tooltip }: Props): React.ReactNode => {
  return (
    <Icon>
      <Tooltip className="tooltip">{tooltip}</Tooltip>
      {children}
    </Icon>
  );
};

const Icon = styled.button`
  width: 1.5em;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #d5d5d5;

  transition: color 0.35s ${ease["out-expo"]};
  &:hover,
  :focus {
    color: ${(props) => props.theme.text};
    .tooltip {
      display: flex;
    }
  }
`;

export default SocialIcon;
