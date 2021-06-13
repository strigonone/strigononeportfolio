import React from "react";
import "../PortfolioStyle.css";
import StrigonWebsite from "../../../Images/strigonOneWebsite1080p.png";

const StrigonOneFFXIVWebsite = () => {
	return (
		<div className="mainPortfolioContainer">
			<div className="dateLeft">
				<h3>Early 2021 - Ongoing</h3>
			</div>
			<div className="mainPortfolioContents">
				<div className="mainPortfolioText">
					<h1>Strigon One | FFXIV </h1>
					<p>
						Platform to host my 3D Mods to a popular MMORPG Game Final Fantasy
						XIV
					</p>
					<h4>
						A simple website that hosts and showcases my work, and also where I
						obtained the name "Strigon One"
					</h4>
					<li>
						A website for mod users to browse through my work as well and get in
						touch with me
					</li>
					<li>My personal first step to the world of web development</li>
					<li>Schedule for a major overhaul to use React and Typescript</li>
					<a href="https://www.strigononeffxiv.com/">
						<button className="portfolioButton">More Details</button>
					</a>
					<h4>Technologies Used</h4>
					<div className="techUsed">
						<li>3DS Max</li>
						<li>WordPress</li>
						<li>Elementor</li>
						<li>Google Analytics</li>
					</div>
				</div>
				<div className="mainPortfolioProjectImage">
					<img src={StrigonWebsite} alt="strigonFFXIVWebsite" />
				</div>
			</div>
		</div>
	);
};

export default StrigonOneFFXIVWebsite;
