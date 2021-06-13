import React from "react";
import { Switch, Route } from "react-router-dom";
// import SideBar from "./Components/SideBar/SideBar";
import Portfolio from "./Components/Portfolio/Portfolio";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Portfolio} />
		</Switch>
	);
};

export default Router;
