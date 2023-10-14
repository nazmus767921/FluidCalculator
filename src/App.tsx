import React from "react";
import { Layout } from "./App.layout";
import SideBar from "./components/SideBar";
import Outlet from "./components/Outlet/Outlet";
import Display from "./components/Display/Display";

const App = (): React.ReactNode => {
	return (
		<Layout>
			<div className="sidebar_placeholder" style={{ width: "7em" }}></div>
			<SideBar />
			<Outlet />
			<Display />
		</Layout>
	);
};

export default App;
