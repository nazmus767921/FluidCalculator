import { ReactNode } from "react";
import styled from "styled-components";

const Tooltip = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <Body className={className}>
      <div className="arrow"></div>
      {children}
    </Body>
  );
};

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 100%;

  padding: 0.75em;
  margin-left: 3em;

  width: fit-content;
  height: 100%;

  display: none;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 1);
  color: #c8c8c8;
  border-radius: 5px;

  font-size: 0.75em;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;

  .arrow {
    width: 1em;
    height: 1em;

    background-color: #000000;
    border-radius: 2px;

    position: absolute;
    left: -0.25em;
    top: 50%;
    z-index: -1;
    transform: translateY(-50%) rotate(45deg);
  }
`;

export default Tooltip;
