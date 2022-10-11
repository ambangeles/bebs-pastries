import React from "react";
import "../assets/css/navbar.css";
import Nav from "./Nav";

function Navbar() {

	return (
		<header>
			<a href="/">
				<img src={require("../assets/img/logo.png")} alt="Bebs' Pastries" />
			</a>
			<Nav/>
		</header>
	);
}

export default Navbar;
