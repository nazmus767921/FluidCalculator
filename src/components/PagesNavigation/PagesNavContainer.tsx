import styled from "styled-components";
import { RouteAddress, documentation_route } from "../../pages/pages.routes";
import { IoDocumentText } from "react-icons/io5";
import SocialIcon from "../SocialIcon";

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
  ];

  return (
    <Container>
      {pagesNav.map(
        (nav: NavItem): React.ReactNode => (
          <a href={nav.link} key={crypto.randomUUID()}>
            <SocialIcon tooltip={nav.tooltip}>{nav.icon}</SocialIcon>
          </a>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  height: 100%;
  padding-block: 1.25em;
`;

export default PagesNavContainer;
