import React from "react";
// Importar estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importar JavaScript de Bootstrap (opcional, si no utilizas funcionalidad JS de Bootstrap)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import Section1 from "./components/Section-one/section1";
import Section2 from "./components/Section-two/Section-two";
import Hanakotoba from "./components/Section-three/Section-3";
import Section4 from "./components/section.4/Section-4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";

const App = () => {
	return (
		<>
			<main className="main-hanakotoba">
				<Nav />
				<Section1 />
				<Section2 />
				<Hanakotoba />
				<Section4 />
				<Section5 />
				<Section6 />
			</main>
		</>
	);
};

export default App;
