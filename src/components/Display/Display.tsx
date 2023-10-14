import React from "react";
import styled from "styled-components";

// type Props = {}

const Display = (): React.JSX.Element => {
	return <Section>Display</Section>;
};

const Section = styled.div`
	display: flex;
	background-color: ${(props) => props.theme["bg-syntax"]};
`;

export default Display;
