import { ReactNode, memo } from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

type Props = {
  id: string;
  icon?: ReactNode;
  name: "fontMin" | "fontMax" | "widthMin" | "widthMax";
  label: string;
  // measurements: Measurements;
  value: number | "";
  update_input(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputBlock = memo(
  ({ id, value, update_input, name, label, icon }: Props) => {
    return (
      <Block>
        <Label htmlFor={id + name} icon={icon}>
          {label}
        </Label>
        <Input
          id={id + name}
          name={name}
          type={"number"}
          min={0}
          max={9999}
          value={value !== 0 ? value : ""}
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

  position: relative;

  @media screen and (min-width: 1280px) {
    width: max-content;
  }
`;

export default InputBlock;
