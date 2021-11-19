import React from "react";

//include images into your bundle
import { TrafficLights } from "./trafficlights";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<TrafficLights />
		</div>
	);
};

export default Home;
