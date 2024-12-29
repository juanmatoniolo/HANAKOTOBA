import React from "react";
import "./section4.css";
// Importar imágenes
import a from "../../img/deptos/deptos (4).svg";
import b from "../../img/deptos/deptos (3).svg";
import c from "../../img/img-fondo-gris.png";

// Datos de los dúplex
const duplexData = [
	{
		title: "Diente de Leon",
		description:
			"Simboliza la felicidad y la alegría de vivir. Capacidad 4 personas.",
		imageSrc: a,
	},
	{
		title: "Flor de cerezo",
		description:
			"Representa la belleza, la renovación y la esperanza. Capacidad 4 personas.",
		imageSrc: b,
	},
	{
		title: "Bambú",
		description:
			"Simboliza la flexibilidad, la fuerza y la longevidad. Capacidad 4 personas.",
		imageSrc: c,
	},
];

function Section4() {
	// Función para enviar el mensaje de WhatsApp
	const reservarYa = (duplexTitle) => {
		// Mensaje dinámico con el título del dúplex
		const mensaje = `Hola! Quisiera consultar disponibilidad en Hanakotoba para la unidad ${duplexTitle}.`;

		// Número de contacto (código internacional incluido)
		const numero = "+5493456445945";

		// Construcción de la URL de WhatsApp
		const url = `https://wa.me/${numero}?text=${encodeURIComponent(
			mensaje
		)}`;

		// Abrir el enlace en una nueva pestaña
		window.open(url, "_blank");
	};

	return (
		<div className="container-cards">
			{/* Título */}
			<div className="titulo">
				<h3 className="titulo-h3-s4">Nuestros dúplex:</h3>
			</div>

			<div className="duplex">
				{duplexData.map((duplex, index) => (
					<div className={`duplex${index + 1} duplexs`} key={index}>
						<div className="contenedor-img">
							<img
								src={duplex.imageSrc}
								className="tamanio-img"
								alt={duplex.title}
							/>
						</div>

						{/* Texto */}
						<div className="contenedor-texto">
							<h4>{duplex.title}</h4>
							<p>{duplex.description}</p>

							{/* Botón */}
							<div className="contenedor-btn">
								<button
									className="btn-unidades"
									onClick={() => reservarYa(duplex.title)} // Pasar el título como parámetro
								>
									Consular disponibilidad
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Section4;
