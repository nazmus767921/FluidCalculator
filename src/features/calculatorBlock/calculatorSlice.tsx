import { createSlice } from "@reduxjs/toolkit";

export type CalculatedData = {
  id: string;
  slope: number;
  yInterceptor: number;
  fontMin: number;
  fontMax: number;
  widthMin: number;
  widthMax: number;
}[];
interface InitialState {
  calculators: CalculatedData;
}

const initialState: InitialState = {
  calculators: [
    {
      id: "initialCalc",
      slope: 1,
      yInterceptor: 1,
      fontMin: 16,
      fontMax: 20,
      widthMin: 360,
      widthMax: 1920,
    },
  ],
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add_calculator: (state, action) => {
      state.calculators.push({
        id: action.payload,
        slope: 1,
        yInterceptor: 1,
        fontMin: 16,
        fontMax: 20,
        widthMin: 360,
        widthMax: 1920,
      });
    },
    remove_calculator: (state, action) => {
      state.calculators = state.calculators.filter(
        (calc) => calc.id !== action.payload
      );
    },
    update_calculator_values: (state, action) => {
      const { id, name, value } = action.payload;
      state.calculators = state.calculators.map((calc) => {
        if (calc.id === id) {
          return {
            ...calc,
            [name]: value,
          };
        }
        return calc;
      });
    },
    calculate_data: (state, action) => {
      const { id, slope, yInterceptor } = action.payload;

      state.calculators = state.calculators.map((calc) => {
        if (calc.id === id) {
          return {
            ...calc,
            slope,
            yInterceptor,
          };
        }
        return calc;
      });
    },
  },
});

export const {
  add_calculator,
  remove_calculator,
  update_calculator_values,
  calculate_data,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
