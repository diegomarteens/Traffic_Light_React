import React from "react";
import { TrafficLights } from "./trafficlights";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<TrafficLights />
		</div>
	);
}
