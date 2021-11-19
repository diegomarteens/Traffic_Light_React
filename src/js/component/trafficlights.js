import React from "react";
import PropTypes from "prop-types";

export function TrafficLights() {
	const [color, setColor] = React.useState("green");

	return (
		<div>
			<div
				onClick={() => {
					setColor("");
				}}
				className={
					"hookoflight" + (color === "null" ? " selected" : "")
				}></div>
			<div className="maintraffilight">
				<div
					onClick={() => {
						setColor("red");
					}}
					className={
						"red" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("yellow");
					}}
					className={
						"yellow" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("green");
					}}
					className={
						"green" + (color === "green" ? " selected" : "")
					}></div>
			</div>
			{/* <div className="background"></div> */}
		</div>
	);
}
<TrafficLights />;
