import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import img1 from "../../img/hanakotoba.svg.svg";
import "./nav-style.css";

function Navi() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<Navbar className="container-fluid container-nav" expand="md">
			<Container className="contenedor-nav" fluid>
				<Navbar.Brand className="container-img-caja">
					<img src={img1} className="container-img" alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={toggleMenu}
				/>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className={showMenu ? "show" : ""}
				>
					<Nav className="me-auto container-list" id="home">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#comodidades">Comodidades</Nav.Link>
						<Nav.Link href="#duplex">Duplex</Nav.Link>
						<Nav.Link href="#departamentos">Departamentos</Nav.Link>
						<Nav.Link href="#contacto">Contacto</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navi;
