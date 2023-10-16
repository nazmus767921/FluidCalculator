import { Layout } from "./App.layout";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer toastClassName={"toast"} />
      <Layout>
        <div
          className="sidebar_placeholder"
          style={{ width: "5em", gridArea: "sidebar" }}
        ></div>
        <SideBar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </Layout>
    </>
  );
};

export default App;
