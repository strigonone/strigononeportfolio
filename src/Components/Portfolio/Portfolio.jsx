import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";
import Typography from "@material-ui/core/Typography";

const Portfolio = () => {
	return (
		<div>
			<SideBar />
			<div className="portfolioContent">
				<div className="portfolioContentText">
					<Typography variant="h4">PORTFOLIO</Typography>
					<Typography variant="subtitle1">All work done by me hahah</Typography>
				</div>
				<StrigonOneFFXIVWebsite />
				<StrigonOneFFXIVWebsite />
			</div>
		</div>
	);
};

export default Portfolio;
