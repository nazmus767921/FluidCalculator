import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import CalculatorBlock from "./CalculatorBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  add_calculator,
  remove_calculator as remove_a_calculator,
} from "../../features/calculatorBlock/calculatorSlice";
import { nanoid } from "@reduxjs/toolkit";
import { RootStore } from "../../store/store";

export type AddCalculator = () => void;
export type RemoveCalculator = (id: string) => void;

const CalculatorOutlet = (): ReactNode => {
  const dispatch = useDispatch();
  const { calculators } = useSelector((store: RootStore) => store.calculators);
  const lengthOfHolder = calculators.length;

  const add_a_calculator: AddCalculator = () => {
    if (lengthOfHolder < 5) {
      dispatch(add_calculator(nanoid()));
    }
  };
  const remove_calculator: RemoveCalculator = (id) => {
    dispatch(remove_a_calculator(id));
  };

  return (
    <Section>
      <Header />
      {calculators.map((calcRef, index: number) => (
        <CalculatorBlock
          key={calcRef.id}
          lengthOfHolder={lengthOfHolder}
          remove_calculator={remove_calculator}
          id={calcRef.id}
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
  height: 100%;

  background-color: ${(props) => props.theme.bg};
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 1280px) {
    min-height: 100vh;

    border-bottom-left-radius: 0;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
  }
`;

export default CalculatorOutlet;
