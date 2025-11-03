import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {

	const [seconds, setSeconds] = useState(0);


	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);

		// Limpiaaaaa el intervalo 
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> Han pasado {seconds} segundos</h1>
			<a href="#" className="btn btn-success">
				Este botón no va a ningún sitio pero es chulo 
			</a>
		</div>
	);
};

export default Home;
