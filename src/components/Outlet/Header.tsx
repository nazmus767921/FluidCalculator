// type Props = {}

import styled from "styled-components";

const Header = () => {
	return (
		<Wrapper>
			<h1>Fluid Calculator</h1>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	height: 12em;

	padding: 0 3em;
	padding-top: 5em;

	text-transform: capitalize;
	color: ${(props) => props.theme.text};

`;

export default Header;
