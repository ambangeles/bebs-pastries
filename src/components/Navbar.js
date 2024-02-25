import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import Nav from "./Nav";

function Navbar({ cartNo }) {
	return (
		<header>
			<Link to="/">
				<img src={require("../assets/img/logo.png")} alt="Bebs' Pastries" />
			</Link>
			{/* <Nav cartNo={cartNo} /> */}
		</header>
	);
}

export default Navbar;
