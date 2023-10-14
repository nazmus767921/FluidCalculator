import { ReactNode, createContext, useContext, useReducer } from "react";
import { calculatorContextReducer as reducer } from "../reducers/calculatorReducer.ts";
import { CalculatedData } from "../../components/Outlet/CalculatorBlock.tsx";

export enum REDUCER_ACTION_TYPE {
  SET_CALCULATED_VALUES = "SET_CALCULATED_VALUES",
}
export type REDUCER_ACTION = {
  type: REDUCER_ACTION_TYPE;
  payload?: CalculatedData;
};
type Actions = {
  set_calculatedValues(payload: CalculatedData): void;
};

export type State = {
  calculatedValues: CalculatedData[] | [];
};
type Props = {
  children: ReactNode;
};
type CalculatorContextProviderType = ({ ...arg }: Props) => ReactNode;
type ContextValues = State & Actions;

// actual code
const calculatorContext = createContext<ContextValues | null>(null);

const initialState: State = {
  calculatedValues: [],
};

export const CalculatorContextProvider: CalculatorContextProviderType = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const set_calculatedValues: Actions["set_calculatedValues"] = (payload) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_CALCULATED_VALUES,
      payload: payload,
    });
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
