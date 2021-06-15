import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";
import Typography from "@material-ui/core/Typography";
import LevelUpWorksWebsite from "./LevelUpWorks/LevelUpWorksWebsite";
import ScrollToTop from "../ScrollToTopButton/ScrollToTop";

const Portfolio = () => {
	return (
		<div>
			<SideBar />
			<ScrollToTop showBelow={250} />
			<div className="portfolioContent">
				<div className="portfolioContentText">
					<Typography variant="h4">PORTFOLIO</Typography>
					<Typography variant="subtitle1">
						Majority of the work is done by me, unless stated team collaboration
					</Typography>
				</div>
				<LevelUpWorksWebsite />
				<StrigonOneFFXIVWebsite />
			</div>
		</div>
	);
};

export default Portfolio;
