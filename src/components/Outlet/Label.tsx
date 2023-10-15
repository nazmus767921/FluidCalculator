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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625em;

  font-size: 0.9375em;
  font-weight: 500;

  opacity: 0.7;
  color: ${(props) => props.theme.text};

  .icon {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Label;
