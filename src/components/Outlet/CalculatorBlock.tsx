import { useEffect, useState } from "react";
import InputBlock from "./InputBlock";
import { styled } from "styled-components";
import AddBtn from "./AddBtn";
import { IDofCalculator, RemoveCalculator } from "./Outlet";
import { ImFontSize } from "react-icons/im";
import { BsPhoneFill } from "react-icons/bs";
import { PiMonitorFill } from "react-icons/pi";

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

const CalculatorBlock = ({
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
	const [slope, setSlope] = useState(0);
	const [yInterceptor, setYInterceptor] = useState(0);

	const {
		"font-max": fontMax,
		"font-min": fontMin,
		"width-min": widthMin,
		"width-max": widthMax,
	} = measurements;

	useEffect(() => {
		if (Object.values(measurements).every((value) => value !== 0)) {
			if (
				fontMin !== null &&
				fontMax !== null &&
				widthMin !== null &&
				widthMax !== null
			) {
				if (!(fontMin >= fontMax) && !(widthMin >= widthMax)) {
					const slope: number = (fontMax - fontMin) / (widthMax - widthMin);
					const yInterceptor = fontMin - slope * widthMin;
					setSlope(slope);
					setYInterceptor(yInterceptor);
				}
			}
		}
	}, [measurements]);

	console.log("slope:", slope, "y:", yInterceptor);

	// input actions
	const update_input = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		if (Number(value) !== null) {
			const newState = { ...measurements, [name]: Number(value) };
			setMeasurements(newState);
		}
	};

	return (
		<Wrapper>
			<code>
				font-size: clamp({fontMin / 16}rem, {(slope * 100).toFixed(5)}vw +{" "}
				{(yInterceptor / 16).toFixed(5)}rem, {fontMax / 16}rem)
			</code>
			{/* Minimum */}
			<InputBlock
				icon={<ImFontSize />}
				measurements={measurements}
				update_input={update_input}
				name="font-min"
				label="Min Font-size"
			/>
			<InputBlock
				icon={<BsPhoneFill />}
				measurements={measurements}
				update_input={update_input}
				name="width-min"
				label="Min Width"
			/>
			{/* Minimum */}
			<Divider />
			{/* Maximum */}
			<InputBlock
				icon={<ImFontSize />}
				measurements={measurements}
				update_input={update_input}
				name="font-max"
				label="Max Font-size"
			/>
			<InputBlock
				icon={<PiMonitorFill />}
				measurements={measurements}
				update_input={update_input}
				name="width-max"
				label="Max Width"
			/>
			{/* Maximum */}
			<AddBtn
				id={id}
				add_a_calculator={add_a_calculator}
				remove_calculator={remove_calculator}
				isLastOfIndex={isLastOfIndex}
			/>
		</Wrapper>
	);
};

const Divider = styled.div`
	margin-inline: 3em;
`;

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1.88em;

	padding: 4.06em;

	/* design */
	border-block: 1px dotted;
`;

export default CalculatorBlock;
