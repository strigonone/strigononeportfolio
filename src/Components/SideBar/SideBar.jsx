import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBarStyle.css";
import * as AiIcons from "react-icons/ai";
import portfolioPic from "../../Images/portfolioPic.jpg";

const SideBar = () => {
	return (
		<div className="mainSideBarBackground">
			<div className="mainSideBarInnerCard">
				<img src={portfolioPic} alt="PortfolioPic" />
				<h1>Johnny Chao</h1>
				<h2>Junior Web developer</h2>

				<div className="mainSideBarInnerContent">
					<NavLink to="/portfolio" activeClassName="activeTab">
						Portfolio
					</NavLink>
					<NavLink to="/contactMe" activeClassName="activeTab">
						Contact Me
					</NavLink>

					<div className="mainSideBarInnerContentIcons">
						<a href="mailto: johnnychao92@gmail.com">
							<AiIcons.AiOutlineMail />
						</a>
						<a href="https://github.com/strigonone">
							<AiIcons.AiFillGithub />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
