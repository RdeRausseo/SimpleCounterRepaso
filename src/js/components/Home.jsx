import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {

	const [cont, setCont] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => setCont(cont + 1), 1000)

		return () => {
			clearInterval(interval)
		}

	}, [cont])

	return (
		<SecondsCounter time={cont} />
	);
};

export default Home;