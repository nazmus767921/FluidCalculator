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
    return { ...state, calculatedValues: action.payload ?? [] };
  }
  return { ...state };
};
