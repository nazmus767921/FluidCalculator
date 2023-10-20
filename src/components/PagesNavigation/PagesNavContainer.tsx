import styled from "styled-components";
import {
  RouteAddress,
  documentation_route,
  additional_features,
} from "../../pages/pages.routes";
import { IoDocumentText } from "react-icons/io5";
import SocialIcon from "../SocialIcon";
import { NavLink } from "react-router-dom";
import { ease } from "../../utils/animations";
import { IoIosMore } from "react-icons/io";

const PagesNavContainer = () => {
  type NavItem = {
    link: RouteAddress;
    icon: React.ReactNode;
    tooltip: string;
  };

  const pagesNav: NavItem[] = [
    {
      link: documentation_route,
      icon: <IoDocumentText className="icon" />,
      tooltip: "read documentation",
    },
    {
      link: additional_features,
      icon: <IoIosMore className="icon" />,
      tooltip: "More features",
    },
  ];

  return (
    <Container>
      {pagesNav.map(
        (nav: NavItem): React.ReactNode => (
          <NavLink to={nav.link} key={crypto.randomUUID()} className="navLink">
            <SocialIcon tooltip={nav.tooltip} className="NavIcon">
              {nav.icon}
            </SocialIcon>
            <Selector />
          </NavLink>
        )
      )}
    </Container>
  );
};

const Selector = styled.div`
  width: var(--selector-width);
  background-color: ${(props) => props.theme.input};
  border-radius: 50em;
  height: 3em;
  transition: all 0.5s ${ease["out-expo"]};
  transform: translateX(1em);
  opacity: 0;
`;

const Container = styled.div`
  --selector-width: 0.15em;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  height: 100%;
  padding-block: 1.25em;

  .navLink {
    display: flex;
    align-items: center;
    /* overflow: hidden; */
  }

  .NavIcon {
    --navIcon-padding: 1.5em;
    width: 100%;
    padding: var(--navIcon-padding);
    padding-left: calc(var(--navIcon-padding) + var(--selector-width));
  }

  svg {
    transition: all 0.5s ${ease["out-expo"]};
  }

  .active {
    svg {
      color: ${(props) => props.theme.input};
    }
    ${Selector} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default PagesNavContainer;
