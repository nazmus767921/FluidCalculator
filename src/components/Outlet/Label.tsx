import { ReactNode } from "react";
import { styled } from "styled-components";

type Props = {
  children: ReactNode;
  htmlFor: string;
  icon?: ReactNode;
};

const Label = ({ children, htmlFor, icon }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <div className="icon">{icon}</div>
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625em;

  font-size: 1.25em;
  font-weight: 500;

  color: ${(props) => props.theme.text};

  .icon {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    font-size: .85em;
  }
`;

export default Label;
