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
  top: 50%;
  left: 100%;
  transform: translateY(-50%);

  padding: 0.25em 0.75em;
  margin-left: 3em;

  width: max-content;
  height: fit-content;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  @media screen and (min-width: 1280px) {
    background-color: #000000;
    color: #c8c8c8;
  }

  font-size: 0.75em;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;

  .arrow {
    width: 1em;
    height: 1em;

    background-color: #ffffff;
    border-radius: 2px;
    @media screen and (min-width: 1280px) {
      background-color: #000000;
    }

    position: absolute;
    left: -0.25em;
    top: 50%;
    z-index: -1;
    transform: translateY(-50%) rotate(45deg);
  }
`;

export default Tooltip;
