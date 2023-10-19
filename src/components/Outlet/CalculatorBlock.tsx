import { ReactNode, memo, useCallback, useEffect, useState } from "react";
import { BsFillPhoneLandscapeFill, BsPhoneFill } from "react-icons/bs";
import { ImFontSize } from "react-icons/im";
import { IoTabletLandscape, IoTabletPortrait } from "react-icons/io5";
import { PiMonitorFill } from "react-icons/pi";
import { styled } from "styled-components";
import AddBtn from "./AddBtn";
import InputBlock from "./InputBlock";
import { RemoveCalculator } from "./Outlet";
import TooltipTop, { TooltipID } from "../TooltipTop";
import { useDispatch } from "react-redux";
import {
  calculate_data,
  update_calculator_values,
} from "../../features/calculatorBlock/calculatorSlice";

export interface CalculatedData {
  id: string;
  slope: number;
  yInterceptor: number;
  fontMax: number;
  fontMin: number;
  widthMin: number;
  widthMax: number;
}

const CalculatorBlock = memo(
  ({
    id,
    isLastOfIndex = true,
    add_a_calculator,
    remove_calculator,
    lengthOfHolder,
  }: {
    id: string;
    isLastOfIndex: boolean;
    add_a_calculator(): void;
    remove_calculator: RemoveCalculator;
    lengthOfHolder: number;
  }): React.JSX.Element => {
    const [fontMin, setFontMin] = useState(16);
    const [fontMax, setFontMax] = useState(20);
    const [widthMin, setWidthMin] = useState(360);
    const [widthMax, setWidthMax] = useState(1920);

    const dispatch = useDispatch();

    const inputHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        const NValue: number = Number(value);
        if (NValue !== null) {
          name === "fontMin"
            ? setFontMin(NValue)
            : name === "fontMax"
            ? setFontMax(NValue)
            : name === "widthMin"
            ? setWidthMin(NValue)
            : name === "widthMax"
            ? setWidthMax(NValue)
            : null;

          dispatch(update_calculator_values({ id, name, value }));
        }
      },
      [dispatch, id]
    );

    useEffect(() => {
      const slope: number = (fontMax - fontMin) / (widthMax - widthMin);
      const yInterceptor = fontMin - slope * widthMin;
      dispatch(calculate_data({ id, slope, yInterceptor }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fontMin, fontMax, widthMin, widthMax]);

    const [tooltipDisplayID, setTooltipDisplayID] = useState<TooltipID | null>(
      null
    );
    const showTooltip = useCallback((id: TooltipID, condition: boolean) => {
      if (condition === true) {
        setTooltipDisplayID(id);
        const timeoutId = setTimeout(() => {
          setTooltipDisplayID(null);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    }, []);

    // const setValuesToGlobalContext = useCallback(() => {
    //   if (Object.values(measurements).every((value) => value !== 0)) {
    //     if (!(fontMin >= fontMax) && !(widthMin >= widthMax)) {
    //       const slope: number = (fontMax - fontMin) / (widthMax - widthMin);
    //       const yInterceptor = fontMin - slope * widthMin;
    //       set_calculatedValues({
    //         id,
    //         slope,
    //         yInterceptor,
    //         fontMax,
    //         fontMin,
    //         widthMin,
    //         widthMax,
    //       });
    //     }
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [measurements]);

    useEffect(() => {
      fontMin >= fontMax
        ? setTooltipDisplayID("font")
        : setTooltipDisplayID("null");
    }, [fontMin, fontMax]);

    useEffect(() => {
      widthMin >= widthMax
        ? setTooltipDisplayID("width")
        : setTooltipDisplayID("null");
    }, [widthMin, widthMax]);

    // useEffect(() => {
    //   setValuesToGlobalContext();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [measurements]);

    // input actions
    // const update_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { name, value } = e.currentTarget;
    //   if (Number(value) !== null) {
    //     const newState = { ...measurements, [name]: Number(value) };
    //     setMeasurements(newState);
    //   }
    // };

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
          <TooltipTop id={"font"} displayConditionId={tooltipDisplayID}>
            <p>
              <span className="condition">Max Font-size</span> must be{" "}
              <span className="symbol">{">"}</span>{" "}
              <span className="condition">Min Font-size</span>
            </p>
          </TooltipTop>
          <InputBlock
            id={id}
            icon={<ImFontSize />}
            value={fontMin}
            // measurements={measurements}
            update_input={(e) => inputHandler(e)}
            name="fontMin"
            label="Min Font-size"
          />
          <InputBlock
            id={id}
            icon={<ImFontSize />}
            value={fontMax}
            // measurements={measurements}
            update_input={(e) => inputHandler(e)}
            name="fontMax"
            label="Max Font-size"
          />
        </SimilarBlockContainer>
        {/* Minimum */}
        {/* Maximum */}
        <SimilarBlockContainer>
          <TooltipTop id={"width"} displayConditionId={tooltipDisplayID}>
            <p>
              <span className="condition">Max width</span> must be{" "}
              <span className="symbol">{">"}</span>{" "}
              <span className="condition">Min width</span>
            </p>
          </TooltipTop>
          <InputBlock
            id={id}
            icon={getDeviceIcon(widthMin)}
            value={widthMin}
            // measurements={measurements}
            update_input={(e) => inputHandler(e)}
            name="widthMin"
            label="Min Width"
          />
          <InputBlock
            id={id}
            icon={getDeviceIcon(widthMax)}
            value={widthMax}
            // measurements={measurements}
            update_input={(e) => inputHandler(e)}
            name="widthMax"
            label="Max Width"
          />
        </SimilarBlockContainer>
        {/* Maximum */}
        <div className="position-relative">
          <TooltipTop id={id} displayConditionId={tooltipDisplayID}>
            <p>
              Can't add more than <span className="condition symbol">5</span>,{" "}
              <span className="condition">Dev!</span> &#128128;
            </p>
          </TooltipTop>
          <AddBtn
            id={id}
            lengthOfHolder={lengthOfHolder}
            showTooltip={showTooltip}
            add_a_calculator={add_a_calculator}
            remove_calculator={remove_calculator}
            isLastOfIndex={isLastOfIndex}
          />
        </div>
      </Wrapper>
    );
  }
);

// styled components
const SimilarBlockContainer = styled.div`
  width: min(100%, 25em);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;

  position: relative;

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

  .position-relative {
    position: relative;
  }
`;

export default CalculatorBlock;
