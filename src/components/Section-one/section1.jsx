import React from "react";
import "./section1.css";
import img1 from "../../img/deptos/depto1.jpg";

function section1() {
	const reservarYa = () => {
		const mensaje =
			"Hola! Quisiera consultar disponibilidad en Hanakotoba ";
		const numero = "+5493456445945";
		const url = `https://wa.me/${numero}?text=${encodeURIComponent(
			mensaje
		)}`;
		window.open(url, "_blank");
	};

	return (
		<>
			<div className="container-section1">
				<div className="caontainer1">
					<h1>Hanakotoba: Tu oasis floral en Termas Chajarí</h1>
					<p>
						Hanakotoba, que en japonés significa "el lenguaje de las
						flores", te invita a un viaje sensorial en medio de la
						naturaleza. Nuestras acogedoras cabañas y departamentos,
						inspirados en la belleza y el significado de las flores,
						te brindan el espacio perfecto para relajarte y
						reconectarte contigo mismo.
					</p>
					<button className="btn-reserva" onClick={reservarYa}>
						Reserva ya
					</button>
				</div>
				<div className="conainer-img">
					<img src={img1} className="container-img-img" alt="" />
				</div>
			</div>
		</>
	);
}

export default section1;
