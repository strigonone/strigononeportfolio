import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PortfolioStyle.css";
import StrigonOneFFXIVWebsite from "./StrigonOneFFXIVWebsite/StrigonOneFFXIVWebsite";
import Typography from "@material-ui/core/Typography";
import LevelUpWorksWebsite from "./LevelUpWorks/LevelUpWorksWebsite";
import ScrollToTop from "../ScrollToTopButton/ScrollToTop";
import Container from "@material-ui/core/Container";
import "@fontsource/advent-pro";

const Portfolio = () => {
	return (
		<div>
			<SideBar />
			<ScrollToTop showBelow={250} />
			<Container maxWidth="lg">
				{/* <div className="portfolioContent"> */}
				<div className="portfolioContentText">
					<Typography variant="h4" style={{ fontFamily: "Advent Pro" }}>
						PORTFOLIO
					</Typography>
					<Typography variant="subtitle1" style={{ fontFamily: "Advent Pro" }}>
						Majority of the work is done by me, unless stated team collaboration
					</Typography>
				</div>
				<LevelUpWorksWebsite />
				<StrigonOneFFXIVWebsite />
				{/* </div> */}
			</Container>
		</div>
	);
};

export default Portfolio;
