import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lightColor, setLightColor] = useState("red");

	const [newColor, setNewColor] = useState(false);

	const alternateLightColor = () => {
		console.log(lightColor);

		if (lightColor === "red") {
			setLightColor("yellow");
		} else if (lightColor === "yellow") {
			setLightColor("green");
		} else if (lightColor === "green") {
			if (newColor) {
				setLightColor("purple");
			} else setLightColor("red");
		} else if (lightColor === "purple") {
			setLightColor("red");
		}
	};

	return (
		<div className="container">
			<div className="bg-dark pole mx-auto"></div>
			<div className="black-box rounded mx-auto p-2">
				<div
					onClick={() => setLightColor("red")}
					className={
						"light red my-1 mx-auto " +
						(lightColor === "red" ? "shine" : "")
					}></div>
				<div
					onClick={() => setLightColor("yellow")}
					className={
						"light yellow my-1 mx-auto " +
						(lightColor === "yellow" ? "shine" : "")
					}></div>
				<div
					onClick={() => setLightColor("green")}
					className={
						"light green my-1 mx-auto " +
						(lightColor === "green" ? "shine" : "")
					}></div>
				{newColor ? (
					<div
						onClick={() => setLightColor("purple")}
						className={
							"light purple my-1 mx-auto " +
							(lightColor === "purple" ? "shine" : "")
						}></div>
				) : null}
			</div>
			<div className="mx-auto">
				<button
					onClick={() => alternateLightColor()}
					className="btn btn-primary m-3">
					Change light
				</button>
				<button
					onClick={() => setNewColor(!newColor)}
					className="btn btn-primary m-3">
					{newColor ? "Remove new color" : "Add new color"}
				</button>
			</div>
		</div>
	);
};

export default Home;
