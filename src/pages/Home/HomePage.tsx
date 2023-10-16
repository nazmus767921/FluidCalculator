import Display from "../../components/Display/Display";
import Outlet from "../../components/Outlet/Outlet";
import { Layout } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Layout>
      <Outlet />
      <Display />
    </Layout>
  );
};
export default HomePage;
