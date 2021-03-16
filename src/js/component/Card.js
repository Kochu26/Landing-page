import React from "react";
import PropTypes from "prop-types";

export function RellenarCartas() {
	let Carta1 = {
		titulo: "Black Hole",
		foto:
			"https://nuevodia.com.ve/wp-content/uploads/2020/05/agujero-negro.jpg",
		contenido:
			"A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole."
	};

	let Carta2 = {
		titulo: "Super Nova",
		foto:
			"https://www.unilad.co.uk/wp-content/uploads/2020/08/supernova-extinction.jpg",
		contenido:
			"A supernova (/ˌsuːpərˈnoʊvə/ plural: supernovae or supernovas, abbreviations: SN and SNe) is a powerful and luminous stellar explosion. This transient astronomical event occurs during the last evolutionary stages of a massive star or when a white dwarf is triggered into runaway nuclear fusion."
	};
	let Carta3 = {
		titulo: "Solar System",
		foto:
			"https://susitv.net/wp-content/uploads/2020/06/how-many-planets-are-there-in-the-solar-system-2-1024x639.jpg",
		contenido:
			"The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, the dwarf planets and small Solar System bodies."
	};
	let Carta4 = {
		titulo: "Exo Planets",
		foto:
			"https://solarearthusa.com/wp-content/uploads/2019/11/maxresdefault_live-25.jpg",
		contenido:
			"An exoplanet or extrasolar planet is a planet outside the Solar System. The first possible evidence of an exoplanet was noted in 1917, but was not recognized as such. The first confirmation of detection occurred in 1992. This was followed by the confirmation of a different planet, originally detected in 1988. "
	};
	let ArrCartas = [Carta1, Carta2, Carta3, Carta4];

	return ArrCartas.map(function(carta, i) {
		return (
			<Cartas
				key={i}
				titulo={ArrCartas[i].titulo}
				foto={ArrCartas[i].foto}
				contenido={ArrCartas[i].contenido}
			/>
		);
	});
}
export function Cartas(props) {
	return (
		<div className="card mt-4" style={{ width: "20rem" }}>
			<img
				className="card-img-top"
				src={props.foto}
				alt="Imagen de carta"
			/>
			<div
				className="card-body d-flex flex-column justify-content-center"
				style={texto}>
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.contenido}</p>
				<a href="#" className="btn btn-dark ">
					Find out more!
				</a>
			</div>
		</div>
	);
}

Cartas.propTypes = {
	foto: PropTypes.string,
	contenido: PropTypes.string,
	titulo: PropTypes.string
};

const texto = {
	textAlign: "justify"
};
