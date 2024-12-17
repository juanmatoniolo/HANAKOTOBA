import React from "react";
// Importar estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar JavaScript de Bootstrap (opcional, si no utilizas funcionalidad JS de Bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import Section1 from "./components/Section-one/section1";
import Section2 from "./components/Section-two/Section-two";
const App = () => {
	return (
		<>
			<Nav />
			<Section1 />
			<Section2 />
		</>
	);
};

export default App;
