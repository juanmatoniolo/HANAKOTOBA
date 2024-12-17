import React from "react";
import "./section-two.css";

import depto1 from "../../img/deptos/depto1.webp";
import depto2 from "../../img/deptos/deptos (3).svg";
import depto4 from "../../img/deptos/deptos (2).svg";
import depto3 from "../../img/deptos/deptos (4).svg";

function Section2() {

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
			<div className="container-section2">
				<div className="container container-2">
					<h2 className="texto-h22">Hanakotoba:</h2>
					<h3 className="texto-h32">
						Descubre el lenguaje de las flores
					</h3>
				</div>

				<div className="carrusel-img-2">
					<div
						id="carouselExample"
						className="carousel slide carousel-full-width"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src={depto4}
									className="d-block w-100"
									alt="Departamento 1"
								/>
							</div>
							<div className="carousel-item">
								<img
									src={depto2}
									className="d-block w-100"
									alt="Departamento 2"
								/>
							</div>
							<div className="carousel-item">
								<img
									src={depto3}
									className="d-block w-100"
									alt="Departamento 3"
								/>
							</div>
						</div>

						{/* Botones para avanzar/retroceder */}
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExample"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExample"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className="container-div-s">
					<div className="container-img-2">
						<img
							src={depto1}
							alt="imagen ilustrativa"
							className="container-img-2-img"
						/>
					</div>
					<div className="container-texto-2">
						<h2>Experiencia Hanakotoba</h2>
						<h4>¿Qué ofrecemos?</h4>
						<ul>
							<li>
								<strong>Alojamiento variado</strong>: Elige
								entre nuestros dúplex, ideales para familias o
								grupos de amigos, o nuestros departamentos,
								perfectos para parejas.
							</li>
							<li>
								<strong>Comodidades</strong>: Todas nuestras
								unidades cuentan con cocina y baño completos,
								aire acondicionado y Smart TV. Los dúplex
								incluyen además parrilla y cochera.
							</li>
							<li>
								<strong>Ubicación privilegiada</strong>: Estamos
								ubicados en el corazón del complejo termal de
								Chajarí, a pocos pasos de las piletas termales.
							</li>
							<li>
								<strong>Naturaleza y tranquilidad</strong>:
								Rodéate de un entorno natural y tranquilo,
								perfecto para desconectar del estrés diario.
							</li>
						</ul>
						<button className="btn-unidades"  onClick={reservarYa} >Ver unidades</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Section2;
