import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./Navbar";

import { Cuerpo } from "./Cuerpo";

import { Cartas } from "./Card";

import { RellenarCartas } from "./Card";

import { Pie } from "./Footer";
//create your first component
export function Home() {
	return (
		<div style={fondo}>
			<NavBar />
			<Cuerpo />
			<div
				className="d-flex justify-content-around flex-wrap m-2"
				style={fondo}>
				<RellenarCartas />
			</div>
			<Pie />
		</div>
	);
}

const fondo = {
	backgroundColor: " black"
};
