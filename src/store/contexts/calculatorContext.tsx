import { ReactNode, createContext, useContext, useReducer } from "react";
import { calculatorContextReducer as reducer } from "../reducers/calculatorReducer.ts";

export enum REDUCER_ACTION_TYPE {
  SET_CALCULATED_VALUES,
}

export type REDUCER_ACTION = {
  type: REDUCER_ACTION_TYPE;
  payload?: CalculatedValuesType;
};

type CalculatedValuesType = {
  id: number | string;
  widthMin: number;
  widthMax: number;
  fontMin: number;
  fontMax: number;
}[];

export type State = {
  calculatedValues: CalculatedValuesType | [];
};
type CalculatorContext = State;
type Props = {
  children: ReactNode;
};
type CalculatorContextProviderType = ({ ...arg }: Props) => ReactNode;
type Actions = {
  set_calculatedValues(): void;
};
type ContextValues = State & Actions;

// actual code
const calculatorContext = createContext<CalculatorContext | null>(null);

const initialState: State = {
  calculatedValues: [],
};

export const CalculatorContextProvider: CalculatorContextProviderType = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const set_calculatedValues = (): void => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_CALCULATED_VALUES });
  };

  const contextValues: ContextValues = {
    ...state,
    set_calculatedValues,
  };

  return (
    <calculatorContext.Provider value={contextValues}>
      {children}
    </calculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const theCalculatorContext = useContext(calculatorContext);

  if (!theCalculatorContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return theCalculatorContext;
};
