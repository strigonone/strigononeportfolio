import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";

const Portfolio = () => {
	return (
		<div>
			<SideBar />
			<div className="portfolioContent">
				<h1>PORTFOLIO</h1>
				<p>All work done by me</p>
				<StrigonOneFFXIVWebsite />
			</div>
		</div>
	);
};

export default Portfolio;
