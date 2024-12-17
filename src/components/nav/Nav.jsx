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
					<Nav className="me-auto container-list">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Comodidades</Nav.Link>
						<Nav.Link href="#link">Duplex</Nav.Link>
						<Nav.Link href="#link">Departamentos</Nav.Link>
						<Nav.Link href="#link">Contacto</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navi;
