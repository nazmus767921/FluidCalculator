import Display from "../../components/Display/Display";
import CalculatorOutlet from "../../components/Outlet/CalculatorOutlet";
import { Layout } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Layout>
      <CalculatorOutlet />
      <Display />
    </Layout>
  );
};
export default HomePage;
