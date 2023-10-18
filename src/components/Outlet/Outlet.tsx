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
  const { remove_calculatedValues, calculatedValues } = useCalculatorContext();
  const [calculatorBlockHolder, setCalculatorBlockHolder] =
    useState<CalculatorBlockHolder>([...calculatedValues]);
  const lengthOfHolder = calculatorBlockHolder.length;

  const add_a_calculator: AddCalculator = () => {
    if (lengthOfHolder < 5) {
      setCalculatorBlockHolder((prevHolder) => [
        ...prevHolder,
        { id: crypto.randomUUID() },
      ]);
    }
  };
  const remove_calculator: RemoveCalculator = (id) => {
    setCalculatorBlockHolder((prevHolder) =>
      prevHolder.filter((calculatorBlock) => calculatorBlock.id !== id)
    );
    remove_calculatedValues(id);
  };

  return (
    <Section>
      <Header />
      {calculatorBlockHolder.map((blockRef, index: number) => (
        <CalculatorBlock
          key={blockRef.id}
          lengthOfHolder={lengthOfHolder}
          remove_calculator={remove_calculator}
          id={blockRef.id}
          add_a_calculator={add_a_calculator}
          isLastOfIndex={index === lengthOfHolder - 1}
        />
      ))}
    </Section>
  );
};

const Section = styled.div`
  grid-area: calculator;

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
