import styled from "styled-components";
import { IoIosRemoveCircle, IoIosAddCircle } from "react-icons/io";
import { ease } from "../../utils/animations";
import { RemoveCalculator } from "./Outlet";
import { TooltipID } from "../TooltipTop";

const AddBtn = ({
  id,
  showTooltip,
  lengthOfHolder,
  isLastOfIndex,
  add_a_calculator,
  remove_calculator,
}: {
  id: string;
  showTooltip: (id: TooltipID, condition: boolean) => (() => void) | undefined;
  lengthOfHolder: number;
  isLastOfIndex: boolean;
  add_a_calculator(): void;
  remove_calculator: RemoveCalculator;
}) => {
  const iconStyle = { width: "2em", height: "auto" };

  if (isLastOfIndex === true) {
    return (
      <Btn
        type="button"
        onClick={() => {
          add_a_calculator();
          showTooltip(id, lengthOfHolder === 5);
        }}
      >
        <IoIosAddCircle style={iconStyle} />
      </Btn>
    );
  }
  return (
    <Btn
      type="button"
      className="remove"
      onClick={() => {
        remove_calculator(id);
      }}
    >
      <IoIosRemoveCircle style={iconStyle} />
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.icon};

  transition: color 0.35s ${ease["out-expo"]};
  &:hover {
    color: ${(props) => props.theme.text};
  }
  &.remove {
    color: ${(props) => props.theme.input};
    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`;

export default AddBtn;
