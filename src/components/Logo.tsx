import React from "react";
import styled from "styled-components";
import LogoSVG from "../assets/Logo.svg";

const Logo = ({ className }: { className?: string }): React.JSX.Element => {
	return (
		<Wrapper className={className}>
			<div className="logo-element">
				<img src={LogoSVG} alt="Brand Logo" />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	aspect-ratio: 1;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Logo;
