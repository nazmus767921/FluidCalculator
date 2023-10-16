import { ReactNode, memo, useCallback, useEffect, useState } from "react";
import { BsFillPhoneLandscapeFill, BsPhoneFill } from "react-icons/bs";
import { ImFontSize } from "react-icons/im";
import { IoTabletLandscape, IoTabletPortrait } from "react-icons/io5";
import { PiMonitorFill } from "react-icons/pi";
import { styled } from "styled-components";
import { useCalculatorContext } from "../../store/contexts/calculatorContext";
import AddBtn from "./AddBtn";
import InputBlock from "./InputBlock";
import { IDofCalculator, RemoveCalculator } from "./Outlet";
import { toast } from "react-toastify";

export type Value = number | null;
export type Measurements = {
  "font-min": Value;
  "font-max": Value;
  "width-min": Value;
  "width-max": Value;
};
const initialState: Measurements = {
  "font-min": 16,
  "font-max": 20,
  "width-min": 360,
  "width-max": 1920,
};

export interface CalculatedData {
  id: string;
  slope: number;
  yInterceptor: number;
  fontMax: number;
  fontMin: number;
  widthMin: number;
  widthMax: number;
}

const warnToast = (content: string): void => {
  toast.warn(content, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const CalculatorBlock = memo(
  ({
    id,
    isLastOfIndex = true,
    add_a_calculator,
    remove_calculator,
  }: {
    id: IDofCalculator;
    isLastOfIndex: boolean;
    add_a_calculator(): void;
    remove_calculator: RemoveCalculator;
  }): React.JSX.Element => {
    const [measurements, setMeasurements] = useState(initialState);
    const { set_calculatedValues } = useCalculatorContext();

    const {
      "font-max": fontMax,
      "font-min": fontMin,
      "width-min": widthMin,
      "width-max": widthMax,
    } = measurements as { [keys: string]: number };

    const setValuesToGlobalContext = useCallback(() => {
      if (Object.values(measurements).every((value) => value !== 0)) {
        if (!(fontMin >= fontMax) && !(widthMin >= widthMax)) {
          const slope: number = (fontMax - fontMin) / (widthMax - widthMin);
          const yInterceptor = fontMin - slope * widthMin;
          set_calculatedValues({
            id,
            slope,
            yInterceptor,
            fontMax,
            fontMin,
            widthMin,
            widthMax,
          });
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [measurements]);

    useEffect(() => {
      if (fontMin >= fontMax) {
        warnToast("Font Max must be greater than Font Min");
      }
      if (widthMin >= widthMax) {
        warnToast("Width Max must be greater than Width Min");
      }
      setValuesToGlobalContext();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [measurements]);

    // input actions
    const update_input = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      if (Number(value) !== null) {
        const newState = { ...measurements, [name]: Number(value) };
        setMeasurements(newState);
      }
    };

    // get icons based on input value
    const getDeviceIcon = (value: number): ReactNode => {
      if (value >= 0 && value < 320) {
        return "?";
      }
      if (value >= 320 && value < 512) {
        return <BsPhoneFill />;
      }
      if (value >= 512 && value < 768) {
        return <BsFillPhoneLandscapeFill />;
      }
      if (value >= 768 && value < 991) {
        return <IoTabletPortrait />;
      }
      if (value >= 991 && value < 1024) {
        return <IoTabletLandscape />;
      }
      return <PiMonitorFill />;
    };

    return (
      <Wrapper>
        {/* Minimum */}
        <SimilarBlockContainer>
          <InputBlock
            icon={<ImFontSize />}
            measurements={measurements}
            update_input={update_input}
            name="font-min"
            label="Min Font-size"
          />
          <InputBlock
            icon={<ImFontSize />}
            measurements={measurements}
            update_input={update_input}
            name="font-max"
            label="Max Font-size"
          />
        </SimilarBlockContainer>
        {/* Minimum */}
        {/* Maximum */}
        <SimilarBlockContainer>
          <InputBlock
            icon={getDeviceIcon(measurements["width-min"]!)}
            measurements={measurements}
            update_input={update_input}
            name="width-min"
            label="Min Width"
          />
          <InputBlock
            icon={getDeviceIcon(measurements["width-max"]!)}
            measurements={measurements}
            update_input={update_input}
            name="width-max"
            label="Max Width"
          />
        </SimilarBlockContainer>
        {/* Maximum */}
        <AddBtn
          id={id}
          add_a_calculator={add_a_calculator}
          remove_calculator={remove_calculator}
          isLastOfIndex={isLastOfIndex}
        />
      </Wrapper>
    );
  }
);

const SimilarBlockContainer = styled.div`
  width: min(100%, 25em);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: max-content;
  }
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

  padding: 4.06em;

  @media screen and (min-width: 1840px) {
    padding-inline: 2em;
    flex-direction: row;
  }

  /* design */
  border-block: 1px solid rgba(27, 22, 66, 0.1);
`;

export default CalculatorBlock;
