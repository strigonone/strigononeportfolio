import React from "react";
import { Switch, Route } from "react-router-dom";
// import SideBar from "./Components/SideBar/SideBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import StrigonOneFFXIVWebsiteMoreDetails from "./Components/Portfolio/StrigonOneFFXIVWebsite/StrigonOneFFXIVMoreDetails";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route
				exact
				path="/StrigonOneFFXIVWebsiteMoreDetails"
				component={StrigonOneFFXIVWebsiteMoreDetails}
			/>
		</Switch>
	);
};

export default Router;
