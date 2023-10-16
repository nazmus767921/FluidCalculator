import styled from "styled-components";
import { Value } from "./CalculatorBlock";

type Props = {
  name: string;
  type: "text" | "number" | "checkbox";
  id?: string;
  min?: number;
  max?: number;
  value: Value;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  width?: string;
  height?: string;
};

const Input = ({
  name,
  type,
  id,
  min,
  max,
  value,
  onChange,
  width,
  height,
}: Props) => {
  return (
    <Container style={{ minWidth: width, minHeight: height }}>
      <div className="px">px</div>
      <InputElement
        name={name}
        type={type}
        id={id || name}
        min={min}
        max={max}
        value={value!}
        onChange={onChange}
        onInput={(e) => {
          const inputValue = Number(e.currentTarget.value);
          if (inputValue > 9999) {
            e.currentTarget.value = "9999";
          }
        }}
      />
    </Container>
  );
};

const InputElement = styled.input`
  width: 100%;

  display: flex;
  padding: var(--padding);
  justify-content: flex-end;
  align-items: center;
  gap: 102px;

  border-radius: 0.25em;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.input};

  font-size: 1em;
  font-weight: 500;

  &:focus {
    outline: ${(props) => props.theme.input} solid 2px;
  }
`;

const Container = styled.div`
  width: 100%;
  --padding: 0.8rem;

  position: relative;

  .px {
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.input};

    padding-right: var(--padding);

    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export default Input;
