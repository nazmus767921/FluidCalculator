import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculatorBlock/calculatorSlice";

export type RootStore = {
  calculators: ReturnType<typeof calculatorSlice>;
};

export const store = configureStore({
  reducer: {
    calculators: calculatorSlice,
  },
});
