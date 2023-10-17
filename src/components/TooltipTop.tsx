import { ReactNode } from "react";
import styled from "styled-components";

export type TooltipID = string;

const TooltipTop = ({
  children,
  className,
  id,
  displayConditionId,
}: {
  children: ReactNode;
  className?: string;
  id: TooltipID;
  displayConditionId: TooltipID | null;
}) => {
  return (
    <Body
      className={className}
      style={
        id === displayConditionId ? { display: "flex" } : { display: "none" }
      }
    >
      <div className="arrow"></div>
      {children}
    </Body>
  );
};

const Body = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;

  transform: translateX(-50%);

  padding: 0.75em;
  margin-bottom: 1em;

  width: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  .condition {
    color: ${(props) => props.theme.input};
  }
  .symbol {
    font-size: 1.5em;
  }

  border-radius: 5px;
  background-color: #000000;
  color: #c8c8c8;

  font-size: 0.75em;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;
  z-index: 999;

  .arrow {
    width: 1em;
    height: 1em;

    border-radius: 2px;
    background-color: #000000;

    position: absolute;
    bottom: -0.25em;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export default TooltipTop;
