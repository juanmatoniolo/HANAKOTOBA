import React from "react";
import "./section-3.css";
import a from "../../img/deptos/deptos (4).svg";
import b from "../../img/deptos/deptos (3).svg";
import c from "../../img/img-fondo-gris.png";

function Section3() {
	return (
		<>
			<div className="contenedor" >
				<div className=" container-3">
					<div className="img1">
						<img src={b} className="img1-img" alt="" />
					</div>
					<div className="img2">
						<img src={a} className="img2-img" alt="" />
						<h2 className="texto-h2-3">Nuestras unidades</h2>
					</div>
					<div className="img3">
						<img src={c} alt="" className="img3-img" />
						<p className="textp-p-3">
							Cada flor, una experiencia unica
						</p>
					</div>
				</div>
				<h2 className="texto-h2-4">Nuestras unidades</h2>
			</div>
		</>
	);
}

export default Section3;
