import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
	toTop: {
		zIndex: 2,
		position: "fixed",
		bottom: theme.spacing(4),
		right: theme.spacing(4),
		// backgroundColor: "#DCDCDC",
		// color: "black",
		// "&:hover, &.Mui-focusVisible": {
		// 	transition: "0.3s",
		// 	color: "#397BA6",
		// 	backgroundColor: "#DCDCDC",
		// },
		// [theme.breakpoints.up("xs")]: {
		// 	right: "5%",
		// 	backgroundColor: "rgb(220,220,220,0.7)",
		// },
		// [theme.breakpoints.up("lg")]: {
		// 	right: "6.5%",
		// },
	},
}));

const ScrollToTop = ({ showBelow }) => {
	const classes = useStyles();

	const [show, setShow] = useState(showBelow ? false : true);

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
		}
	};

	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` });
	};

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener(`scroll`, handleScroll);
		}
	});

	return (
		<div>
			{show && (
				<Grow
					in={handleScroll}
					style={{ transformOrigin: "0 0 0" }}
					{...(handleScroll ? { timeout: 1000 } : {})}
				>
					<Fab
						color="secondary"
						size="medium"
						onClick={handleClick}
						className={classes.toTop}
						aria-label="to top"
						component="span"
					>
						<ExpandLessIcon />
					</Fab>
				</Grow>
			)}
		</div>
	);
};
export default ScrollToTop;