import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useEffect, useState } from "react";

//create your first component
const Home = () => {

	const [cont, setCont] = useState(0); 

	useEffect( ()=>{
		const interval = setInterval(() => setCont(cont + 1), 1000)
	})

	return (
		<SecondsCounter />
	);
};

export default Home;