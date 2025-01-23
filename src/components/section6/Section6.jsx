import React, { useState } from "react";
import "./section6.css";
import a from "../../img/google-maps.png";

function Section6() {
	// Estado para almacenar los datos del formulario
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Manejar cambios en los campos del formulario
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Función para enviar el mensaje a WhatsApp
	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, message } = formData;

		// Crear un mensaje para WhatsApp
		const whatsappMessage = `Nombre: ${name}%0ACorreo: ${email}%0AMensaje: ${message}`;

		// Crear la URL de WhatsApp
		const whatsappUrl = `https://wa.me/5493456445945?text=${whatsappMessage}`;

		// Abrir la URL de WhatsApp en una nueva ventana
		window.open(whatsappUrl, "_blank");
	};

	// Dirección de destino (Hanakotoba duplex)
	const destino = "7X5P+7H Chajarí, Entre Ríos";

	// Función para obtener ubicación actual y redirigir
	const irAGoogleMaps = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// Obtener las coordenadas actuales
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;

					// Construir URL de Google Maps con la ubicación actual
					const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=${encodeURIComponent(
						destino
					)}&travelmode=driving`;

					// Abrir Google Maps en una nueva pestaña
					window.open(url, "_blank");
				},
				(error) => {
					alert(
						"No se pudo obtener la ubicación actual. Asegúrate de habilitar la geolocalización."
					);
				}
			);
		} else {
			alert("Geolocalización no es compatible con tu navegador.");
		}
	};

	return (
		<>
			<h2 className="como-llegar ">Como llegar:</h2>
			<div className="container container-google">
				<img
					src={a}
					onClick={irAGoogleMaps}
					className="img-hanakotoba-maps"
					alt="img-hanakotoba-maps"
				/>
				<br />
				<br />
				<button
					onClick={irAGoogleMaps}
					className="btn-mapa-google"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						fill="currentColor"
						class="bi bi-geo-alt"
						viewBox="0 0 16 16"
                     
					>
						<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
						<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
					</svg>
					Ir al complejo
				</button>
				<br />
			</div>

			<div className="container section-6" id="contacto">
				<h2 className="como-llegar" >Dejanos tu mensaje: </h2>

				{/* Formulario para enviar mensaje a WhatsApp */}
				<form onSubmit={handleSubmit} className="contact-form">
					<div className="form-group">
						<label htmlFor="name">Nombre:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Correo electrónico:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message">Mensaje:</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>

					{/* Botón para enviar el mensaje de WhatsApp */}
					<button type="submit" className="btn-mapa">
						Enviar
					</button>
				</form>
				<br />
			</div>
		</>
	);
}

export default Section6;
