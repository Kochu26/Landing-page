import React from "react";

export function Cuerpo() {
	return (
		<div className="pt-5 pb-5" style={estiloCuerpo}>
			<h1>Astronomy</h1>
			<div style={texto}>
				<span>
					Astronomy (from Greek: ἀστρονομία, literally meaning the
					science that studies the laws of the stars) is a natural
					science that studies celestial objects and phenomena. It
					uses mathematics, physics, and chemistry in order to explain
					their origin and evolution. Objects of interest include
					planets, moons, stars, nebulae, galaxies, and comets.
					Relevant phenomena include supernova explosions, gamma ray
					bursts, quasars, blazars, pulsars, and cosmic microwave
					background radiation. More generally, astronomy studies
					everything that originates outside Earth's atmosphere.
					Cosmology is a branch of astronomy. It studies the Universe
					as a whole.
				</span>
				<br />
				<button type="button" className="btn btn-dark mt-3 ">
					START
				</button>
			</div>
		</div>
	);
}
const estiloCuerpo = {
	backgroundColor: "	black",
	margin: "10px",
	borderRadius: "5px",
	padding: "20px",
	marginLeft: "30px",
	marginRight: "30px",
	marginTop: "80px",
	color: " white"
};

const texto = {
	textAlign: "justify"
};
