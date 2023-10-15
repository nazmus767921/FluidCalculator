import { ReactNode, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CalculatorBlock from "./CalculatorBlock";
import { useCalculatorContext } from "../../store/contexts/calculatorContext";

export type IDofCalculator = string;

type CalculatorBlockHolder = { id: IDofCalculator }[] | [];

export type AddCalculator = () => void;
export type RemoveCalculator = (id: IDofCalculator) => void;

const Outlet = (): ReactNode => {
  const [calculatorBlockHolder, setCalculatorBlockHolder] =
    useState<CalculatorBlockHolder>([{ id: crypto.randomUUID() }]);
  const lengthOfHolder = calculatorBlockHolder.length;
  const { remove_calculatedValues } = useCalculatorContext();

  const add_a_calculator: AddCalculator = () => {
    if (lengthOfHolder <= 5) {
      setCalculatorBlockHolder([
        ...calculatorBlockHolder,
        { id: crypto.randomUUID() },
      ]);
    }
  };
  const remove_calculator: RemoveCalculator = (id) => {
    const newCalculatorBlockHolder = calculatorBlockHolder.filter(
      (calculatorBlock) => calculatorBlock.id !== id
    );
    remove_calculatedValues(id);
    setCalculatorBlockHolder(newCalculatorBlockHolder);
  };

  return (
    <Section>
      <Header />
      {calculatorBlockHolder.map((blockRef, index: number) => {
        return (
          <CalculatorBlock
            key={blockRef.id}
            remove_calculator={remove_calculator}
            id={blockRef.id}
            add_a_calculator={add_a_calculator}
            isLastOfIndex={index === lengthOfHolder - 1}
          />
        );
      })}
    </Section>
  );
};

const Section = styled.div`
  grid-area: outlet;

  width: 100%;
  /* min-width: fit-content; */
  height: 100%;
  @media screen and (min-width: 1280px) {
    min-height: 100vh;
  }
  

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Outlet;
