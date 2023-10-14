import styled from "styled-components";
import SocialIcon from "./SocialIcon";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import React from "react";

// type Props = {}

const SocialsContainer = (): React.ReactNode => {
	type IconData = {
		link: string;
		icon: React.ReactNode;
	};

	const icons: IconData[] = [
		{ link: "https://t.me/founded_404", icon: <FaTelegramPlane className="icon" /> },
		{ link: "https://github.com/nazmus767921", icon: <FaGithub className="icon" /> },
		{ link: "mailto:nazmus767921@gmail.com/", icon: <BsMailbox2 className="icon" /> },
	];
	return (
		<Container>
			{icons.map(
				(iconData: IconData): React.ReactNode => (
					<a href={iconData.link} key={crypto.randomUUID()}>
						<SocialIcon>{iconData.icon}</SocialIcon>
					</a>
				)
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1.125em;
`;

export default SocialsContainer;
