import styled from "styled-components";
import Display from "../../components/Display/Display";
import Outlet from "../../components/Outlet/Outlet";

const HomePage = () => {
  return (
    <Layout>
      <Outlet />
      <Display />
    </Layout>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "calculator"
    "display";
  grid-template-columns: auto;

  @media only screen and (min-width: 1280px) {
    grid-template-areas: "calculator display";
    grid-template-columns: auto 1fr;
  }
  @media only screen and (min-width: 1840px) {
    grid-template-areas: "calculator display";
    grid-template-columns: auto 1fr;
  }
`;
export default HomePage;
