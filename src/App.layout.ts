import styled from "styled-components";

export const Layout = styled.main`
	min-height: 100vh;

	display: grid;
	grid-template-areas: "sidebar outlet display";
	grid-template-columns: auto auto 1fr;
`;
