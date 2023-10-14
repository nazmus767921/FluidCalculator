import { CalculatedData } from "../../components/Outlet/CalculatorBlock";
import {
  REDUCER_ACTION_TYPE,
  REDUCER_ACTION,
  State,
} from "../contexts/calculatorContext";

export const calculatorContextReducer = (
  state: State,
  action: REDUCER_ACTION
): State => {
  if (action.type === REDUCER_ACTION_TYPE.SET_CALCULATED_VALUES) {
    const data: CalculatedData = {
      id: action.payload!.id,
      fontMin: action.payload!.fontMin,
      fontMax: action.payload!.fontMax,
      widthMin: action.payload!.widthMin,
      widthMax: action.payload!.widthMax,
      slope: action.payload!.slope,
      yInterceptor: action.payload!.yInterceptor,
    };

    const newCalculatedValues = () => {
      if (state.calculatedValues.find((value) => value.id === data.id)) {
        return state.calculatedValues.map((value) => {
          if (value.id === data.id) {
            return data;
          }
          return value;
        });
      }
      return [...state.calculatedValues, data];
    };

    return { ...state, calculatedValues: newCalculatedValues()! };
  }
  return { ...state };
};
