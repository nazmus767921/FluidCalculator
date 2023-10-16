import { ReactNode, memo } from "react";
import styled from "styled-components";
import { Measurements } from "./CalculatorBlock";
import Input from "./Input";
import Label from "./Label";

type Props = {
  icon?: ReactNode;
  name: "font-min" | "font-max" | "width-min" | "width-max";
  label: string;
  measurements: Measurements;
  update_input(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputBlock = memo(
  ({ measurements, update_input, name, label, icon }: Props) => {
    return (
      <Block>
        <Label htmlFor={name} icon={icon}>
          {label}
        </Label>
        <Input
          name={name}
          type={"number"}
          min={0}
          max={9999}
          value={measurements[name] !== 0 ? measurements[name] : null}
          onChange={update_input}
          width="7.8em"
        />
      </Block>
    );
  }
);

const Block = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  @media screen and (min-width: 1280px) {
    width: max-content;
  }
`;

export default InputBlock;
